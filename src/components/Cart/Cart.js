import { useContext, useState } from 'react';
/* context */
import { CartContext } from '../../context/cartContext';
/* styles */
import './Cart.css';
/* components */
import OrderDetails from './OrderDetails';

function Cart() {
  const [orderNumber, setOrderNumber] = useState(null);
  const [inCart] = useContext(CartContext);

  return (
    <main className='container my-cart'>
      <h1>My Cart</h1>
      {
        /* checkout process */
        inCart.length > 0 ?
        <OrderDetails setOrderNumber={setOrderNumber}/> :

        /* order completed */
        orderNumber ?
        <p>Your order with number 
          <span style={{fontWeight: 'bold', textDecoration: 'underline', margin: '0 8px'}}>{orderNumber}</span> 
          was completed successfully.</p> :

        /* no products in cart */
        <p>Your cart is empty.</p>
      }
    </main>
  )
}
export default Cart;