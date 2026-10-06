"""Validate the published HTML and discovery files using the standard library."""
from collections import Counter
from html.parser import HTMLParser
import json
from pathlib import Path
import sys
from urllib.parse import urlparse, unquote
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1] / "dist"
ORIGIN = "https://clippingguide.com"

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.hrefs = []
        self.ids = set()
        self.title = ""
        self.description = None
        self.canonical = None
        self.h1s = 0
        self.schemas = []
        self.active = None
        self.buffer = []
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        if tag == "a" and "href" in attrs:
            self.hrefs.append(attrs["href"])
        if tag == "h1":
            self.h1s += 1
        if tag == "meta" and attrs.get("name") == "description":
            self.description = attrs.get("content")
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonical = attrs.get("href")
        if tag == "title" or (tag == "script" and attrs.get("type") == "application/ld+json"):
            self.active = tag
            self.buffer = []

    def handle_data(self, data):
        if self.active:
            self.buffer.append(data)

    def handle_endtag(self, tag):
        if self.active != tag:
            return
        text = "".join(self.buffer)
        if tag == "title":
            self.title = text
        else:
            self.schemas.append(json.loads(text))
        self.active = None

def target_file(path):
    target = ROOT / unquote(path).lstrip("/")
    return target / "index.html" if path.endswith("/") else target

def main():
    pages = [Page(path) for path in ROOT.rglob("*.html")]
    errors = []
    by_path = {page.path.resolve(): page for page in pages}
    titles = Counter(page.title for page in pages)
    descriptions = Counter(page.description for page in pages)
    for page in pages:
        label = str(page.path.relative_to(ROOT))
        if not page.title or titles[page.title] > 1:
            errors.append(f"{label}: missing or duplicate title")
        if not page.description or descriptions[page.description] > 1:
            errors.append(f"{label}: missing or duplicate description")
        if not page.canonical or not page.canonical.startswith(ORIGIN + "/"):
            errors.append(f"{label}: missing canonical URL")
        if page.h1s != 1:
            errors.append(f"{label}: expected one h1, found {page.h1s}")
        for href in page.hrefs:
            url = urlparse(href)
            if url.netloc and url.netloc != "clippingguide.com":
                continue
            if url.scheme not in ("", "https"):
                continue
            target = target_file(url.path) if url.path else page.path
            if not target.exists():
                errors.append(f"{label}: missing link destination {href}")
            elif url.fragment and target.resolve() in by_path and unquote(url.fragment) not in by_path[target.resolve()].ids:
                errors.append(f"{label}: missing anchor {href}")
    index = json.loads((ROOT / "api/guides.json").read_text())
    source_ids = {path.stem for path in (ROOT.parent / "src/content/guides").glob("*.md")}
    built_ids = {guide["id"] for guide in index["guides"]}
    if source_ids != built_ids:
        errors.append("Built guide index differs from the authored guides; rebuild before release")
    for guide in index["guides"]:
        if not target_file(urlparse(guide["url"]).path).exists() or not target_file(urlparse(guide["markdown"]).path).exists():
            errors.append(f"Guide {guide['id']} is missing an HTML or Markdown endpoint")
    sitemap = ET.fromstring((ROOT / "sitemap-0.xml").read_text())
    urls = [entry.text for entry in sitemap.iter() if entry.tag.endswith("loc")]
    if any(not url.endswith("/") or not target_file(urlparse(url).path).exists() for url in urls):
        errors.append("Sitemap contains a noncanonical or missing page")
    print(json.dumps({"htmlPages": len(pages), "guides": len(index["guides"]), "sitemapUrls": len(urls), "errors": errors}, indent=2))
    sys.exit(bool(errors))

if __name__ == "__main__":
    main()
