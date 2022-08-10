import { useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
/* styles */
import './UserProfile.css';
/* context */
import { AuthContext } from '../../context/authContext';

function UserProfile() {
    const [userInfo, setUserInfo] = useState({ name: '', email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const [currentUser, /* createNewUser */, /* login */, logout, deleteAccount, updateInfo] = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateInfo(userInfo, setErrorMessage);
        setUserInfo({ ...userInfo, password: '' });
    }

    useEffect(() => {
        if (currentUser) {
            setUserInfo({ name: currentUser.displayName, email: currentUser.email, password: '' });
        }
    }, [currentUser]);

    return (
        currentUser ?
            <main className='container user-profile'>
                <button onClick={logout} className='logout-btn'>
                    <img src='https://cdn-icons-png.flaticon.com/512/660/660252.png' alt='' />
                    Log out
                </button>
                <h1>My profile</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} required />
                    </div>
                    <div>
                        <label htmlFor="password">New Password:</label>
                        <input type="password" id="password" name="password" value={userInfo.password} onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} />
                    </div>
                    {errorMessage ? <span className='form-error'>{errorMessage}</span> : null}
                    <input type="submit" value="Update profile" />
                </form>
                <button onClick={deleteAccount} className='delete-account-btn'>Delete Account</button>
            </main> :

            <Navigate to='/marketplace' /> /* redirects to marketplace when user didn't login */
    )
}

export default UserProfile;