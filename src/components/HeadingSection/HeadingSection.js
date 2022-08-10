/* styles */
import './HeadingSection.css';
/* components */
import CartWidget from '../CartWidget';
import ProductHeading from './ProductHeading';

function HeadingSection({product}) {
    return (
        <section className='heading-section' style={product ? null : {background: 'url(https://www.dndbeyond.com/content/1-0-2140-0/skins/marketplace/assets/header-backdrop-desktop.jpg)'}}>
            <div className='container'>
                {!product ? <h1>Marketplace</h1> : null}
                <CartWidget />
                {product ? <ProductHeading product={product}/> : null}
            </div>
        </section>
    )
}

export default HeadingSection;