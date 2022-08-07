import { useState } from 'react';

export default function CostumerInfo() {
    const [costumerInfo, setCostumerInfo] = useState({ name: '', lastname: '', email: '', emailconf: '', phone: '' });

    return (
        <>
            <div>
                <label htmlFor='name'>First Name:</label>
                <input type='text' id='name' name='name' value={costumerInfo.name} onChange={(e) => setCostumerInfo({ ...costumerInfo, name: e.target.value })}></input>
            </div>
            <div>
                <label htmlFor='lastname'>Last Name:</label>
                <input type='text' id='lastname' name='lastname' value={costumerInfo.lastname} onChange={(e) => setCostumerInfo({ ...costumerInfo, lastname: e.target.value })}></input>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' value={costumerInfo.email} onChange={(e) => setCostumerInfo({ ...costumerInfo, email: e.target.value })}></input>
            </div>
            <div>
                <label htmlFor='emailconf'>Confirm Email:</label>
                <input type='email' id='emailconf' name='emailconf' value={costumerInfo.emailconf} onChange={(e) => setCostumerInfo({ ...costumerInfo, emailconf: e.target.value })}></input>
            </div>
            <div>
                <label htmlFor='phone'>Phone:</label>
                <input type='text' id='phone' name='phone' value={costumerInfo.phone} onChange={(e) => setCostumerInfo({ ...costumerInfo, phone: e.target.value })}></input>
            </div>
        </>
    )
}