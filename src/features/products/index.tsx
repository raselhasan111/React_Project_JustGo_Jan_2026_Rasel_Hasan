import { useQuery } from '@tanstack/react-query'
import { fetchProducts, type Product } from '../../api/products'
import { DataTable } from '../../components/data-table'
import { useProducts } from './hooks/use-products'

export { ProductDetails } from './product-details'

export function ProductsList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(),
  })

  const { columns, handleRowClick } = useProducts()

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
