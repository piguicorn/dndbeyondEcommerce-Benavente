import { NavLink } from "react-router-dom";

function MarketplaceNavigation() {
    return (
        <nav>
            <ul>
                <li><NavLink to='/marketplace'>Featured</NavLink></li>
                <li><NavLink to='/marketplace/bundles'>Bundles</NavLink></li>
                <li><NavLink to='/marketplace/sourcebooks'>Sourcebooks</NavLink></li>
                <li><NavLink to='/marketplace/adventures'>Adventures</NavLink></li>
            </ul>
        </nav>
    )
}
export default MarketplaceNavigation