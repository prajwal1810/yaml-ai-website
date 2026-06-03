const baseUrl = 'https://yamlai.in';
const lastModified = new Date('2026-06-03');

const routes = [
  ['', 1],
  ['/services/', 0.9],
  ['/solutions/', 0.85],
  ['/case-studies/', 0.75],
  ['/about/', 0.7],
  ['/contact/', 0.8],
  ['/blog/', 0.8],
  ['/blog/ai-agents-real-estate-india/', 0.9]
];

export default function sitemap() {
  return routes.map(([route, priority]) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority
  }));
}
