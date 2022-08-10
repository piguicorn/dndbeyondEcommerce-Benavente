import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
/* styles */
import './ProductDetail.css';
/* components */
import HeadingSection from '../HeadingSection';

function ProductDetail() {
  const [product, setProduct] = useState();

  const { productId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, 'products', productId)
    getDoc(queryProduct)
      .then(res => setProduct({ id: res.id, ...res.data()}))
      .catch(err => console.log(err))
  }, [productId])

  return (
    <main className='product-detail'>
      <HeadingSection product={product} />
      {product ? <p className='product-description container'>{product.description}</p> : 'Loading...'}
    </main>
  )
}

export default ProductDetail;