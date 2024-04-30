import { AdjustmentsVerticalIcon } from '@heroicons/react/24/solid'
import React from 'react'

const OrderCard = () => {
    return (
        <div className='shadow-lg border border-black/10'>
            <div className='flex justify-between p-3 px-5'>
                <div className='flex space-x-5'>
                    <img className='object-cover object-top max-h-28 rounded-lg' src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70" alt="kurta_woman" />
                    <div>
                        <p className='text-md'>Product Title</p>
                        <p className='text-sm text-slate-500'>Size L, White</p>
                    </div>
                </div>
                <p>INR 999</p>
                <div className='flex flex-col '>
                    <p className='font-bold'> Expected Delivery on 17th April, 2023</p>
                    <p className='text-sm text-slate-700'>Your item has been dispatched</p>
                </div>
            </div>
        </div>
    )
}

export default OrderCard