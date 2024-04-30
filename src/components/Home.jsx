import React from 'react'
import ItemsCarousel from './ItemsCarousel'
import MainCarousel from './MainCarousel'

const Home = () => {
    return (
        <div>
            <MainCarousel />
            <div className='space-y-10 mx-5 flex flex-col'>
                <ItemsCarousel title="Kurtas" />
                <ItemsCarousel title="Men's Shirt" />
                <ItemsCarousel title="Women's Kurta" />
                <ItemsCarousel title="Women's Jeans" />
            </div></div>
    )
}

export default Home