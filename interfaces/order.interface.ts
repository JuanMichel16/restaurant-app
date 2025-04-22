import { OrderItem } from "@/types/order.type"

export interface CreateOrderProps {
  name: string;
  total: number;
  products: OrderItem[];
}

