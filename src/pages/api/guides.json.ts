import { allGuides, guideUrl, SITE } from '../../lib/site';
export async function GET() {
  const guides = (await allGuides()).map(guide => ({ id: guide.id, title: guide.data.title, description: guide.data.description, topic: guide.data.topic, level: guide.data.level, published: guide.data.published, updated: guide.data.updated, answer: guide.data.answer, url: `${SITE}${guideUrl(guide)}`, markdown: `${SITE}/guides/${guide.id}.md`, sources: guide.data.sources }));
  return new Response(JSON.stringify({ site: 'Clipping Guide', canonical: SITE, language: 'en', guides }, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}

