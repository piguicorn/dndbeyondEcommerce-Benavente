import { Link } from 'react-router-dom';
/* components */
import Badge from '../Badge';
import AddToCartBtn from '../AddToCartBtn';

export default function ProductListItem({ product }) {

    return (
        <>
            <img className='cover' src={product.img} alt={`${product.title} Cover Art`} />
            <div className='item-info'>
                {
                    product.featured &&
                    <Badge text='Featured'/>
                }
                <Link to={`/marketplace/${product.category}/${product.id}`}><h2>{product.title}</h2></Link>
                <p className='subheading'>{product.subtitle}</p>
                <p className='price'>${product.price}</p>
                <AddToCartBtn productId={product.id}/>
            </div>
        </>
    )
}