import { type Product } from '@/api/products'
import { DataTable } from '@/components/data-table'
import { InfiniteScrollFooter } from '@/components/infinite-scroll-footer'
import { useInfiniteScroll } from '@/features/products/hooks/use-infinite-scroll'
import { useProductParams } from '@/features/products/hooks/use-product-params'
import { useProducts } from '@/features/products/hooks/use-products'
import { ProductFilters } from '@/features/products/product-filters'

export { ProductDetails } from '@/features/products/product-details'

export function ProductsList() {
  const { category, setCategory, sortBy, sortOrder, setSort } =
    useProductParams()

  const {
    products,
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    observerTarget,
  } = useInfiniteScroll({ category })

  const { columns, handleRowClick, getSortedData } = useProducts()

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
