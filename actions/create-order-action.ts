"use server"

import { orderSchema } from "@/schema";
import { prisma } from "@/src/lib/prisma";
import { CreateOrderProps } from "@/interfaces/order.interface";

export async function createOrder({name, total, products}: CreateOrderProps) {
  const result = orderSchema.safeParse({name, total, products});

  if(!result.success) {
    return {errors: result.error.issues}
  }

  try {
    await prisma.order.create({
      data: {
        name: result.data.name,
        total: result.data.total,
        orderProducts: {
          create: result.data.products.map(product => ({
            productId: product.id,
            quantity: product.quantity
          }))
        }
      }
    });


    return { success: true, message: null}
  } catch (error) {
      if(error instanceof Error) {
        return { success: false, message: "Ocurrio al agregar el producto"}
      }
    }
}
