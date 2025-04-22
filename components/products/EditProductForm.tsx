"use client"
import { ProductSchema } from "@/schema";
import {toast} from 'react-toastify';
import { useParams } from "next/navigation";
import { editProduct } from "@/actions/edit-product-action";
import { useRouter } from "next/navigation";

const EditProductForm = ({children} : {children: React.ReactNode}) => {
  const router = useRouter();
  const params = useParams();
  const id = params.id!

  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get('name'),
      price: formData.get('price'),
      categoryId : formData.get('categoryId'),
      image : formData.get('image')
    };

    const result = ProductSchema.safeParse(data);

    if(!result.success) {
      result.error.issues.forEach(issue => {
        toast.error(issue.message)
      });
      return
    }

    const response = await editProduct(result.data, +id);

    if(response?.errors) {
      response.errors.forEach(issue => {
        toast.error(issue.message)
      })
    return
    }

    toast.success("Producto actualizado correctamente");
    router.push('/admin/products/')
  }

  return ( 
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form
        className="space-y-5"
        action={handleSubmit}
      >
        {children}
        <input 
          type="submit" 
          value={'Guardar cambios'} 
          className="p-3 uppercase cursor-pointer bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5" 
        />
      </form>
    </div>
   );
}
 
export default EditProductForm;
