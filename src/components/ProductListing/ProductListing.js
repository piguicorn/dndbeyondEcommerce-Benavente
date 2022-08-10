import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
/* styles */
import './ProductListing.css'
/* components */
import HeadingSection from '../HeadingSection';
import MarketplaceNavigation from '../MarketplaceNavigation/MarketplaceNavigation';
import ProductListItem from './ProductListItem';

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, 'products');
    const filteredQueryCollection = categoryId ? query(queryCollection, where('category', '==', categoryId)) : query(queryCollection, where('featured', '==', true));
    
    getDocs(filteredQueryCollection)
    .then(res => {
      setProducts(res.docs.map(prod => (
        {id: prod.id, ...prod.data()}
      )))
    }).catch(err => console.log(err))
    .finally(setLoading(false))    
  }, [categoryId])

  return (
    <main className='product-listing'>
      <HeadingSection />
      <section className='container'>
        <MarketplaceNavigation />
        {loading ? 'loading' : null}
        <ul className='list'>
          {
            products.map(product => (
              <li key={product.id} className='list-item'>
                <ProductListItem product={product}/>
              </li>
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default ProductListing;