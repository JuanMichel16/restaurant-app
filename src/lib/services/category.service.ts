import { getCategoryRepository } from '@/src/lib/repositories/category/getCategoryRepository';

const currentRepository = getCategoryRepository();

export const getCategories = async () => {
  return await currentRepository.getCategories();
}