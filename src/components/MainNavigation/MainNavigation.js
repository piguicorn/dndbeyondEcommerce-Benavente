import { useContext } from 'react'
import { Link } from 'react-router-dom'
/* context */
import { AuthContext } from '../../context/authContext'
/* components */
import LoginNav from '../LoginNav';

function TopBar() {
    const [currentUser] = useContext(AuthContext)

    return (
        <section>
            {currentUser ? <Link to='/profile'>Profile</Link> : <LoginNav />}
        </section>
    )
  }
  export default TopBar;