"use client"

import LatestOrderItem from "@/components/order/LatestOrderItem";
import Logo from "@/components/ui/Logo";
import useSWR from "swr";

const OrdersPage = () => {
  const urlOrders = '/orders/api';
  const fetcher = (url: string) => fetch(url).then(res => res.json()).then(data => data);
  const { data, error, isLoading } = useSWR(urlOrders, fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 60000
  });

  if(error) return <p>Ha ocurrido un error</p>
  if(isLoading) return <p>Cargando...</p>

  return ( 
    <>
      <h1 className="text-center mt-20 text-6xl">Ordenes listas</h1>

      <Logo />
  
      {data.length ? (
        <div
          className="grid grid-cols-1 gap-5 max-w-5xl mx-auto mt-10"
        >
          {data.map(order => (
            <LatestOrderItem key={order.id} order={order}/>
          ))}
        </div>
      ) : <p>No hay ordenes listas recientes</p>}
    </>
  );
}
 
export default OrdersPage;