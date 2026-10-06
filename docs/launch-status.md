# Launch status

Recorded October 6, 2026.

- The site is deployed on Vercel and publicly accessible at https://clippingguide.vercel.app.
- The production domain aliases clippingguide.com and www.clippingguide.com are attached; www redirects to the apex.
- Vercel Web Analytics is installed and enabled.
- The canonical domain DNS is still pointed at Namecheap parking. Browser control was interrupted by other activity in Brave, so no DNS edits were saved.
- Ahrefs is connected, but its MCP API returned Insufficient plan. Creating and verifying the Site Audit project in the signed-in web dashboard remains pending. Do not upgrade a paid plan.
- Search Console property verification and sitemap submission remain pending. GSC Wizard was not authenticated in the original check and is no longer an available tool in this session.
- The hourly creator-updates and health heartbeat is active: clipping-guide-creator-updates-and-site-health.

## DNS records to finish

Use the existing Namecheap BasicDNS zone. Vercel's domain-configuration API returned these preferred targets:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 216.198.79.1 |
| CNAME | www | c21e442d13bfe336.vercel-dns-017.com |

Replace only the default apex URL redirect and www parking record. Preserve mail and unrelated records. Vercel also accepts the legacy A target 76.76.21.21, which its CLI suggested. Re-read the current Vercel configuration before applying records if these instructions are used later.

After DNS resolves to Vercel, verify HTTPS on the apex, the www redirect, the homepage, a guide, the guide JSON and Markdown endpoint, robots, sitemap, and the analytics script. Then create/verify the Ahrefs project, start a Site Audit crawl, and enable an appropriate recurring crawl supported by the current plan. Verify Google Search Console ownership and submit https://clippingguide.com/sitemap-index.xml.

For recurring runs, this DNS/account state is an already-known setup blocker. Stay quiet while it is unchanged; check the public Vercel preview for deployment health, and notify when the canonical domain begins serving the site or a new actionable failure appears. Do not treat a Vercel login page or a Namecheap parking page as a successful site check.
