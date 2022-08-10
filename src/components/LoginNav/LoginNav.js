import { Link } from 'react-router-dom';

function LoginNav({ctaText}) {

  return (
    <nav className='login-nav'>
          <Link to='/sign-in' className='signin'>{ctaText.signin}</Link>
          <Link to='/register' className='signup'>{ctaText.signup}</Link>
    </nav>
  )
}

export default LoginNav;