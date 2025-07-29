import { getOrderRepository } from '@/src/lib/repositories/orders/getOrderRepository';


const currentRepository = getOrderRepository();

export const getPendingOrders = async () => {
  return await currentRepository.getPendingOrders();
}

export const completeOrder = async (orderId: number) => {
  return await currentRepository.completeOrder(orderId);
}

export const getCompletedOrders = async () => {
  return await currentRepository.getCompletedOrders()
}
