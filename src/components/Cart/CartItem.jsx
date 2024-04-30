import React from 'react'
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const CartItem = () => {
    return (
        <div>
            <div className='shadow-lg border border-black/10'>
                <div className='flex space-x-5 p-3'>
                    <img className='object-cover object-top max-h-32 rounded-lg' src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70" alt="kurta_woman" />
                    <div className='flex flex-col justify-between'>
                        {/* <p className='font-bold text-sm text-slate-600'>Brand Name</p> */}
                        <div>
                            <p className='text-md'>Product Title</p>
                            <p className='text-sm text-slate-500'>Size L, White</p>
                            <p className='text-sm text-slate-500'>Seller: Prajwal Tomar</p>
                        </div>
                        <div className='flex items-center space-x-3 pb-1'>
                            <p className='text-sm font-semibold'>INR 199</p>
                            <p className='line-through text-slate-400'>INR 999</p>
                            <p className='semi-bold text-green-600'>70% Off</p>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-3 items-center p-3">
                    <p className='hover:cursor-pointer'><FaPlusCircle /></p>
                    <p className='border border-black/10 w-8 text-center text-slate-600'>1</p>
                    <p className='hover:cursor-pointer'><FaMinusCircle /> </p>
                    <p className='text-blue-600'>REMOVE</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem