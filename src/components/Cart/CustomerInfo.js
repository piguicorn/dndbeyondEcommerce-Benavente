import { useState } from 'react';

export default function CustomerInfo({ handleSubmit, setStep, errorMessage }) {
    const [customerInfo, setCustomerInfo] = useState({ name: '', lastname: '', email: '', emailconf: '', phone: '' });

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