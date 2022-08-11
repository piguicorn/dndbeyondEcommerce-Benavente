import { useContext, useState } from 'react';
/* context */
import { AuthContext } from '../../context/authContext';
/* components */
import ProductsOverview from './ProductsOverview'
import LoginNav from '../LoginNav'
import CustomerInfo from './CustomerInfo';
import Loader from '../../media/Loader';



export default function OrderDetails({ setOrderNumber }) {
    const [step, setStep] = useState('products-overview');
    const [loading, setLoading] = useState(false);

    const [currentUser] = useContext(AuthContext);

    return (
        <div className="order-details">
            <h2>{step === 'customer-info' ? 'Customer Info' : 'Order Details'}</h2>
            {
                /* is it still loading? */
                loading ? <Loader /> :

                    /* which is the current step in the checkout process? */
                    step === 'products-overview' ?

                        <>
                            <ProductsOverview />
                            {currentUser ?
                                <button onClick={() => setStep('customer-info')} className='checkout-btn'>Procceed to checkout</button> :
                                <LoginNav ctaText={{ signin: 'SIGN IN', signup: 'CREATE ACCOUNT' }} />}
                        </> :

                        <CustomerInfo setStep={setStep} setLoading={setLoading} setOrderNumber={setOrderNumber}/>
            }
        </div>
    )
}