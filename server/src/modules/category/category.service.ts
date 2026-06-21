import { randomUUID } from 'node:crypto';
import { prisma } from '../../lib/prisma.js';
import { AppError } from '../../middleware/app-error.js';

/** Latin letters, digits, and Georgian Mkhedruli (U+10A0–U+10FF). */
const SLUG_UNSAFE = /[^a-z0-9\u10A0-\u10FF]+/g;

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(SLUG_UNSAFE, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function buildSlug(name: string, id?: string): string {
  const slug = slugify(name);
  if (slug) return slug;
  const suffix = id ?? randomUUID().slice(0, 8);
  return `cat-${suffix}`;
}

const categoryInclude = {
  select: { id: true, name: true, slug: true },
} as const;

export async function listCategories() {
  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' },
    include: { _count: { select: { cakes: true } } },
  });
  return { categories, total: categories.length };
}

export async function listPublicCategories() {
  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' },
    select: { id: true, name: true, slug: true },
  });
  return categories;
}

export async function createCategory(name: string) {
  const slug = buildSlug(name);
  const existing = await prisma.category.findFirst({
    where: { OR: [{ name }, { slug }] },
  });
  if (existing) {
    throw new AppError(409, 'A category with this name already exists');
  }
  return prisma.category.create({ data: { name, slug } });
}

export async function updateCategory(id: string, name: string) {
  const slug = buildSlug(name, id);
  const existing = await prisma.category.findFirst({
    where: {
      OR: [{ name }, { slug }],
      NOT: { id },
    },
  });
  if (existing) {
    throw new AppError(409, 'A category with this name already exists');
  }

  const category = await prisma.category.findUnique({ where: { id } });
  if (!category) {
    throw new AppError(404, 'Category not found');
  }

  return prisma.category.update({
    where: { id },
    data: { name, slug },
  });
}

export async function deleteCategory(id: string) {
  const category = await prisma.category.findUnique({
    where: { id },
    include: { _count: { select: { cakes: true } } },
  });
  if (!category) {
    throw new AppError(404, 'Category not found');
  }
  if (category._count.cakes > 0) {
    throw new AppError(400, 'Cannot delete a category that has cakes assigned');
  }
  await prisma.category.delete({ where: { id } });
}

export { categoryInclude };
