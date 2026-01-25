import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categories from './pages/categories'
import HomePage from './pages/home-page'
import ProductDetailsPage from './pages/product-details-page'
import ProductsPage from './pages/products-page'
import Search from './pages/search'
import Settings from './pages/settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/products/categories" element={<Categories />} />
        <Route path="/products/search" element={<Search />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
