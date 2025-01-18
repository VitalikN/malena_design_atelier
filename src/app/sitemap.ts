export default function sitemap() {
  const baseUrl = 'https://malena-design-atelier.vercel.app/';

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
