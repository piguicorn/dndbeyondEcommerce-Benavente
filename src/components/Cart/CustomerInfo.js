import { useState } from 'react';

export default function CustomerInfo() {
    const [customerInfo, setCustomerInfo] = useState({ name: '', lastname: '', email: '', emailconf: '', phone: '' });

    return (
        <>
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
        </>
    )
}