import { type Product } from '@/api/products'
import { type SortDirection } from '@/components/data-table'
import { useCurrency } from '@/hooks/use-currency'
import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

export function useProducts() {
  const navigate = useNavigate()
  const { symbol } = useCurrency()

  const handleRowClick = useCallback(
    (product: Product) => {
      navigate(`/products/${product.id}`)
    },
    [navigate]
  )

  const getSortedData = useCallback(
    (data: Product[], sortBy: string, sortOrder: SortDirection) => {
      if (!sortBy || !sortOrder) {
        return data
      }

      return [...data].sort((a, b) => {
        const aValue = a[sortBy as keyof Product]
        const bValue = b[sortBy as keyof Product]

        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortOrder === 'asc' ? aValue - bValue : bValue - aValue
        }

        return 0
      })
    },
    []
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
        sortable: true,
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
    getSortedData,
  }
}
