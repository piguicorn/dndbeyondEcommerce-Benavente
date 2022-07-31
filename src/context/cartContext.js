import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({children}) {
    const [inCart, setInCart] = useState([])

    const addToCart = (productId) => {
        if (inCart.includes(productId)) return ;
        setInCart(prevInCart => [...prevInCart, productId])
    }

    return (
        <CartContext.Provider value={[inCart, addToCart]}>
            {children}
        </CartContext.Provider>
    )
}