"use server"

import { prisma } from "@/src/lib/prisma"
import { ProductSchema } from "@/schema"

export const createProduct = async (data: unknown) => {
  const result = ProductSchema.safeParse(data);

  if(!result.success) {
    return {
      errors: result.error.issues
    }
  }
  
  try {
    await prisma.product.create({
      data: result.data
    })
  } catch (error) {
    console.log(error)
  }
}
