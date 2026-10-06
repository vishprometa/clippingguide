import { allGuides, SITE } from '../lib/site';
export async function GET() {
  const links = (await allGuides()).map(guide => `- [${guide.data.title}](${SITE}/guides/${guide.id}.md): ${guide.data.description}`).join('\n');
  return new Response(`# Clipping Guide\n\n> Independent, practical guides to video clipping, editing, publishing, and campaign earnings. Research-based content with official sources and update dates.\n\n## Discovery\n- [JSON index](${SITE}/api/guides.json)\n- [Complete text](${SITE}/llms-full.txt)\n- [Editorial standards](${SITE}/about/)\n- [RSS](${SITE}/rss.xml)\n\n## Guides\n${links}\n\n## Free tools\n- [Earnings calculator](${SITE}/tools/earnings-calculator/)\n- [Publishing checklist](${SITE}/tools/clip-checklist/)\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
