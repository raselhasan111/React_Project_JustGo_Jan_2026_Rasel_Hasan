import { fetchProductById } from '@/api/products'
import { ProductImages } from '@/features/products/components/product-images'
import { ProductInfo } from '@/features/products/components/product-info'
import { ProductReviews } from '@/features/products/components/product-reviews'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

interface ProductDetailsProps {
  id: string
}

export function ProductDetails({ id }: ProductDetailsProps) {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Error loading product
        </h2>
        <p className="text-gray-600 mb-8">
          {error instanceof Error ? error.message : 'Something went wrong'}
        </p>
        <Link to="/products" className="text-blue-600 hover:underline">
          Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Link
          to="/products"
          className="text-blue-600 hover:underline flex items-center gap-2"
        >
          ← Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <ProductImages images={product.images} title={product.title} />
        <ProductInfo product={product} />
      </div>

      <ProductReviews reviews={product.reviews} />
    </div>
  )
}
