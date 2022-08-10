import { createContext, useState } from 'react';

export const CartContext = createContext()

export function CartProvider({children}) {
    const [inCart, setInCart] = useState([]);

    const addToCart = (productId) => {
        if (inCart.includes(productId)) return ;
        setInCart(prevInCart => [...prevInCart, productId]);
    }

    const clearCart = () => setInCart([]);

    const removeFromCart = (productId) => {
        setInCart(prevInCart => prevInCart.filter(product => product !== productId));
    }

    return (
        <CartContext.Provider value={[inCart, addToCart, clearCart, removeFromCart]}>
            {children}
        </CartContext.Provider>
    )
}