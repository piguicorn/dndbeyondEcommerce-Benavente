import { createContext, useState } from 'react';
import { containsObject } from '../utils';

export const CartContext = createContext()

export function CartProvider({children}) {
    const [inCart, setInCart] = useState([]);

    const addToCart = (product) => {
        if (containsObject(product, inCart)) return ;
        setInCart(prevInCart => [...prevInCart, product]);
    }

    const clearCart = () => setInCart([]);

    const removeFromCart = (product) => {
        setInCart(prevInCart => prevInCart.filter(prod => prod.id !== product.id));
    }

    return (
        <CartContext.Provider value={[inCart, addToCart, clearCart, removeFromCart]}>
            {children}
        </CartContext.Provider>
    )
}