import { allGuides, guideUrl, SITE } from '../../lib/site';
import type { CollectionEntry } from 'astro:content';
export async function getStaticPaths() {
  return (await allGuides()).map((guide) => ({ params: { slug: guide.id }, props: { guide } }));
}
export function GET({ props }: { props: { guide: CollectionEntry<'guides'> } }) {
  const { guide } = props;
  const sources = guide.data.sources
    .map((source) => `- [${source.title}](${source.url})`)
    .join('\n');
  const text = `# ${guide.data.title}\n\n${guide.data.description}\n\nCanonical: ${SITE}${guideUrl(guide)}\nPublished: ${guide.data.published}\nUpdated: ${guide.data.updated}\nAuthor: Clipping Guide editorial\n\n## The quick answer\n\n${guide.data.answer}\n\n${guide.body}\n\n## Sources\n\n${sources}\n`;
  return new Response(text, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
}
