/** Local image paths served from client/public — no external hotlinks. */
export const SITE_IMAGES = {
  hero: '/images/site/hero.jpg',
  inspo: '/images/site/inspo.jpg',
  aboutBaker: '/images/site/about-baker.jpg',
  galleryPastries: '/images/site/gallery-pastries.jpg',
} as const;

export const CAKE_IMAGES = [
  { slug: 'imeruli-khachapuri', label: 'Imeruli Khachapuri' },
  { slug: 'megruli-khachapuri', label: 'Megruli Khachapuri' },
  { slug: 'lobiani', label: 'Lobiani' },
  { slug: 'chebureki', label: 'Chebureki' },
  { slug: 'honey-cake', label: 'Honey Cake' },
  { slug: 'napoleon-slice', label: 'Napoleon Slice' },
  { slug: 'chocolate-eclair', label: 'Chocolate Eclair' },
  { slug: 'cream-horn', label: 'Cream Horn' },
  { slug: 'birthday-cake', label: 'Birthday Cake' },
] as const;

export function cakeImagePath(slug: string): string {
  return `/images/cakes/${slug}.jpg`;
}

/** Resolve a stored imageUrl for use in img src. */
export function resolveImageSrc(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const api = import.meta.env['VITE_API_URL'] ?? '';
  if (url.startsWith('/uploads') && api) return `${api}${url}`;
  return url;
}
