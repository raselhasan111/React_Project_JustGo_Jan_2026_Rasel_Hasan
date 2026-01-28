import { ProductDetails } from '@/features/products'
import { useParams } from 'react-router-dom'

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
