import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Order from './components/Order/Order'
import OrderDetail from './components/Order/OrderDetail'
import ProductOverview from './components/Products/ProductOverview'
import ProductPage from './components/Products/ProductPage'
import CustomerRouter from './Routers/CustomerRouter'

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/order-detail' element={<OrderDetail />} />
        <Route path='/order' element={<Order />} />
        <Route path='/product' element={<ProductOverview />} />
        <Route path='/product/1' element={<ProductPage />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App;