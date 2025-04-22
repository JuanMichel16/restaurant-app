import Image from "next/image";
import { Product } from "@prisma/client";
import { formatCurrency, getImagePath } from "@/src/utils";
import ProductButtonAdd from "./AddProductButton";

interface ProductCardProps {
  product: Product
}

const ProductCard = ({product}: ProductCardProps) => {
  const imagePath = getImagePath(product.image);
  
  return ( 
    <div className="border bg-white">

        <Image
          width={400}
          height={500} 
          alt={`${product.name} image`}
          src={imagePath}
        />

      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>

        <p className="mt-5 font-black text-xl">
          {formatCurrency(product.price)}
        </p>

        <ProductButtonAdd product={product} />
      </div>
    </div>
   );
}
 
export default ProductCard;