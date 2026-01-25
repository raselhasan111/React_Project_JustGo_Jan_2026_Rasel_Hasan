import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categories from './pages/categories'
import Home from './pages/home'
import ProductDetail from './pages/product-detail'
import Products from './pages/products'
import Search from './pages/search'
import Settings from './pages/settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/categories" element={<Categories />} />
        <Route path="/products/search" element={<Search />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
