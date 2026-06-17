import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const img = (slug: string) => `/images/cakes/${slug}.jpg`;

const defaultCategories = [
  { name: 'Pastries', slug: 'pastries' },
  { name: 'Savory', slug: 'savory' },
  { name: 'Cakes', slug: 'cakes' },
  { name: 'Sweets', slug: 'sweets' },
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
  {
    name: 'Imeruli Khachapuri',
    description:
      'Classic round khachapuri with melted sulguni cheese — our daily bestseller. Baked fresh every morning.',
    price: 9.5,
    categorySlug: 'pastries',
    imageUrl: img('imeruli-khachapuri'),
    featured: true,
    available: true,
  },
  {
    name: 'Megruli Khachapuri',
    description:
      'Round khachapuri topped with extra melted cheese on top. Rich, golden, and generously filled.',
    price: 12,
    categorySlug: 'pastries',
    imageUrl: img('megruli-khachapuri'),
    featured: true,
    available: true,
  },
  {
    name: 'Lobiani',
    description: 'Traditional Georgian bean-filled bread — hearty, savoury, and perfect for a quick lunch.',
    price: 7.5,
    categorySlug: 'pastries',
    imageUrl: img('lobiani'),
    featured: false,
    available: true,
  },
  {
    name: 'Chebureki',
    description:
      'Crispy fried pastry packed with seasoned minced meat. Famous for generous filling — a local favourite.',
    price: 5,
    categorySlug: 'savory',
    imageUrl: img('chebureki'),
    featured: true,
    available: true,
  },
  {
    name: 'Honey Cake (Medovik)',
    description: 'Layered honey sponge cake with cream — soft, sweet, and sold by the slice or whole.',
    price: 8.5,
    categorySlug: 'cakes',
    imageUrl: img('honey-cake'),
    featured: true,
    available: true,
  },
  {
    name: 'Napoleon Slice',
    description: 'Flaky puff pastry layers with vanilla cream. A European classic, baked in-house daily.',
    price: 7,
    categorySlug: 'cakes',
    imageUrl: img('napoleon-slice'),
    featured: false,
    available: true,
  },
  {
    name: 'Chocolate Eclair',
    description: 'Choux pastry filled with cream and topped with chocolate glaze.',
    price: 4.5,
    categorySlug: 'sweets',
    imageUrl: img('chocolate-eclair'),
    featured: false,
    available: true,
  },
  {
    name: 'Cream Horn',
    description: 'Crispy puff pastry horn filled with sweet whipped cream.',
    price: 3.5,
    categorySlug: 'sweets',
    imageUrl: img('cream-horn'),
    featured: false,
    available: true,
  },
  {
    name: 'Custom Birthday Cake',
    description:
      'Order a personalised celebration cake for birthdays and events. Choose size, flavour, and decoration.',
    price: 85,
    categorySlug: 'cakes',
    imageUrl: img('birthday-cake'),
    featured: false,
    available: true,
  },
];

async function main() {
  console.log('Seeding database...');

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
