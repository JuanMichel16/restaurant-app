import { prisma } from '@/src/lib/prisma';
import { Product, Category } from '@prisma/client';
import { notFound } from 'next/navigation'
import { BaseProductRepository } from '@/src/lib/repositories/product/productRepository.base';

type ProductWithCategory = (Product & {category: Category}); 

export const postgresqlProductRepository: BaseProductRepository = {
  
  async getProductsByCategory(slug: string) : Promise<Product[]>{
    const products = await prisma.product.findMany({
      where: {
        category: {
          slug
        }
      }
    })

    return products;
  },

  async productCount(): Promise<number> {
    const totalProducts = await prisma.product.count();
    return totalProducts;
  },

  async getProducts({page, pageSize}: {page: number, pageSize: number}): Promise<ProductWithCategory[]> {
    const skip = (page - 1) * pageSize;
    const products = await prisma.product.findMany({
      take: pageSize,
      skip,
      include: {
        category: true
      }
    });
  
    return products;
  },

  async searchProduct(query: string) : Promise<ProductWithCategory[]>{
    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive'
        },
      },
      include: {
        category: true
      },
      take: 10
    })
  
    return products;
  },

  async getProductById(id: number) : Promise<Product | null> {
    const product = prisma.product.findUnique({
      where: {
        id: +id
      }
    })
  
    if(!product) {
      notFound()
    }
  
    return product;
  }
}