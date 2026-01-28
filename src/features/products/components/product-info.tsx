import { type Product } from '@/api/products'
import { useCurrency } from '@/hooks/use-currency'

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { symbol } = useCurrency()

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-semibold text-blue-600">
          {symbol}
          {product.price ? product.price.toFixed(2) : '0.00'}
        </span>
        {product.discountPercentage && (
          <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
            {product.discountPercentage}% OFF
          </span>
        )}
      </div>
      <div className="flex items-center gap-1">
        <span className="text-yellow-400 text-lg">★</span>
        <span className="font-medium">
          {product.rating ? product.rating.toFixed(2) : '0.00'}
        </span>
        <span className="text-gray-500 text-sm">
          ({product.stock} in stock)
        </span>
      </div>
      <p className="text-gray-700 leading-relaxed">{product.description}</p>

      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        <div>
          <span className="font-bold text-gray-500 uppercase">Brand</span>
          <p className="font-medium capitalize">{product.brand}</p>
        </div>
        <div>
          <span className="font-bold text-gray-500 uppercase">Category</span>
          <p className="font-medium capitalize">{product.category}</p>
        </div>
        <div>
          <span className="font-bold text-gray-500 uppercase">SKU</span>
          <p className="font-medium">{product.sku}</p>
        </div>
        <div>
          <span className="font-bold text-gray-500 uppercase">Warranty</span>
          <p className="font-medium">{product.warrantyInformation}</p>
        </div>
      </div>
    </div>
  )
}
