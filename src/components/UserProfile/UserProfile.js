import { useContext, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
/* context */
import { AuthContext } from '../../context/authContext'

function UserProfile() {
    const [currentUser, /* createNewUser */, /* login */, logout, deleteAccount, updateInfo] = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState({name: '', email: '', password: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
        updateInfo(userInfo)
        setUserInfo({...userInfo, password: ''})
    }

    useEffect(() => {
        if (currentUser) 
            setUserInfo({ name: currentUser.displayName, email: currentUser.email, password: '' })
    }, [currentUser])

    return (
        currentUser ?
            <main>
                <h1>Profile</h1>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="name">Name:</label></td>
                                <td>
                                    <input type="text" id="name" name="name" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} required/>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">Email:</label></td>
                                <td>
                                    <input type="email" id="email" name="email" value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} required/>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="password">New Password:</label></td>
                                <td>
                                    <input type="password" id="password" name="password" value={userInfo.password} onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}><input type="submit" value="Update profile"/></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <button onClick={logout}>Log out</button>
                <button onClick={deleteAccount}>Delete Account</button>
            </main> :

            <Navigate to='/marketplace' />
    )
}
export default UserProfile