"""Read the four pinned public RSS feeds. Never mark an item handled here."""
import concurrent.futures
import json
from pathlib import Path
import urllib.request
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
NAMESPACES = {"a": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015"}

def read_channel(channel):
    url = "https://www.youtube.com/feeds/videos.xml?channel_id=" + channel["channelId"]
    try:
        with urllib.request.urlopen(url, timeout=20) as response:
            document = ET.fromstring(response.read())
        videos = []
        for entry in document.findall("a:entry", NAMESPACES):
            video_id = entry.findtext("yt:videoId", namespaces=NAMESPACES)
            videos.append({"id": video_id, "title": entry.findtext("a:title", namespaces=NAMESPACES), "published": entry.findtext("a:published", namespaces=NAMESPACES), "url": "https://www.youtube.com/watch?v=" + video_id, "creator": channel["name"]})
        return {"channel": channel["name"], "videos": videos}
    except (OSError, ET.ParseError) as error:
        return {"channel": channel["name"], "error": str(error), "videos": []}

def main():
    channels = json.loads((ROOT / "docs/creator-sources.json").read_text())["channels"]
    baseline = json.loads((ROOT / "docs/creator-feed-baseline.json").read_text())
    baseline_ids = {entry["id"] for channel in baseline for entry in channel.get("entries", [])}
    handled_path = ROOT / "docs/creator-handled.json"
    handled = json.loads(handled_path.read_text()) if handled_path.exists() else []
    handled_ids = {entry["id"] for entry in handled}
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        results = list(pool.map(read_channel, channels))
    new = [video for channel in results for video in channel["videos"] if video["id"] not in baseline_ids | handled_ids]
    errors = [{"channel": channel["channel"], "error": channel["error"]} for channel in results if "error" in channel]
    print(json.dumps({"newVideos": new, "errors": errors}, indent=2))

if __name__ == "__main__":
    main()

