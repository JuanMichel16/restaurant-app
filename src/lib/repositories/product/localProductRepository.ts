import { ProductWithCategory, BaseProductRepository } from './baseProductRepository'
import { Product } from '@/types/product.type';
import { products } from "../../data/products";
import { notFound } from 'next/navigation'
import { categories } from '../../data/categories';
import { Category } from '@/types/category.type';

export const localProductRepository: BaseProductRepository = {

  async getProductsByCategory(slug: string) : Promise<Product[]>{
    const categoryFound = categories.find(category => category.slug === slug);
    const productsWithCategoryId= products.filter(product => product.categoryId === categoryFound?.id);

    return productsWithCategoryId;
  },

  async productCount(): Promise<number> {
    return products.length;
  },

  async getProducts({page, pageSize}: {page: number, pageSize: number}): Promise<ProductWithCategory[]> {
    const skip = (page - 1) * pageSize;

    const searchCategory = (categoryId: number): Category => {
      return categories.find(category => category.id === categoryId)!;
    };
  
    const paginated = products
      .slice(skip, skip + pageSize)
      .map(product => ({
        ...product,
        category: searchCategory(product.categoryId),
      }));

    return paginated;
  },

  async searchProduct(query: string) : Promise<ProductWithCategory[]>{
    const regex: RegExp = new RegExp(query, 'i');
    const productsMatched = products.filter(product => regex.test(product.name));

    const searchCategory = (categoryId: number): Category => {
      return categories.find(category => category.id === categoryId)!;
    }

    const result = productsMatched.map(product => {
      const categoryProduct = searchCategory(product.categoryId);

      return {...product, category: {...categoryProduct}}
    });

    return result;
  },

  async getProductById(id: number) : Promise<Product | null> {
    const productFound = products.find(product => product.id === id);

    if(!productFound) {
      notFound()
    }
  
    return productFound;
  }
}
