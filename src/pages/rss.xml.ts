import rss from '@astrojs/rss';
import { allGuides, guideUrl, SITE } from '../lib/site';
export async function GET() {
  return rss({ title: 'Clipping Guide', description: 'Practical video clipping guides, tutorials, and free tools.', site: SITE, items: (await allGuides()).map(guide => ({ title: guide.data.title, description: guide.data.description, pubDate: new Date(`${guide.data.published}T12:00:00Z`), link: guideUrl(guide) })), customData: '<language>en-us</language>' });
}

