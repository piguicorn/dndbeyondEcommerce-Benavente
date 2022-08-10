/* styles */
import './Badge.css';

function Badge({text, light}) {
    return (
        <span className={light ? 'featured-badge featured-badge--light' : 'featured-badge'}>
            <img src='https://www.dndbeyond.com/content/1-0-2140-0/skins/marketplace/assets/featured-tag-icon.svg' alt='' />
            {text}
        </span>
    )
}

export default Badge;