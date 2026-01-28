import { type Product } from '@/api/products'
import { DataTable } from '@/components/data-table'
import { InfiniteScrollFooter } from '@/components/infinite-scroll-footer'
import { SearchInput } from '@/components/search-input'
import { useInfiniteScroll } from '@/features/products/hooks/use-infinite-scroll'
import { useProducts } from '@/features/products/hooks/use-products'

import { useProductParams } from '@/features/products/hooks/use-product-params'

export function ProductsSearch() {
  const { query, setSearch, sortBy, sortOrder, setSort } = useProductParams()

  const {
    products,
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    observerTarget,
  } = useInfiniteScroll({ query })

  const { columns, handleRowClick, getSortedData } = useProducts()

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

      <InfiniteScrollFooter
        ref={observerTarget}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        hasData={products.length > 0}
        isLoading={isLoading}
        loadingMessage="Loading more products..."
        endMessage="No more products to load"
      />
    </div>
  )
}
