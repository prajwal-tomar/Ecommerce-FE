import React from 'react'

const ProductCard = ({ kurta }) => {
    return (
        <div className='cursor-pointer flex flex-col w-52 shadow-lg border border-black/10'>
            <img className='object-cover object-top max-h-52' src={kurta.image} alt="product" />
            <div className='flex flex-col ps-2 pt-2'>
                <p className='font-bold text-sm text-slate-600'>{kurta.brand}</p>
                <p className='text-md'>{kurta.title}</p>
                <div className='flex items-center space-x-3 pb-1'>
                    <p className='text-sm font-semibold'>{kurta.selling_price}</p>
                    <p className='line-through text-slate-400'>{kurta.price}</p>
                    <p className='semi-bold text-green-600'>{kurta.disscount}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard