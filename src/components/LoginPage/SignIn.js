import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
/* context */
import { AuthContext } from '../../context/authContext';

export default function SignIn() {
    const [userInfo, setUserInfo] = useState({ email: '', password: '' });

    const [currentUser, /* createNewUser */ , login] = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        login(userInfo.email, userInfo.password);
    };

    //return <Navigate to='/marketplace' replace />

    return (
        currentUser ?
        <Navigate to='/marketplace' replace /> :
        <main>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}></input>
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' name='password' value={userInfo.password} onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}></input>
                </div>
                <input type='submit' value='Send'/>
            </form>
        </main>
    );
    
};