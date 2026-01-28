import { useQuery } from '@tanstack/react-query'
import { fetchProducts, type Product } from '../../api/products'
import { DataTable } from '../../components/data-table'
import { SearchInput } from '../../components/search-input'
import { useProducts } from './hooks/use-products'

import { useProductParams } from './hooks/use-product-params'

export function ProductsSearch() {
  const { query, setSearch, sortBy, sortOrder, setSort } = useProductParams()

  const { data, isLoading, error } = useQuery({
    queryKey: ['products-search', query],
    queryFn: () => fetchProducts({ query }),
    enabled: true,
  })

  const { columns, handleRowClick, getSortedData } = useProducts()

  const products = data?.products ?? []
  const displayData = getSortedData(products, sortBy, sortOrder)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Search Products</h1>
        <div className="flex flex-wrap items-end justify-end gap-4">
          <SearchInput
            value={query}
            onChange={setSearch}
            placeholder="Search products by name..."
            className="w-md"
          />
        </div>
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
