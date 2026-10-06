import { allGuides, guideUrl, SITE } from '../lib/site';
export async function GET() {
  const text = (await allGuides())
    .map(
      (guide) =>
        `# ${guide.data.title}\n\nCanonical: ${SITE}${guideUrl(guide)}\nUpdated: ${guide.data.updated}\n\n${guide.data.answer}\n\n${guide.body}\n\nSources:\n${guide.data.sources.map((source) => `- ${source.title}: ${source.url}`).join('\n')}`,
    )
    .join('\n\n---\n\n');
  return new Response(
    `# Clipping Guide\n\nIndependent research-based guides. Examples are illustrative, earnings are not guaranteed, and product comparisons do not claim hands-on testing.\n\n${text}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
}
