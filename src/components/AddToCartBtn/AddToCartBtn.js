import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { containsObject } from '../../utils';
/* context */
import { CartContext } from '../../context/cartContext';
/* styles */
import './AddToCartBtn.css';

function AddToCartBtn({ product }) {
    const [inCart, addToCart] = useContext(CartContext);

    return (
        <>{
            containsObject(product, inCart) ?
                <Link to='/marketplace/cart' className='in-cart'>In Cart</Link> :
                <button className='add-to-cart' onClick={() => addToCart(product)}>Add to cart</button>
        }</>
    )
}

export default AddToCartBtn;