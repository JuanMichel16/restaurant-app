// "use client"
import Link from "next/link";

interface ProductsPaginationProps {
  currentPage: number,
  totalPages: number
}

const ProductsPagination = async ({currentPage, totalPages}: ProductsPaginationProps) => {
  const numberOfLinks = Array.from({length: totalPages}, (_, index) => index + 1);

  return ( 
    <nav className="flex justify-center py-10 ">

      {/* Before page */}
      <Link
        className= {`bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-300 ${currentPage === 1 && 'pointer-events-none'}`}
        href={`/admin/products?page=${currentPage > 1 ? currentPage - 1 : 1}`}
      >
        &laquo;
      </Link>

      {numberOfLinks.map((element) => (
        <Link
          key={element} 
          href={`/admin/products?page=${element}`}
          className={`p-2 ${currentPage === element ? 'bg-amber-500' : 'bg-white'} rounded mx-2 px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-300`}
        >
          {element}
        </Link>
      ))}

      {/* Next Page */}
      <Link
        className= {`bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-300 ${currentPage === 6 && 'pointer-events-none'}`}
        href={`/admin/products?page=${currentPage < totalPages ? currentPage + 1 : totalPages}`}
      >
        &raquo;
      </Link>
    </nav>
   );
}
 
export default ProductsPagination;