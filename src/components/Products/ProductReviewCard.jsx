import React from 'react'

const ProductReviewCard = () => {
    return (
        <div className='cursor-pointer flex p-2 items-center w-[80%] border border-black/10'>
            <img className='object-cover object-top max-h-12' src="https://th.bing.com/th/id/OIP.jOt-AtLvj6y2XpzzLjohXAHaHa?rs=1&pid=ImgDetMain" alt="product" />
            <div className='flex flex-col ps-2 pt-2'>
                <p className='font-bold text-sm text-slate-600'>Prajwal Tomar</p>
                <p className='text-md'>April 17th, 2024</p>
                <p>⭐⭐⭐⭐⭐</p>
                <p className='text-sm w-32'>Lorem ipsum dolor, sit amet.</p>
            </div>
        </div>
    )
}

export default ProductReviewCard