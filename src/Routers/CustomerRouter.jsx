import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Navbar'
import Navbar from '../components/Home'
import Cart from '../components/Cart/Cart'
import Footer from '../components/Footer'

const CustomerRouter = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRouter