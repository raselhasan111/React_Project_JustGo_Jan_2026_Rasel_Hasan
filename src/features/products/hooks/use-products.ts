import { useNavigate } from 'react-router-dom'
import { type Product } from '../../../api/products'

export function useProducts() {
  const navigate = useNavigate()

  const handleRowClick = (product: Product) => {
    navigate(`/products/${product.id}`)
  }

  const columns = [
    {
      key: 'id',
      header: 'ID',
    },
    {
      key: 'title',
      header: 'Title',
    },
    {
      key: 'price',
      header: 'Price',
      render: (product: Product) => `$${product.price.toFixed(2)}`,
    },
    {
      key: 'discountPercentage',
      header: 'Discount %',
      render: (product: Product) => `${product.discountPercentage.toFixed(1)}%`,
    },
    {
      key: 'rating',
      header: 'Rating',
      render: (product: Product) => `${product.rating.toFixed(2)} ⭐`,
    },
    {
      key: 'stock',
      header: 'Stock',
    },
  ]

  return {
    columns,
    handleRowClick,
  }
}
