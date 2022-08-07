import { Link } from 'react-router-dom'
/* components */
import SignIn from "./SignIn"
import SignUp from "./SignUp"

function LoginPage({ register }) {

  return <>
    <Link to='/marketplace'>Home</Link>
    {register ? <SignUp /> : <SignIn />}
  </>
}

export default LoginPage