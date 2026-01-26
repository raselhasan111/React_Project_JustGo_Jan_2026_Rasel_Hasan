import { useParams } from 'react-router-dom'
import { ProductDetails } from '../features/products'

function ProductDetailsPage() {
  const { id } = useParams()

  if (!id) return null

  return (
    <div className="mx-auto p-6">
      <ProductDetails id={id} />
    </div>
  )
}

export default ProductDetailsPage
