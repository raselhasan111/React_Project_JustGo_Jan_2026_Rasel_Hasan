export interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  }
  thumbnail: string
  images: string[]
}

export interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function fetchProducts(
  limit: number,
  skip: number,
  query?: string
): Promise<ProductsResponse> {
  const params = new URLSearchParams()
  params.append('limit', limit.toString())
  params.append('skip', skip.toString())

  const url = query
    ? `${API_BASE_URL}/products/search?q=${query}&${params.toString()}`
    : `${API_BASE_URL}/products?${params.toString()}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  return response.json()
}

export async function fetchProductsByCategory(
  category: string,
  limit: number,
  skip: number
): Promise<ProductsResponse> {
  const params = new URLSearchParams()
  params.append('limit', limit.toString())
  params.append('skip', skip.toString())

  const url = `${API_BASE_URL}/products/category/${category}?${params.toString()}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch products by category')
  }
  return response.json()
}

export async function fetchCategories(): Promise<string[]> {
  const response = await fetch(`${API_BASE_URL}/products/category-list`)
  if (!response.ok) {
    throw new Error('Failed to fetch categories')
  }
  return response.json()
}

export async function fetchProductById(id: string): Promise<Product> {
  const response = await fetch(`${API_BASE_URL}/products/${id}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch product with ID: ${id}`)
  }
  return response.json()
}
