import React from 'react'

const ItemCard = ({ item }) => {
    const { image, brand, title } = item;
    return (
        <div className='cursor-pointer flex flex-col items-center p-4 w-[15rem] h-[20rem] shadow-lg border border-black/10'>
            <div className='h-[13rem] w-[10rem] flex items-center'>
                <img className='object-cover object-top w-full h-full' src={image} alt="product" />
            </div>
            <div className='flex flex-col pt-2'>
                <p className='font-bold text-lg'>{brand}</p>
                <p className='text-sm'>{title}</p>
            </div>
        </div>
    )
}

export default ItemCard