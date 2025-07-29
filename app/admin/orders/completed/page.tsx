import { getCompletedOrders } from "@/src/lib/services/orderService";
import { OrderWithProducts } from "@/types/order.type";
import OrderCard from "@/components/order/OrderCard";

const CompletedOrdersPage = async () => {
  const completedOrders = await getCompletedOrders();
  return ( 
    <>
      {completedOrders?.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
          {completedOrders.map( (order: OrderWithProducts) => (
            <OrderCard key={ order.id } order={ order } />
          ))}
        </div>
      ) : <p>No hay ordenes completadas</p>}
    </>
   );
}
 
export default CompletedOrdersPage;