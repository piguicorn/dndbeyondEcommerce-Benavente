import { NavLink } from "react-router-dom";
/* styles */
import './MarketplaceNavigation.css';

function MarketplaceNavigation() {
    return (
        <nav className='marketplace-navigation'>
            <ul>
                <li><NavLink to='/marketplace' end>Featured</NavLink></li>
                <li><NavLink to='/marketplace/bundles'>Bundles</NavLink></li>
                <li><NavLink to='/marketplace/sourcebooks'>Sourcebooks</NavLink></li>
                <li><NavLink to='/marketplace/adventures'>Adventures</NavLink></li>
            </ul>
        </nav>
    )
}

export default MarketplaceNavigation;