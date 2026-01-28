import { ProductsList } from '@/features/products'

export default function ProductsPage() {
  return (
    <div className="mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ProductsList />
    </div>
  )
}
