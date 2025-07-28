"use client"

import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
import Skeleton from "@/components/order/Skeleton";
import { OrderWithProducts } from "@/types/order.type";
import useSWR  from 'swr';

const OrdersPage = () => {
  const ORDERSURL = '/admin/orders/api';
  const fetcher = (url: string) => fetch(url).then(res => res.json()).then(data => data);
  const {data: orders, error, isLoading} = useSWR<OrderWithProducts[]>(ORDERSURL, fetcher, {
    refreshInterval: 5000,
    revalidateOnFocus: false
  });
  
  if (error) return <div>failed to load</div>
  
  if (isLoading) {
    return <Skeleton />
  }

  if(orders) return ( 
    <>
      <Heading>
        Administrar Ordenes
      </Heading>

      {!isLoading && orders?.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
          {orders.map( (order: OrderWithProducts) => (
            <OrderCard key={ order.id } order={ order } />
          ))}
        </div>
      ) : <p>No hay ordenes pendientes</p>}
    </>
  );
}
 
export default OrdersPage;
