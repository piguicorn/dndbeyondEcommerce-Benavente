import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
/* styles */
import './ProductListing.css'
/* components */
import HeadingSection from '../HeadingSection';
import MarketplaceNavigation from '../MarketplaceNavigation/MarketplaceNavigation';
import ProductListItem from './ProductListItem';
import Loader from '../../media/Loader';

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const queryCollection = collection(db, 'products');
    const filteredQueryCollection = categoryId ?
      query(queryCollection, where('category', '==', categoryId)) :
      query(queryCollection, where('featured', '==', true));

    getDocs(filteredQueryCollection)
      .then(res => {
        if (res.docs.length === 0) { setNotFound(true) }

        setProducts(res.docs.map(prod => (
          { id: prod.id, ...prod.data() }
        )))

      }).catch(err => console.log(err))
      .finally(setLoading(false))
  }, [categoryId])

  return (
    <main className='product-listing'>
      <HeadingSection />
      <section className='container'>
        {
          /* if category doesn't exist, redirect to PageNotFound */
          notFound ? <Navigate to='/not-found' replace /> :

            /* is it still loading? */
            loading ? <Loader /> :

              <>
                <MarketplaceNavigation />
                <ul className='list'>
                  {
                    products.map(product => (
                      <li key={product.id} className='list-item'>
                        <ProductListItem product={product} />
                      </li>
                    ))
                  }
                </ul>
              </>
        }
      </section>
    </main>
  )
}

export default ProductListing;