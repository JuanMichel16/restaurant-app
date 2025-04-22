import { prisma } from '@/src/lib/prisma';

export const getCategories = async () => {
  return await prisma.category.findMany()
}