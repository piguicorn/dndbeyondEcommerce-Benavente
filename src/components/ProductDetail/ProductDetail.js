import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
/* styles */
import './ProductDetail.css';
/* components */
import HeadingSection from '../HeadingSection';
import Loader from '../../media/Loader';

function ProductDetail() {
  const [product, setProduct] = useState();
  const [notFound, setNotFound] = useState(false);

  const { productId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, 'products', productId)

    getDoc(queryProduct)
      .then(res => {
        if (!res.data()) { setNotFound(true) }
        setProduct({ id: res.id, ...res.data() })
      })
      .catch(err => console.log(err))
  }, [productId])

  return (
    <main className='product-detail'>
      {
        /* if product doesn't exist, redirect to PageNotFound */
        notFound ? <Navigate to='/not-found' replace /> :

          /* is it still loading? */
          !product ? <Loader /> :

            <>
              <HeadingSection product={product} />
              <p className='product-description container'>{product.description}</p>
            </>
      }
    </main>
  )
}

export default ProductDetail;