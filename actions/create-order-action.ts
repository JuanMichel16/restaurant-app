"use server"

import { orderSchema } from "@/schema";
import { prisma } from "@/src/lib/prisma";
import { CreateOrderProps } from "@/interfaces/order.interface";

export async function createOrder({name, total, products}: CreateOrderProps) {
  const result = orderSchema.safeParse({name, total, products});
  console.log(result);

  if(!result.success) {
    return {errors: result.error.issues}
  }

  try {
    console.log("Entraaa")
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
  } catch (error) {
    console.log("Truena")
    console.log(error)
  }
}
