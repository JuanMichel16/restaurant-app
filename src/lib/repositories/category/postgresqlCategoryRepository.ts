import { prisma } from '@/src/lib/prisma';
import { BaseCategoryRepository } from './baseCategoryRepository';
import { Category } from '@prisma/client';


export const postgresqlCategoryRepository: BaseCategoryRepository  = {
  async getCategories() : Promise<Category[]> {
    return await prisma.category.findMany()
  },

  async searchCategoryById(id: number): Promise<Category> {
    const category =  await prisma.category.findUnique({
      where: {
        id
      }
    });

    return category!;
  },
}