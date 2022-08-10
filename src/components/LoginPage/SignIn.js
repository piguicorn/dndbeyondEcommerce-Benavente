import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
/* context */
import { AuthContext } from '../../context/authContext';

export default function SignIn() {
    const [userInfo, setUserInfo] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const [/* currentUser */, /* createNewUser */, login] = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        login(userInfo.email, userInfo.password, setErrorMessage);
    };

    return (
        <section>
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

                {errorMessage ? <span className='form-error'>{errorMessage}</span> : null}
                <input type='submit' value='Sign in' />
            </form>
            <p>New to D&D Beyond? <Link to='/register'>Create Account</Link></p>
        </section>
    )

}