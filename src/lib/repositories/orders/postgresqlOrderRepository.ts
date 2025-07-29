import { prisma } from "@/src/lib/prisma";
import { OrderWithProducts } from "@/types/order.type";
import { BaseOrderRepository } from '@/src/lib/repositories/orders/baseOrderRepository';

export const postgresqlOrderRepository: BaseOrderRepository = {
  async getPendingOrders() : Promise<OrderWithProducts[]> {
    const orders = await prisma.order.findMany({
      where:{
        status:false
      },
      include: {
        orderProducts: {
          include: {
            product: true
          }
        }
      }
    });
    
    return orders;
  },
  
  async completeOrder(orderId: number) : Promise<void> {
    await prisma.order.update({
      where: {
        id: orderId 
      },
      data: {
        status: true,
        orderReadyAt: new Date(Date.now())
      }
    })
  },

  async getCompletedOrders() {
    const orders = await prisma.order.findMany({
      where:{
        status: true
      },
      include: {
        orderProducts: {
          include: {
            product: true
          }
        }
      }
    });
    
    return orders;
  } 
}

