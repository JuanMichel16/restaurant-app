import EditProductForm from "@/components/products/EditProductForm";
import ProductForm from "@/components/products/ProductForm";
import GoBackButton from "@/components/ui/GoBackButton";
import Heading from "@/components/ui/Heading";
import { getProductById } from '@/src/lib/services/product.service';

const EditProductPage = async ({params} : {params: Promise<{id: string}>}) => {
  const productId = await params;
  const product = await getProductById(+productId.id);

  return (
    <>
      <Heading>Desde editar producto</Heading>

      <GoBackButton />

      <EditProductForm>
        <ProductForm product={product}/>
      </EditProductForm>
    </>
   );
}
 
export default EditProductPage;
