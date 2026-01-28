import { useQuery } from '@tanstack/react-query'
import {
  fetchProducts,
  fetchProductsByCategory,
  type Product,
} from '../../api/products'
import { DataTable } from '../../components/data-table'
import { useProductParams } from './hooks/use-product-params'
import { useProducts } from './hooks/use-products'
import { ProductFilters } from './product-filters'

export { ProductDetails } from './product-details'

export function ProductsList() {
  const { category, setCategory } = useProductParams()

  const { data, isLoading, error } = useQuery({
    queryKey: ['products', category],
    queryFn: () =>
      category ? fetchProductsByCategory(category) : fetchProducts(),
  })

  const { columns, handleRowClick } = useProducts()

  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-4">
        <ProductFilters
          selectedCategory={category}
          onCategoryChange={setCategory}
        />
      </div>
      <DataTable<Product>
        data={data?.products ?? []}
        columns={columns}
        isLoading={isLoading}
        error={error}
        onRowClick={handleRowClick}
        rowKey="id"
      />
    </div>
  )
}
