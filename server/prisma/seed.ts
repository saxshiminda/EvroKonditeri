import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const img = (slug: string) => `/images/cakes/${slug}.jpg`;

const defaultCategories = [
  { name: "Kids' Birthday Cakes", slug: 'kids-birthday' },
  { name: 'Baby & Newborn Cakes', slug: 'baby-cakes' },
  { name: 'Wedding & Elegant Cakes', slug: 'wedding-elegant' },
  { name: 'Themed Celebration Cakes', slug: 'themed-celebration' },
];

const branches = [
  {
    name: 'Nadzaladevi — Ts. Dadiani St',
    address: '6 Ts. Dadiani Street, Nadzaladevi, Tbilisi',
    phone: '+995 597 68 50 50',
  },
  {
    name: 'Saburtalo — Pekini Avenue',
    address: '42 Pekini Avenue, Saburtalo, Tbilisi',
    phone: '+995 595 61 85 85',
  },
  {
    name: 'Chugureti — Marjanishvili St',
    address: '28 Kote Marjanishvili Street, Chugureti, Tbilisi',
    phone: '+995 596 94 30 30',
  },
  {
    name: 'Didi Dighomi — Tsereteli Avenue',
    address: '128 Tsereteli Avenue, Didi Dighomi, Tbilisi',
    phone: '+995 592 51 57 57',
  },
];

const cakes = [
  // Kids' Birthday Cakes
  {
    name: 'Safari Jungle Birthday',
    description:
      'A playful safari-themed cake with fondant lion, elephant, and giraffe — personalised with your child\'s name and age.',
    price: 120,
    categorySlug: 'kids-birthday',
    imageUrl: img('safari-birthday-cake'),
    featured: true,
    available: true,
  },
  {
    name: 'Paw Patrol Birthday',
    description:
      'Colourful Paw Patrol cake with character toppers, paw-print lollipops, and a custom age number.',
    price: 110,
    categorySlug: 'kids-birthday',
    imageUrl: img('paw-patrol-birthday'),
    featured: true,
    available: true,
  },
  {
    name: 'Carousel Birthday',
    description:
      'A carnival carousel cake with spinning animal figures, rainbow stripes, and a personalised age plaque.',
    price: 130,
    categorySlug: 'kids-birthday',
    imageUrl: img('carousel-birthday'),
    featured: true,
    available: true,
  },
  {
    name: 'Unicorn Garden Birthday',
    description:
      'Whimsical unicorn cake with pastel butterflies, bees, and hand-painted flowers — perfect for little dreamers.',
    price: 115,
    categorySlug: 'kids-birthday',
    imageUrl: img('unicorn-birthday'),
    featured: false,
    available: true,
  },
  {
    name: 'Candy Land Birthday',
    description:
      'A dreamy candy-land cake with swirl lollipops, pastel pearls, and a personalised name plaque.',
    price: 125,
    categorySlug: 'kids-birthday',
    imageUrl: img('candy-land-birthday'),
    featured: false,
    available: true,
  },
  // Baby & Newborn Cakes
  {
    name: 'Teddy Bear Newborn',
    description:
      'A sweet birth-announcement cake with teddy bear topper, cloud details, and custom birth date, time, and weight.',
    price: 95,
    categorySlug: 'baby-cakes',
    imageUrl: img('teddy-bear-newborn'),
    featured: true,
    available: true,
  },
  {
    name: 'Moon & Stars Baby',
    description:
      'Soft blue baby cake with a sleeping bear on a crescent moon, gold stars, and personalised BABY blocks.',
    price: 90,
    categorySlug: 'baby-cakes',
    imageUrl: img('moon-stars-baby'),
    featured: false,
    available: true,
  },
  {
    name: 'Bunny Birth Announcement',
    description:
      'Pink bunny-themed birth cake with clock, weight scale, and date details — a beautiful way to welcome a new arrival.',
    price: 100,
    categorySlug: 'baby-cakes',
    imageUrl: img('bunny-birth-cake'),
    featured: false,
    available: true,
  },
  // Wedding & Elegant Cakes
  {
    name: 'Floral Watercolor Tier',
    description:
      'A two-tier artistic cake with hand-painted watercolor florals, edible butterflies, and pearl accents.',
    price: 180,
    categorySlug: 'wedding-elegant',
    imageUrl: img('floral-watercolor-cake'),
    featured: true,
    available: true,
  },
  {
    name: 'Classic Cream Wedding',
    description:
      'Timeless single-tier cake with elegant piped swags, pearl details, and smooth ivory frosting.',
    price: 150,
    categorySlug: 'wedding-elegant',
    imageUrl: img('classic-cream-wedding'),
    featured: true,
    available: true,
  },
  {
    name: 'Fresh Strawberry Cake',
    description:
      'A celebration classic — fresh strawberries atop piped cream frosting with satin ribbon bows.',
    price: 85,
    categorySlug: 'wedding-elegant',
    imageUrl: img('fresh-strawberry-cake'),
    featured: false,
    available: true,
  },
  {
    name: 'White Petal Elegance',
    description:
      'Romantic all-white cake with delicate petal-textured frosting — ideal for weddings and anniversaries.',
    price: 140,
    categorySlug: 'wedding-elegant',
    imageUrl: img('white-petal-cake'),
    featured: false,
    available: true,
  },
  {
    name: 'Strawberry & Baby\'s Breath',
    description:
      'Fresh strawberries and baby\'s breath on ruffled white tiers — a stunning centrepiece for any celebration.',
    price: 95,
    categorySlug: 'wedding-elegant',
    imageUrl: img('strawberry-babys-breath'),
    featured: false,
    available: true,
  },
  // Themed Celebration Cakes
  {
    name: 'Little Prince Cake',
    description:
      'A cosmic Little Prince themed cake with a fondant planet, flowing scarf, and golden star toppers.',
    price: 115,
    categorySlug: 'themed-celebration',
    imageUrl: img('little-prince-cake'),
    featured: true,
    available: true,
  },
  {
    name: 'Princess Crown Cake',
    description:
      'A fairytale pink cake with a golden crown topper, pearl arch, and delicate butterfly accents.',
    price: 120,
    categorySlug: 'themed-celebration',
    imageUrl: img('princess-crown-cake'),
    featured: false,
    available: true,
  },
  {
    name: 'Butterfly Garden',
    description:
      'A vibrant butterfly cake with piped ruffle wings, colourful teardrop borders, and garden florals.',
    price: 105,
    categorySlug: 'themed-celebration',
    imageUrl: img('butterfly-garden-cake'),
    featured: false,
    available: true,
  },
  {
    name: 'Black & Gold Crown',
    description:
      'A bold black-and-white birthday cake with a jewelled gold crown — sophisticated and striking.',
    price: 110,
    categorySlug: 'themed-celebration',
    imageUrl: img('black-gold-crown'),
    featured: false,
    available: true,
  },
];

async function main() {
  console.log('Seeding database...');

  // Replace catalogue so image paths and categories stay in sync with public assets.
  await prisma.shopOrderItem.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.cake.deleteMany();
  await prisma.category.deleteMany();

  const categoryMap = new Map<string, string>();

  for (const cat of defaultCategories) {
    const category = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: { name: cat.name },
      create: cat,
    });
    categoryMap.set(cat.slug, category.id);
  }

  for (const cake of cakes) {
    const categoryId = categoryMap.get(cake.categorySlug);
    if (!categoryId) throw new Error(`Missing category: ${cake.categorySlug}`);

    const { categorySlug: _, ...data } = cake;
    await prisma.cake.upsert({
      where: { name: cake.name },
      update: { ...data, categoryId },
      create: { ...data, categoryId },
    });
  }

  for (const branch of branches) {
    const existing = await prisma.branch.findFirst({ where: { name: branch.name } });
    if (existing) {
      await prisma.branch.update({ where: { id: existing.id }, data: branch });
    } else {
      await prisma.branch.create({
        data: { ...branch, pickupAvailable: true, active: true },
      });
    }
  }

  await prisma.siteConfig.upsert({
    where: { id: 'singleton' },
    update: { siteName: 'Evro Konditeri' },
    create: { id: 'singleton', siteMode: 'both', siteName: 'Evro Konditeri' },
  });

  console.log(
    `Seeded ${defaultCategories.length} categories, ${cakes.length} products, and ${branches.length} branches.`
  );
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
