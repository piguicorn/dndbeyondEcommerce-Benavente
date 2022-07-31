import { useContext } from 'react'
import { Link } from 'react-router-dom'
/* context */
import { CartContext } from '../../context/cartContext'

function CartWidget() {
    const [inCart] = useContext(CartContext)

    return (
        <Link to='/marketplace/cart'>Cart {inCart.length > 0 ? `(${inCart.length})` : null}</Link>
    )
  }
  export default CartWidget