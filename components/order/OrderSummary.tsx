'use client'

import { useStore } from "@/src/stores/store";
import ProductDetails from "./ProductDetails";
import { toast } from 'react-toastify'
import { useMemo } from "react";
import { createOrder } from "@/actions/create-order-action";
import { orderSchema } from "@/schema";

const OrderSummary = () => {
  const { order, clearOrder } = useStore(state => state);
  const total: number = useMemo(() => order.reduce((total, currentItem) => total + currentItem.subtotal, 0), [order]);


  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get('name') as string,
      total: total,
      products: order
    }

    const result = orderSchema.safeParse(data);

    if(!result.success) {
      result.error.issues.forEach( issue => {
        toast.error(issue.message)
      })
      return;
    }

    const response = await createOrder({name: data.name, total: data.total, products: data.products})
    
    if(response?.errors) {
      response?.errors.forEach( issue => {
        toast.error(issue.message)
      })
      return;
    }

    toast.success('Pedido realizado correctamente')
    clearOrder();
  }

  return ( 
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black">Mi pedido</h1>

      {order.length === 0 ? <p className="text-center my-10">El pedido esta vacio</p> : (
        <>
          <div className="mt-5">
            {order.map((item) => <ProductDetails key={item.id} item={item} />)}
          </div>

          <p className="text-2xl mt-20 text-center">
            Total a pagar: {''}
            <span>${total.toFixed(2)}</span> 
          </p>

          <form
            className="w-full mt-10 space-y-5"
            action={handleCreateOrder}
          >
            <input
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              className={`bg-white border border-gray-100 p-2 w-full disabled:bg-gray-200`}
              disabled={order.length === 0}
            />
            <button 
              type="submit"
              className={`py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer font-bold ${order.length === 0 ? 'opacity-30' : 'hover:bg-gray-700'}`}
              disabled={order.length === 0}
            >Confirmar Pedido</button>
          </form>
        </>
      )}
    </aside>
   );
}
 
export default OrderSummary;
