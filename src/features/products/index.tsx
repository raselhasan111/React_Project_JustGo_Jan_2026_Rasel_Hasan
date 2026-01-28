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
  const { category, setCategory, sortBy, sortOrder, setSort } =
    useProductParams()

  const { data, isLoading, error } = useQuery({
    queryKey: ['products', category],
    queryFn: () =>
      category ? fetchProductsByCategory(category) : fetchProducts(),
  })

  const { columns, handleRowClick, getSortedData } = useProducts()

  const products = data?.products ?? []
  const displayData = getSortedData(products, sortBy, sortOrder)

  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-4">
        <ProductFilters
          selectedCategory={category}
          onCategoryChange={setCategory}
        />
      </div>
      <DataTable<Product>
        data={displayData}
        columns={columns}
        isLoading={isLoading}
        error={error}
        onRowClick={handleRowClick}
        rowKey="id"
        onSort={(key, direction) => setSort(key, direction)}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />
    </div>
  )
}
