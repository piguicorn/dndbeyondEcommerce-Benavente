import { useContext, useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
/* context */
import { AuthContext } from '../../context/authContext';
import { CartContext } from '../../context/cartContext';
/* components */
import ProductsOverview from './ProductsOverview'
import LoginNav from '../LoginNav'
import CustomerInfo from './CustomerInfo';
import Loader from '../../media/Loader';



export default function OrderDetails({ setOrderNumber }) {
    const [step, setStep] = useState('products-overview');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [currentUser] = useContext(AuthContext);
    const [inCart, /* addToCart */, clearCart] = useContext(CartContext);

    const handleSubmit = async (e, { name, lastname, email, emailconf, phone }) => {
        e.preventDefault();

        if (email !== emailconf) {
            setErrorMessage('Emails don\'t match');
            return ;
        }

        setLoading(true);

        // creates (if doesn't already exist)
        // a document in "orders" collection where the 
        // info about the orders completed by this user will be stored
        // and adds the info about the last order 
        const orderData = {
            state: 'generated',
            date: new Date(),
            customerData: {
                name,
                lastname,
                email,
                phone
            },
            products: inCart
        }
        const db = getFirestore();
        const ref = await addDoc(collection(db, 'orders', currentUser.email, 'orders'), orderData)

        setOrderNumber(ref.id.slice(0, 8).toUpperCase());

        setStep('products-overview'); // restarts the checkout process
        clearCart();
        setLoading(false);
    }

    return (
        <div className="order-details">
            <h2>{step === 'customer-info' ? 'Customer Info' : 'Order Details'}</h2>
            {
                /* is it still loading? */
                loading ? <Loader /> :

                    /* which is the current step in the checkout process? */
                    step === 'products-overview' ?

                        <>
                            <ProductsOverview products={inCart} />
                            {currentUser ?
                                <button onClick={() => setStep('customer-info')} className='checkout-btn'>Procceed to checkout</button> :
                                <LoginNav ctaText={{ signin: 'SIGN IN', signup: 'CREATE ACCOUNT' }} />}
                        </> :

                        <CustomerInfo handleSubmit={handleSubmit} setStep={setStep} errorMessage={errorMessage} />
            }
        </div>
    )
}