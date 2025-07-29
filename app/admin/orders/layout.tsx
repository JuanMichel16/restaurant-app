import Heading from "@/components/ui/Heading";
import { ReactNode } from "react";

interface OrderPageProps {
  children: ReactNode;
}

const OrdersPage = ({children}: OrderPageProps) => {

  return ( 
    <>
      <Heading>
        Administrar Ordenes
      </Heading>

      
      {children}
    </>
  );
}
 
export default OrdersPage;
