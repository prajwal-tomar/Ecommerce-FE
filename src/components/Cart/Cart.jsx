import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
    return (
        <div className='w-[80%] mx-auto my-5'>
            <div className="flex gap-10">
                <div className='flex flex-col gap-5 w-full'>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className='shadow-lg h-80 w-96 border border-black/10 p-3'>
                    <p className='text-md font-bold text-slate-700 mb-3'>PRICE DETAILS</p>
                    <hr />
                    <div className='flex flex-col justify-around mt-4 space-y-5'>
                        <div className='flex justify-between'>
                            <p className='font-bold text-sm'>Price (3 Items)</p>
                            <p className='text-sm'>INR 4599</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-bold text-sm'>Discount</p>
                            <p className='text-sm'>-INR 2388</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-bold text-sm'>Delivery Charge</p>
                            <p className='text-sm font-bold text-green-500'>Free</p>
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <p className='font-bold text-md'>Total Amount</p>
                            <p className='text-sm font-bold'>INR 1278</p>
                        </div>
                        <button
                            type="submit"
                            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            CHECKOUT
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart