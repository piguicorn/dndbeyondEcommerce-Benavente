import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import productList from '../../products.json'
/* context */
import { CartContext } from '../../context/cartContext'
/* components */
import TitleSection from '../TitleSection'

function ProductDetail() {
  const [product, setProduct] = useState()

  const { productId } = useParams()
  const [inCart, addToCart] = useContext(CartContext)

  useEffect(() => setProduct(productList.find(product => product.id === productId)), [productId])

  return (
    <main>
      <TitleSection />
      {product &&
        <section>
          <h1>{product.title}</h1>
          <button onClick={() => addToCart(productId)}>
            {inCart.includes(productId) ? 'In Cart' : 'Add to Cart'}
          </button>
        </section>}
    </main>
  )
}
export default ProductDetail