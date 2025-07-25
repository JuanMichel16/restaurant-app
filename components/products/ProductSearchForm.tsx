"use client"

import { SearchSquema } from "@/schema";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const ProductSearchForm = () => {
  const router = useRouter();

  const handleSearchForm = (formdata: FormData) => {
    const data = {
      search: formdata.get('search')
    };

    const result = SearchSquema.safeParse(data);

    if(!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message)
      })
      return
    }

    router.push(`/admin/products/search?search=${result.data.search}`)

  }

  return ( 
    <form 
      action={handleSearchForm}
      className="flex items-center"
    >
      <input 
        className="p-2 placeholder-gray-400 w-full"
        type="text"
        placeholder="Buscar productos"
        name="search"
      />

      <input 
        className="bg-indigo-600 p-2 text-white cursor-pointer"
        type="submit"
        value={'Buscar'} 
      />
    </form>
  );
}
 
export default ProductSearchForm;