import { useContext, useState } from 'react'
/* context */
import { CartContext } from '../../context/cartContext'
/* components */
import TitleSection from '../TitleSection'
import OrderDetails from './OrderDetails'

function Cart() {
  const [orderNumber, setOrderNumber] = useState(null);
  const [inCart] = useContext(CartContext)

  return (
    <main>
      <TitleSection />
      {
        inCart.length > 0 ?
        <OrderDetails setOrderNumber={setOrderNumber}/> :

        orderNumber ?
        <p>Your order with number {orderNumber} was completed successfully.</p> :

        <p>Your cart is empty.</p>
      }
    </main>
  )
}
export default Cart