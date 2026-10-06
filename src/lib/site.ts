import { getCollection, type CollectionEntry } from 'astro:content';

export const SITE = 'https://clippingguide.com';
export const topics = [
  {
    id: 'getting-started',
    title: 'Start clipping',
    description: 'Understand the basics and make your first clip.',
    icon: 'ph:scissors',
    label: 'Getting started',
  },
  {
    id: 'editing',
    title: 'Make better edits',
    description: 'Find the moment. Shape the story. Keep it readable.',
    icon: 'ph:sliders-horizontal',
    label: 'Editing',
  },
  {
    id: 'publishing',
    title: 'Publish with confidence',
    description: 'Export, check permissions, and learn from your results.',
    icon: 'ph:upload-simple',
    label: 'Publishing',
  },
  {
    id: 'earning',
    title: 'Understand the money',
    description: 'Campaign rules, eligible views, and realistic expectations.',
    icon: 'ph:chart-line-up',
    label: 'Earning',
  },
] as const;
export const allGuides = async () =>
  (await getCollection('guides')).sort((a, b) => a.data.order - b.data.order);
export const guideUrl = (guide: CollectionEntry<'guides'>) => `/guides/${guide.id}/`;
export const readingTime = (body = '') => Math.max(2, Math.ceil(body.split(/\s+/).length / 220));
export const topicLabel = (id: string) => topics.find((topic) => topic.id === id)?.label ?? id;
export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T12:00:00Z`));
export const jsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');
