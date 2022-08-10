/* components */
import Badge from '../Badge';
import AddToCartBtn from '../AddToCartBtn';

export default function ProductHeading({ product }) {

    return (
        <div className='product-heading'>
            <span className='heading-bg' style={{ backgroundImage: `url(${product.img})` }}></span>
            <img src={product.img} alt={`${product.title} Cover Art`} />
            <div className='product-details'>
                <Badge light={true} text='Featured' />
                <h1>{product.title}</h1>
                <p className='subtitle'>{product.subtitle}</p>
                <p className='price'>${product.price}</p>
                <AddToCartBtn product={product} />
            </div>
        </div>
    )
}