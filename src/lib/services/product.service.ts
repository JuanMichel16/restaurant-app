import { getProductRepository } from '@/src/lib/repositories/product/getProductRepository';

const currentRepository = getProductRepository();

export const getProductsByCategory = async (slug: string) => {
  return await currentRepository.getProductsByCategory(slug);
}

export const productCount = async () => {
  return await currentRepository.productCount();
}

export const getProducts = async ({page, pageSize} : {page: number, pageSize: number}) => {
  return await currentRepository.getProducts({page, pageSize});
}

export const searchProduct = async (query: string) => {
  return await currentRepository.searchProduct(query);
}

export const getProductById = async (id: number) => {
  return currentRepository.getProductById(id);
}