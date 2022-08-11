import { useContext } from 'react';
/* context */
import { CartContext } from '../../context/cartContext';

export default function ProductsOverview() {
    const [ inCart, /* addToCart */, clearCart, removeFromCart] = useContext(CartContext);

    return (

        <>
            <button onClick={clearCart} className='remove-btn remove-btn--all'>Remove all</button>
            <div className='scroll-overflow'>
                <table className='products-overview'>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>TYPE</th>
                            <th>PRICE</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            inCart.map(product => {

                                return (
                                    <tr key={product.id}>
                                        <td>{product.title}</td>
                                        <td>{product.category}</td>
                                        <td>${product.price}</td>
                                        <td><button onClick={() => removeFromCart(product)} className='remove-btn'>Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <p className='total-price'>Total: ${inCart.reduce((total, product) => product.price + total, 0)}</p>
        </>
    )
}