import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { type Product } from '../../../api/products'
import { useCurrency } from '../../../hooks/use-currency'

export function useProducts() {
  const navigate = useNavigate()
  const { symbol } = useCurrency()

  const handleRowClick = useCallback(
    (product: Product) => {
      navigate(`/products/${product.id}`)
    },
    [navigate]
  )

  const columns = useMemo(
    () => [
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
        render: (product: Product) => `${symbol}${product.price.toFixed(2)}`,
      },
      {
        key: 'discountPercentage',
        header: 'Discount %',
        render: (product: Product) =>
          `${product.discountPercentage.toFixed(1)}%`,
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
    ],
    [symbol]
  )

  return {
    columns,
    handleRowClick,
  }
}
