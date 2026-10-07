# Clipping Guide launch status

Updated October 6, 2026.

## Live deployment

- Canonical site: https://clippingguide.com, verified over HTTPS with a 200 response.
- www.clippingguide.com redirects to the canonical apex.
- Namecheap BasicDNS: apex A record 216.198.79.1, www CNAME c21e442d13bfe336.vercel-dns-017.com. Both records verified on the authoritative nameserver.
- The current publication design is search-first, with compact editorial content and no decorative ocean hero or repeated image thumbnails.
- Fourteen original guides, the free calculator/checklist, all canonical HTML routes, Markdown exports, the JSON guide index, RSS, robots, and sitemap are deployed.
- Vercel Web Analytics is installed and enabled; its live script returns 200.

## Search setup

- Google Search Console domain property sc-domain:clippingguide.com is verified through the Namecheap DNS TXT record.
- The sitemap index and direct URL sitemap were submitted successfully. Google's initial processing status is Could not fetch / not yet read; public XML validation, normal HTTP fetches, and GET/HEAD with a Googlebot user-agent succeed. This status remains pending and is monitored. Google's Live URL Inspection independently confirms homepage fetchability.
- Google's Live URL Inspection confirms the homepage is available to Google.
- The homepage indexing request was accepted and placed in Google's priority crawl queue. This is not confirmation that it has been indexed.
- Ahrefs project Clipping Guide (ID 10492999) is created and ownership is verified through the published HTML tag. The first crawl reported Health Score 100 and zero errors. Weekly audits are scheduled Tuesdays, 5:00-5:59 PM, Pacific Time (Los Angeles). The account is on the Free plan; API keyword metrics/rank tracking are unavailable, and no paid upgrade is authorized.

## Publishing and monitoring

The hourly heartbeat clipping-guide-creator-updates-and-site-health is active. Publishing is search-led, as instructed by the user. Read search-strategy.md and search-demand.json. Creator videos are research inputs for an identified query, not automatic publication triggers. Unknown volume and difficulty remain unknown.

Preserve the live design and URLs. Do not reintroduce the rejected decorative imagery. Monitor the verified Ahrefs project and Google sitemap processing. Do not repeat known pending-state notifications while nothing actionable changed, and do not submit repeated indexing requests for the same URL in an effort to speed it up.

## Baseline audit follow-up

The first Ahrefs report flagged seven long titles and five short descriptions. The source was updated to shorten the seven affected titles and give topic/privacy pages useful search descriptions. Internal links, metadata, schema JSON, sitemap entries, and all fourteen authored guide endpoints pass the build audit. Noindex on seventeen machine-readable duplicate copies is intentional, and HTTP/www redirects are intentional.
