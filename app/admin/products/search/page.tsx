import { searchProduct } from "@/src/lib/products";
import ProductTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import ProductSearchForm from "@/components/products/ProductSearchForm";
import GoBackButton from "@/components/ui/GoBackButton";

const SearchPage = async ({searchParams} : {searchParams: Promise<{search: string}>}) => {
  const params = await searchParams;
  const search = params.search;

  const products = await searchProduct(search);

  return (
    <>
      <Heading> Resultados de busqueda </Heading>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
        <GoBackButton />
        <ProductSearchForm />
      </div>

      <ProductTable 
        products={products}
      />
    </>
   );
}
 
export default SearchPage;