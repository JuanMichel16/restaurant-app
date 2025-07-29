import { OrderWithProducts } from "@/types/order.type";
import { BaseOrderRepository } from '@/src/lib/repositories/orders/baseOrderRepository';

export const localOrderRepository: BaseOrderRepository = {
  orders: [],

  async getPendingOrders() : Promise<OrderWithProducts[]> {
    const pendingOrders = this.orders?.filter(order => !order.status);
    return pendingOrders!;
  },
  
  async completeOrder(orderId: number) : Promise<void> {
    let orderFound = this.orders?.find(order => order.id === orderId);

    if(orderFound) {
      const newOrder = {
        ...orderFound,
        status:  true,
        orderReadyAt :  new Date()
      }

      orderFound = newOrder;
    }

    const newOrders = this.orders?.map(order => order?.id !== orderId  ? order : orderFound) as (OrderWithProducts[] | undefined);
    this.orders = newOrders;
  },

  async getCompletedOrders() {
    const pendingOrders = this.orders?.filter(order => order.status);
    return pendingOrders!;
  },

}

