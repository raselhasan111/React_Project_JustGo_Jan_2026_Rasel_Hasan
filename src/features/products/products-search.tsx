import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { fetchProducts, type Product } from '../../api/products'
import { DataTable } from '../../components/data-table'
import { SearchInput } from '../../components/search-input'
import { useProducts } from './hooks/use-products'

export function ProductsSearch() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const { data, isLoading, error } = useQuery({
    queryKey: ['products-search', query],
    queryFn: () => fetchProducts(query),
    enabled: true, // Fetch even if query is empty (returns all products usually)
  })

  const { columns, handleRowClick } = useProducts()

  const handleSearchChange = (newQuery: string) => {
    if (newQuery) {
      setSearchParams({ q: newQuery })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Search Products</h1>
        <SearchInput
          value={query}
          onChange={handleSearchChange}
          placeholder="Search products by name..."
          className="max-w-md"
        />
      </div>

      <DataTable<Product>
        data={data?.products ?? []}
        columns={columns}
        isLoading={isLoading}
        error={error}
        onRowClick={handleRowClick}
      />
    </div>
  )
}
