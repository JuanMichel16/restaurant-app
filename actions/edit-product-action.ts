"use server"

import { ProductSchema } from "@/schema";
import {prisma} from '@/src/lib/prisma';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { revalidatePath } from "next/cache";

export const editProduct = async (data: unknown, id: number) => {
    const result = ProductSchema.safeParse(data);
  
    if(!result.success) {
      return {
        errors: result.error.issues
      }
    }

    try {
      await prisma.product.update({
        where: {
          id: id
        },
        data: result.data
      })
      
    } catch (error) {
    if(error instanceof PrismaClientKnownRequestError) {
      if(error.code === 'P2025') return {success: false, message: "La orden no existe"};
    }

    return {success: false, message: "Hubo un error al completar la orden."};
    }

    revalidatePath('/admin/products');
}
