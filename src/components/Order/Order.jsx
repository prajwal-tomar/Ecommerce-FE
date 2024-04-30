import React from 'react'
import OrderCard from './OrderCard'

const Order = () => {
    return (
        <div className='w-[80%] mx-auto my-10'>
            <h1 className='font-bold text-lg m-3'>ORDER HISTORY</h1>
            <div className="flex justify-around">
                <div className='flex flex-col justify-between ps-5 py-6 w-[25%] h-64 border border-black/10 p-3 shadow-lg'>
                    <h1 className='font-bold text-lg'>Filters</h1>
                    <h1 className='mt-8 uppercase font-semibold mb-2'>Order Status</h1>
                    <div className="flex flex-col justify-center">
                        <div className='flex items-center'>
                            <input className='me-2' type="checkbox" />
                            <p>On the Way</p>
                        </div>
                        <div className='flex items-center'>
                            <input className='me-2' type="checkbox" />
                            <p>Delivered</p>
                        </div>
                        <div className='flex items-center'>
                            <input className='me-2' type="checkbox" />
                            <p>Cancelled</p>
                        </div>
                        <div className='flex items-center'>
                            <input className='me-2' type="checkbox" />
                            <p>Returned</p>
                        </div>
                    </div>
                </div>
                <div className='w-[70%] space-y-5'>
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                </div>
            </div>
        </div>
    )
}

export default Order