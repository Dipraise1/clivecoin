import { MetadataRoute } from 'next';
import { merchProducts } from '../data/merchProducts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://clivecoin.com';
  
  // Create a timestamp for the current date
  const currentDate = new Date().toISOString();
  
  // Base pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/roadmap`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/merch`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contract-address`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ] as MetadataRoute.Sitemap;
  
  // Generate product pages
  const productPages = merchProducts.map((product) => {
    return {
      url: `${baseUrl}/merch/${product.id}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    };
  }) as MetadataRoute.Sitemap;
  
  return [...staticPages, ...productPages];
} 