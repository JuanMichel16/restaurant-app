import { prisma } from '@/src/lib/prisma';

export const getPendingOrders = async () => {
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
}