import { useLocation, Link } from 'react-router-dom'
/* components */
import MainNavigation from '../MainNavigation'
//import MainNavigationMobile from '../MainNavigationMobile'

function Header() {
    const path = useLocation().pathname
    
    return (
        <>
            {
                path !== '/register' &&
                path !== '/sign-in' &&
                <header>
                    <Link to='/marketplace'>Home</Link>
                    <MainNavigation />
                </header>
            }
        </>
    )
}
export default Header