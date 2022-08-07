import { useContext, useState } from 'react'
/* context */
import { AuthContext } from '../../context/authContext';
import { CartContext } from '../../context/cartContext';
/* components */
import ProductsOverview from './ProductsOverview'
import LoginNav from '../LoginNav'
import OrderTotal from './OrderTotal'
import CostumerInfo from './CostumerInfo'


export default function OrderDetails({setOrderNumber}) {
    const [step, setStep] = useState('products-overview');

    const [currentUser] = useContext(AuthContext);
    const [/* inCart */, /* addToCart */, clearCart] = useContext(CartContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setStep('products-overview');
        clearCart();

        setOrderNumber('00000001');
    }

    return (
        <div className="order-details">
            <section>
                <h2>Order Details</h2>
                {
                    step === 'products-overview' ?
                        <>
                            <ProductsOverview />
                            {currentUser ? <button onClick={() => setStep('costumer-info')}>Procceed to checkout</button> : <LoginNav />}
                        </> :
                        <form onSubmit={handleSubmit}>
                            <CostumerInfo />
                            <button onClick={() => setStep('products-overview')}>Cancel</button><input type='submit' value='Confirm'/>
                        </form>
                }
            </section>
            <OrderTotal />
        </div>
    )
}