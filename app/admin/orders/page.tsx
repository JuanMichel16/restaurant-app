import { redirect, RedirectType } from 'next/navigation'

const OrderPage = () => {
  redirect('/admin/orders/pending', RedirectType.replace)
}
 
export default OrderPage;