import {XCircleIcon, PlusIcon, MinusIcon} from '@heroicons/react/24/outline'
import { OrderItem } from "@/types/order.type";
import { formatCurrency } from '@/src/utils';
import { useStore } from '@/src/stores/store';

interface ProductDetailsProps {
  item: OrderItem
}

const ProductDetails = ({item}: ProductDetailsProps) => {
  const { incrementQuantity, decrementQuantity, removeFromOrder } = useStore(state => state);

  return ( 
    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
            <p className="text-xl font-bold">{item.name} </p>

            <button
              type="button"
              onClick={() => removeFromOrder(item)}
            >
              <XCircleIcon className="text-red-600 h-8 w-8"/>
            </button>
        </div>
        <p className="text-2xl text-amber-500 font-black">
            {formatCurrency(item.price)}
        </p>
        <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
            <button
              type="button"
              onClick={() => decrementQuantity(item)}
            >
                <MinusIcon className="h-6 w-6"/>
            </button>

            <p className="text-lg font-black ">
              {item.quantity}
            </p>

            <button
              type="button"
              onClick={() => incrementQuantity(item)}
            >
                <PlusIcon className="h-6 w-6"/>
            </button>
        </div>
        <p className="text-xl font-black text-gray-700">
            Subtotal: {''}
            <span className="font-normal"> 
              {formatCurrency(item.subtotal)}
            </span>
        </p>
      </div>
    </div>
  );
}
 
export default ProductDetails;