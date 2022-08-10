import { useContext, useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
/* context */
import { CartContext } from '../../context/cartContext';

export default function ProductsOverview() {
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [inCart, /* addToCart */, clearCart, removeFromCart] = useContext(CartContext);

    useEffect(() => {
        setProducts([])
        setTotalPrice(0)
        const db = getFirestore();

        inCart.forEach(productId => {
            const queryProduct = doc(db, 'products', productId)
            getDoc(queryProduct)
                .then(prod => {
                    setProducts(prevProducts => [...prevProducts, { id: prod.id, ...prod.data()}]);
                    setTotalPrice(prevTotalPrice => prevTotalPrice + parseFloat(prod.data().price));
                })
                .catch(err => console.log(err))
        })

    }, [inCart])

    return (
        products.length > 0 ?
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
                                products.map(product => {

                                    return (
                                        <tr key={product.id}>
                                            <td>{product.title}</td>
                                            <td>{product.category}</td>
                                            <td>${product.price}</td>
                                            <td><button onClick={() => removeFromCart(product.id)} className='remove-btn'>Remove</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <p className='total-price'>Total: ${totalPrice}</p>
            </> : <p>loading...</p>
    )
}