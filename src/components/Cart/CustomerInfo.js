import { useState, useContext } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
/* context */
import { CartContext } from '../../context/cartContext';
import { AuthContext } from '../../context/authContext';

export default function CustomerInfo({ setStep, setLoading, setOrderNumber }) {
    const [customerInfo, setCustomerInfo] = useState({ name: '', lastname: '', email: '', emailconf: '', phone: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const [inCart, /* addToCart */, clearCart] = useContext(CartContext);
    const [currentUser] = useContext(AuthContext);

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
        <form onSubmit={(e) => handleSubmit(e, customerInfo)} className='customer-info'>
            <div>
                <label htmlFor='name'>First Name (*):</label>
                <input type='text' id='name' name='name' value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })} required></input>
            </div>
            <div>
                <label htmlFor='lastname'>Last Name (*):</label>
                <input type='text' id='lastname' name='lastname' value={customerInfo.lastname}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, lastname: e.target.value })} required></input>
            </div>
            <div>
                <label htmlFor='email'>Email (*):</label>
                <input type='email' id='email' name='email' value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })} required></input>
            </div>
            <div>
                <label htmlFor='emailconf'>Confirm Email (*):</label>
                <input type='email' id='emailconf' name='emailconf' value={customerInfo.emailconf}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, emailconf: e.target.value })} required></input>
            </div>
            <div>
                <label htmlFor='phone'>Phone (*):</label>
                <input type='text' id='phone' name='phone' value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })} required></input>
            </div>

            {errorMessage ? <span className='form-error' style={{ maxWidth: 500, display: 'block' }}>{errorMessage}</span> : null}
            <input type='submit' value='Confirm' className='checkout-btn' />
            <button onClick={() => setStep('products-overview')} className='checkout-btn cancel-btn'>Cancel</button>
        </form>
    )
}