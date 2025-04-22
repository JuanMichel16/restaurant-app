import EditProductForm from "@/components/products/EditProductForm";
import ProductForm from "@/components/products/ProductForm";
import GoBackButton from "@/components/ui/GoBackButton";
import Heading from "@/components/ui/Heading";
import { getProductoById } from "@/src/lib/products";

const EditProductPage = async ({params} : {params: {id: string}}) => {
  const productId = await params;
  const product = await getProductoById(productId.id);

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
