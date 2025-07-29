import ProductCard from "@/components/products/ProductCard";
import Heading from "@/components/ui/Heading";
import { getProductsByCategory } from '@/src/lib/services/productService';

const OrderPage = async ({params}: {params: Promise<{slug: string}>}) => {
  const { slug } = await params;
  const products = await getProductsByCategory(slug);
  
  return (
    <>
      <Heading>
        Elige y personaliza tu pedido
      </Heading>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
        {products.map( product => (
          <ProductCard 
            key={product.id} 
            product={product}
          />
        ))}
      </div>
    
    </>
   );
}
 
export default OrderPage;