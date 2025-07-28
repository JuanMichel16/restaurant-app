import { postgresqlCategoryRepository } from '@/src/lib/repositories/category/postgresqlCategoryRepository';
import { localCategoryRepository } from '@/src/lib/repositories/category/localCategoryRepository';
import { BaseCategoryRepository } from './categoryRepository.base';

export const getCategoryRepository = () : BaseCategoryRepository => {
  const postgresql = process.env.DATABASE_TYPE;

  if(postgresql === 'postgres') {
    return postgresqlCategoryRepository;
  } else {
    return localCategoryRepository;
  }
  
}
