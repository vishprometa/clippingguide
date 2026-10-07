# Clipping Guide launch status

Updated October 6, 2026.

## Live deployment

- Canonical site: https://clippingguide.com, verified over HTTPS with a 200 response.
- www.clippingguide.com, clippingguide.vercel.app, and clippingguide-somnath6646s-projects.vercel.app use Vercel project-domain 308 redirects to the canonical apex. Live checks confirm nested paths and query strings are preserved, and the canonical destination returns 200 without an unintended noindex. Keep these persistent domain settings during future deployments; the source-config hostname redirects did not take effect in the live Astro deployment and were removed.
- Namecheap BasicDNS: apex A record 216.198.79.1, www CNAME c21e442d13bfe336.vercel-dns-017.com. Both records verified on the authoritative nameserver.
- The current publication design is search-first, with compact editorial content and no decorative ocean hero or repeated image thumbnails.
- Fourteen original guides, the free calculator/checklist, all canonical HTML routes, Markdown exports, the JSON guide index, RSS, robots, and sitemap are deployed.
- Vercel Web Analytics is installed and enabled; its live script returns 200.

## Search setup

- Google Search Console domain property sc-domain:clippingguide.com is verified through the Namecheap DNS TXT record.
- The sitemap index and direct URL sitemap both report Success in the signed-in Search Console sitemap report, with last-read dates of October 6, 2026. The direct URL sitemap reports 28 discovered pages. The initial Could not fetch status is resolved. Discovery does not establish indexing of every submitted URL or rankings for particular queries.
- Google's Live URL Inspection confirms the homepage is available to Google.
- The homepage is confirmed indexed: signed-in URL Inspection reports URL is on Google and Page is indexed, verified October 6, 2026. The earlier indexing request was accepted into Google's priority crawl queue. Remaining useful pages and query rankings still need separate monitoring.
- Search Console's Performance report currently says Processing data, please check again in a day or so. Clicks, impressions, and positions are unavailable; do not record them as zero or invent rankings.
- Ahrefs project Clipping Guide (ID 10492999) is created and ownership is verified through the published HTML tag. The first crawl reported Health Score 100 and zero errors. Weekly audits are scheduled Tuesdays, 5:00-5:59 PM, Pacific Time (Los Angeles). The account is on the Free plan; API keyword metrics/rank tracking are unavailable, and no paid upgrade is authorized.

## Publishing and monitoring

The hourly heartbeat clipping-guide-creator-updates-and-site-health is active. Publishing is search-led, as instructed by the user. Read search-strategy.md and search-demand.json. Creator videos are research inputs for an identified query, not automatic publication triggers. Unknown volume and difficulty remain unknown.

Preserve the live design and URLs. Do not reintroduce the rejected decorative imagery. Monitor the verified Ahrefs project, Google indexing and query performance, and any new sitemap failure. Do not repeat unchanged-state notifications or submit repeated indexing requests for the same URL in an effort to speed it up.

## Baseline audit follow-up

The first Ahrefs report flagged seven long titles and five short descriptions. The source was updated to shorten the seven affected titles and give topic/privacy pages useful search descriptions. Internal links, metadata, schema JSON, sitemap entries, and all fourteen authored guide endpoints pass the build audit. Noindex on seventeen machine-readable duplicate copies is intentional, and HTTP/www redirects are intentional.
