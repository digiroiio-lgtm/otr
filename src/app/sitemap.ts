import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://otrretreading.com';
  const routes = ['/','/solutions','/solutions/retreading-systems','/solutions/tyre-machinery','/solutions/otr-services','/solutions/technical-compounds','/resources','/resources/blog','/resources/guides','/resources/technical-data-sheets','/company','/company/history','/company/sustainability','/company/careers','/company/research-development-lab','/company/certifications','/case-studies','/faq','/contact'];
  return routes.map(route => ({ url: `${baseUrl}${route}`, lastModified: new Date() }));
}
