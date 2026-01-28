import { TopNav } from '@/components/layouts/top-nav'
import { CurrencyProvider } from '@/components/providers/currency-provider'
import Categories from '@/pages/categories'
import HomePage from '@/pages/home-page'
import ProductDetailsPage from '@/pages/product-details-page'
import ProductsPage from '@/pages/products-page'
import ProductsSearchPage from '@/pages/products-search-page'
import SettingsPage from '@/pages/settings-page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <CurrencyProvider>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/products/categories" element={<Categories />} />
          <Route path="/products/search" element={<ProductsSearchPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </CurrencyProvider>
  )
}

export default App
