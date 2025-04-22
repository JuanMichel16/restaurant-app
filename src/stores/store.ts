import { create } from 'zustand';
import { OrderItem } from '@/types/order.type';
import { Product } from '@prisma/client';

interface StoreState {
  order: OrderItem[];
  addToOrder: (product: Product) => void;
  decrementQuantity: (product: OrderItem) => void;
  incrementQuantity: (product: OrderItem) => void;
  removeFromOrder: (product: OrderItem) => void;
  clearOrder: () => void;
}

export const useStore = create<StoreState>((set, get) => ({
  order: [],
  addToOrder: (product) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {image, categoryId, ...data} = product;
    const currentOrder: OrderItem[] = get().order;
    const existsItem = currentOrder.find(itemOrder => product.id === itemOrder.id);
    let order:OrderItem[] = []

    if(!existsItem) {
      order = [...currentOrder, {...data, quantity: 1, subtotal: data.price}]
    } else {
      order = currentOrder.map(itemOrder => product.id === itemOrder.id ? {...itemOrder, quantity: itemOrder.quantity + 1, subtotal: itemOrder.subtotal + product.price} : itemOrder);
    }

    set(() => ({ order }))
  },
  decrementQuantity: (product) => {
    const currentOrder: OrderItem[] = get().order;
    let order: OrderItem[] = []

    if(product.quantity === 1) {
      order = currentOrder.filter(item => item.id !== product.id);
    } else {
      order = currentOrder.map(itemOrder => product.id === itemOrder.id ? {...itemOrder, quantity: itemOrder.quantity - 1, subtotal: itemOrder.subtotal - product.price} : itemOrder);
    }

    set(() => ({ order }))
  },
  incrementQuantity: (product) => {
    const currentOrder: OrderItem[] = get().order;
    const order = currentOrder.map(itemOrder => product.id === itemOrder.id ? {...itemOrder, quantity: itemOrder.quantity + 1, subtotal: itemOrder.subtotal + product.price} : itemOrder);

    set(() => ({ order }))
  },
  removeFromOrder: (product) => {
    const currentOrder: OrderItem[] = get().order;
    const newOrder = currentOrder.filter(item => item.id !== product.id);

    set(() => ({ order: newOrder }))
  },
  clearOrder: () => {
    set(() => ({order: []}))
  }
}))

