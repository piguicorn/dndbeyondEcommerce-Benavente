import { useContext, useState } from 'react'
/* context */
import { AuthContext } from '../../context/authContext';
import { CartContext } from '../../context/cartContext';
/* components */
import ProductsOverview from './ProductsOverview'
import LoginNav from '../LoginNav'
import CustomerInfo from './CustomerInfo';


export default function OrderDetails({ setOrderNumber }) {
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
            <h2>{step === 'customer-info' ? 'Customer Info' : 'Order Details'}</h2>
            {
                step === 'products-overview' ?

                    <>
                        <ProductsOverview />
                        {currentUser ? <button onClick={() => setStep('customer-info')} className='checkout-btn'>Procceed to checkout</button> : <LoginNav ctaText={{ signin: 'SIGN IN', signup: 'CREATE ACCOUNT' }} />}
                    </> :

                    <form onSubmit={handleSubmit} className='customer-info'>
                        <CustomerInfo />
                        <input type='submit' value='Confirm' className='checkout-btn'/><button onClick={() => setStep('products-overview')} className='checkout-btn cancel-btn'>Cancel</button>
                    </form>
            }
        </div>
    )
}