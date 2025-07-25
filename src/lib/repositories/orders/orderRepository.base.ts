import { CreateOrderProps } from "@/interfaces/order.interface"
import { OrderWithProducts } from "@/types/order.type"

export interface BaseOrderRepository {
  orders?: OrderWithProducts[],
  addOrder?(order: CreateOrderProps) : Promise<void>
  getPendingOrders() : Promise<OrderWithProducts[]>
  completeOrder(orderId: number) : Promise<void>
}
