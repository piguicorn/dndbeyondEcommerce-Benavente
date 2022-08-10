import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
/* context */
import { AuthContext } from '../../context/authContext';
/* styles */
import './LoginPage.css';
/* components */
import SignIn from './SignIn';
import SignUp from './SignUp';

function LoginPage({ register }) {

  const [currentUser] = useContext(AuthContext);

  return (
    currentUser ?
      <Navigate to='/marketplace' replace /> :
      <div className='login-page'>
        <div className='side-img'></div>
        <main>
          <Link to='/marketplace'>
            <img className='logo' src='https://www.dndbeyond.com/content/skins/waterdeep/images/dnd-beyond-logo-black.svg' alt='home' />
          </Link>
          {register ? <SignUp /> : <SignIn />}
        </main>
      </div>
  )
}

export default LoginPage;