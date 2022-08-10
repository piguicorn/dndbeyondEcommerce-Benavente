import { useContext } from 'react';
import { Link } from 'react-router-dom';
/* styles */
import './CartWidget.css';
/* context */
import { CartContext } from '../../context/cartContext';

function CartWidget() {
    const [inCart] = useContext(CartContext);

    return (
        <Link to='/marketplace/cart' className='cart-widget'>
            <img src='https://www.dndbeyond.com/content/1-0-2140-0/skins/marketplace/assets/action-items/cart.png' alt=''/>
            Cart {inCart.length > 0 ? `(${inCart.length})` : null}
        </Link>
    )
}

export default CartWidget;