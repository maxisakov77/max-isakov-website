import type { MetadataRoute } from 'next';

const BASE = 'https://www.maxaec.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    { url: `${BASE}/`, changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${BASE}/services`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE}/services/residential`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE}/services/government`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE}/compliance`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE}/portfolio`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE}/city-of-yes`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/team`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/contact`, changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  const profiles = [
    { url: `${BASE}/team/max-isakov`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE}/team/peter-krasnow`, changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  const projectSlugs = ['bbj', 'baltimore', 'macomb', 'morris', 'tribal', 'covid'];
  const projects = projectSlugs.map((slug) => ({
    url: `${BASE}/projects/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...profiles, ...projects].map((entry) => ({
    ...entry,
    lastModified: now,
  }));
}
