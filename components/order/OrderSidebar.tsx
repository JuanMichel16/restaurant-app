import { getCategories } from "@/src/lib/categories";
import CategoryIcon from "../ui/CategoryIcon";
import Logo from "../ui/Logo";

const OrderSideBar = async () => {
  const categories = await getCategories()

  return ( 
    <aside className="md:w-72 md:h-screen bg-white">
      <Logo />
      
      <nav className="mt-10">
        {categories.map(category => (
          <CategoryIcon 
            key={category.id}
            category={category}
          />
        ))}
      </nav>
    </aside>
   );
}
 
export default OrderSideBar;