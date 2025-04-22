import { prisma } from '@/src/lib/prisma';
import { notFound } from 'next/navigation'

export const getProductsByCategory = async (slug: string) => {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug
      }
    }
  })

  return products;
}

export const productCount = async () => {
  return await prisma.product.count();
}

export const getProducts = async ({page, pageSize} : {page: number, pageSize: number}) => {
  const skip = (page - 1) * pageSize;
  const products = await prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true
    }
  });

  return products;
}

export const searchProduct = async (query: string) => {
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
}

export const getProductoById = async (id: string) => {
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
