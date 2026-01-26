import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { fetchProducts, type Product } from '../../api/products'
import { DataTable } from '../../components/data-table'

export { ProductDetails } from './product-details'

export function ProductsList() {
  const navigate = useNavigate()
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

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

  return (
    <DataTable<Product>
      data={data?.products ?? []}
      columns={columns}
      isLoading={isLoading}
      error={error}
      onRowClick={handleRowClick}
    />
  )
}
