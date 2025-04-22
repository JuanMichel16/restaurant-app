import { prisma } from "@/src/lib/prisma"

export const GET = async () => {
  const orders = await prisma.order.findMany({
    where: {
      orderReadyAt : {
        not: null
      },
    },
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    },
    orderBy: {
      orderReadyAt: 'desc'
    },
    take: 5
  })

  return Response.json(orders)
}
