/** Local image paths served from client/public — no external hotlinks. */
export const SITE_IMAGES = {
  logo: '/images/site/logo.jpg',
  hero: '/images/site/hero.jpg',
  inspo: '/images/site/inspo.jpg',
  aboutBaker: '/images/site/about-baker.jpg',
  galleryPastries: '/images/site/gallery-pastries.jpg',
} as const;

export const CAKE_CATEGORIES = [
  { slug: 'kids-birthday', label: "Kids' Birthday Cakes" },
  { slug: 'baby-cakes', label: 'Baby & Newborn Cakes' },
  { slug: 'wedding-elegant', label: 'Wedding & Elegant Cakes' },
  { slug: 'themed-celebration', label: 'Themed Celebration Cakes' },
] as const;

export const CAKE_IMAGES = [
  { slug: 'safari-birthday-cake', label: 'Safari Jungle Birthday', category: 'kids-birthday' },
  { slug: 'paw-patrol-birthday', label: 'Paw Patrol Birthday', category: 'kids-birthday' },
  { slug: 'carousel-birthday', label: 'Carousel Birthday', category: 'kids-birthday' },
  { slug: 'unicorn-birthday', label: 'Unicorn Garden Birthday', category: 'kids-birthday' },
  { slug: 'candy-land-birthday', label: 'Candy Land Birthday', category: 'kids-birthday' },
  { slug: 'teddy-bear-newborn', label: 'Teddy Bear Newborn', category: 'baby-cakes' },
  { slug: 'moon-stars-baby', label: 'Moon & Stars Baby', category: 'baby-cakes' },
  { slug: 'bunny-birth-cake', label: 'Bunny Birth Announcement', category: 'baby-cakes' },
  { slug: 'floral-watercolor-cake', label: 'Floral Watercolor Tier', category: 'wedding-elegant' },
  { slug: 'classic-cream-wedding', label: 'Classic Cream Wedding', category: 'wedding-elegant' },
  { slug: 'fresh-strawberry-cake', label: 'Fresh Strawberry Cake', category: 'wedding-elegant' },
  { slug: 'white-petal-cake', label: 'White Petal Elegance', category: 'wedding-elegant' },
  { slug: 'strawberry-babys-breath', label: "Strawberry & Baby's Breath", category: 'wedding-elegant' },
  { slug: 'little-prince-cake', label: 'Little Prince Cake', category: 'themed-celebration' },
  { slug: 'princess-crown-cake', label: 'Princess Crown Cake', category: 'themed-celebration' },
  { slug: 'butterfly-garden-cake', label: 'Butterfly Garden', category: 'themed-celebration' },
  { slug: 'black-gold-crown', label: 'Black & Gold Crown', category: 'themed-celebration' },
] as const;

export function cakeImagePath(slug: string): string {
  return `/images/cakes/${slug}.jpg`;
}

export function galleryImagePath(category: string, filename: string): string {
  return `/images/gallery/${category}/${filename}`;
}

/** Resolve a stored imageUrl for use in img src. */
export function resolveImageSrc(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const api = import.meta.env['VITE_API_URL'] ?? '';
  if (url.startsWith('/uploads') && api) return `${api}${url}`;
  return url;
}
