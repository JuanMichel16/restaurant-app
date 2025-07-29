"use server"

import { revalidatePath } from 'next/cache'
import { prisma } from '@/src/lib/prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export async function completeOrderAction(formData: FormData) {
  const orderId = formData.get('order_id')!

  try {
    await prisma.order.update({
      where: {
        id: +orderId 
      },
      data: {
        status: true,
        orderReadyAt: new Date(Date.now())
      }
    })

    // Solucion momentanea para que cuando se ejecute esta funcion refresh la url
    revalidatePath('/admin/orders');
  } catch (error) {
    if(error instanceof PrismaClientKnownRequestError) {
      if(error.code === 'P2025') return {success: false, message: "La orden no existe"};
    }

    return {success: false, message: "Hubo un error al completar la orden."};
  }
}
