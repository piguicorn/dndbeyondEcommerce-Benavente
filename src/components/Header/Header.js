import { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
/* context */
import { AuthContext } from '../../context/authContext';
/* styles */
import './Header.css';
/* components */
import LoginNav from '../LoginNav';

function Header() {
    const [currentUser] = useContext(AuthContext);

    const path = useLocation().pathname;

    return (
        <>
            {
                path !== '/register' &&
                path !== '/sign-in' &&
                <header>
                    <div className='container'>
                        <Link to='/marketplace'>
                            <img className='logo' src='https://www.dndbeyond.com/content/1-0-2140-0/skins/waterdeep/images/dnd-beyond-logo.svg' alt='home' />
                        </Link>
                        {currentUser ?
                            <Link to='/profile' style={{ marginRight: 10, textDecoration: 'underline' }}>Profile</Link> :
                            <LoginNav ctaText={{ signin: 'Sign In', signup: 'Free Sign Up' }} />}
                    </div>
                </header>
            }
        </>
    )
}

export default Header;