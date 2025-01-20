export default function sitemap() {
  const baseUrl = 'https://www.malena-design-atelier.com';

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
