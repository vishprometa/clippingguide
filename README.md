# Clipping Guide

Independent, source-backed video clipping guides and useful browser tools.

- Canonical site: https://clippingguide.com
- Framework: Astro with static HTML output
- Hosting: Vercel, project `somnath6646s-projects/clippingguide`
- Analytics: Vercel Web Analytics
- Content: Markdown collections in `src/content/guides/`

## Develop and verify

```sh
npm ci
npm run dev
npm run check
npm test
npm run build
python3 scripts/audit-build.py
```

The earnings tests cover eligible-view math, caps, deductions, negative net results, and invalid inputs. The build audit checks page metadata, heading structure, structured-data JSON, internal links and anchors, sitemap destinations, and guide retrieval endpoints.

## Add or update a guide

Follow [the publishing playbook](docs/publishing-playbook.md). Use actual dates, cite relevant official documentation, distinguish examples from observations, and do not claim tool testing or earnings results that did not happen. Add a contextual internal link and run the checks before publishing.

## Agent access

- `/api/guides.json` provides discovery metadata, answers, canonical URLs, Markdown URLs, and sources.
- `/guides/{slug}.md` provides the full guide as Markdown.
- `/llms.txt` maps public content; `/llms-full.txt` provides a text collection.
- `/rss.xml`, `/robots.txt`, and `/sitemap-index.xml` support standard discovery.

Machine copies are available publicly but excluded from search indexing to keep canonical HTML pages as the search destination.

## Creator updates

Verified public channel IDs are in `docs/creator-sources.json`. Run `python3 scripts/check-creator-feeds.py` to discover uploads not in the launch baseline or handled ledger. Record a video as handled only after a verified publication or an explicit editorial decision to skip it. Do not store full third-party transcripts in this repository.

## Release

Publish the verified change to `main`, then run:

```sh
vercel --prod --yes --scope somnath6646s-projects
```

Verify the canonical domain, changed page, sitemap, and Markdown/JSON access after deployment. Vercel's deployment history retains previous production deployments for rollback.

