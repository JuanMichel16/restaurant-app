import { postgresqlProductRepository } from '@/src/lib/repositories/product/postgresqlProductRepository';
import { localProductRepository } from '@/src/lib/repositories/product/localProductRepository';
import { BaseProductRepository } from './baseProductRepository';


export const getProductRepository = (): BaseProductRepository => {
  const postgresql = process.env.DATABASE_TYPE;

  if(postgresql === 'postgres') {
    return postgresqlProductRepository;
  } else {
    return localProductRepository;
  }
}