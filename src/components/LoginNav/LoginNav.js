import { Link } from 'react-router-dom'

function LoginNav() {

  return (
    <nav>
          <Link to='/sign-in'>Sign In</Link>
          {' '}
          <Link to='/register'>Free Sign Up</Link>
    </nav>
  )
}
export default LoginNav;