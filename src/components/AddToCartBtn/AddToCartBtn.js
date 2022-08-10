import { useContext } from 'react';
import { Link } from 'react-router-dom';
/* context */
import { CartContext } from '../../context/cartContext';
/* styles */
import './AddToCartBtn.css';

function AddToCartBtn({productId}) {
    const [inCart, addToCart] = useContext(CartContext);

    return (
        <>{
            inCart.includes(productId) ?
            <Link to='/marketplace/cart' className='in-cart'>In Cart</Link> :
            <button className='add-to-cart' onClick={() => addToCart(productId)}>Add to cart</button>
        }</>
    )
}

export default AddToCartBtn;