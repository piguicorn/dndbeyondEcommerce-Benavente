import { useContext } from 'react'
import productList from '../../products.json'
/* context */
import { CartContext } from '../../context/cartContext'

export default function ProductsOverview() {
    const [inCart, /* addToCart */, clearCart, removeFromCart] = useContext(CartContext)

    return (
        <>
            <button onClick={clearCart}>Remove all</button>
            <table>
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
                        inCart.map(productId => {
                            const product = productList.find(product => product.id === productId)

                            return (
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>${product.price}</td>
                                    <td><button onClick={() => removeFromCart(product.id)}>Remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}