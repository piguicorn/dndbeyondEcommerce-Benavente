import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import productList from '../../products.json'
/* components */
import TitleSection from '../TitleSection'
import MarketplaceNavigation from '../MarketplaceNavigation/MarketplaceNavigation'

function ProductListing() {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams();

  useEffect(() => {
    const listing = categoryId ? productList.filter(product => product.category === categoryId) : productList.filter(product => product.featured)
    setProducts(listing)
  }, [categoryId])

    return (
      <main>
        <TitleSection />
        <section>
          <MarketplaceNavigation/>
          <ul>
            {
              products.map(product => (
                <li key={product.id}>
                  {product.title} 
                  <Link to={`/marketplace/${product.category}/${product.id}`}>Link</Link>
                </li>
              ))
            }
          </ul>
        </section>
      </main>
    )
  }

  export default ProductListing