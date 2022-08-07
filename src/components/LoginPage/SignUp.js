import { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom';
/* context */
import { AuthContext } from '../../context/authContext'

export default function SignUp() {
    const [userInfo, setUserInfo] = useState({ name: '', email: '', password: '' })

    const [currentUser, createNewUser] = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const {name, email, password} = userInfo
        if (name && email && password) createNewUser(name, email, password)
    }


    return (
        currentUser ?
        <Navigate to='/marketplace' replace /> :
        <main>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} required/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} required/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={userInfo.password} onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} required/>
                </div>
                <input type="submit" value="Send"/>
            </form>
        </main>
    )
}