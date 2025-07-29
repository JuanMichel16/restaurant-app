import Heading from "@/components/ui/Heading";
import ProductTable from "@/components/products/ProductsTable";
import ProductsPagination from "@/components/products/ProductsPagination";
import { redirect } from "next/navigation";
import Link from "next/link";
import ProductSearchForm from "@/components/products/ProductSearchForm";
// import { postgresqlProductRepository } from '@/src/lib/repositories/product/postgresqlProductRepository';
import { getProducts, productCount } from '@/src/lib/services/productService';

const ProductsPage = async ({
  searchParams
  } : {
    searchParams: Promise<{ page: string }>
  }) => {

  const params = await searchParams;
  const page = +params.page || 1;
  const pageSize = 10;

  if(page < 1) redirect('/admin/products/');

  const productsData = await getProducts({page, pageSize});
  const totalProductsData = await productCount();

  const [products, totalProducts] = await Promise.all([productsData, totalProductsData])

  const totalPages = Math.ceil(totalProducts / 10);

  if(page > totalPages || page < 1) redirect('/admin/products/');

  return ( 
    <>
      <Heading>Administrar Productos</Heading>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
        <Link
          href={'/admin/products/new'}
          // className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
          className="hidden"
        >
          Crear Producto
        </Link>

        <ProductSearchForm />
      </div>

      <ProductTable products={products} />

        <ProductsPagination 
          currentPage={page}
          totalPages={totalPages}
        />
    </>
   );
}
 
export default ProductsPage;
