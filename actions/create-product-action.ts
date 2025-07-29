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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {success: false, message: "Hubo un error al crear la orden."};
  }
}
