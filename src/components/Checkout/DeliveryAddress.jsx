import React from 'react'
import DeliveryAddressForm from '../Forms/DeliveryAddressForm'
import DeliveryAddressCard from './DeliveryAddressCard'

const DeliveryAddress = () => {
    return (
        <div className='flex justify-evenly my-10'>
            <div className='w-[40%]'>
                <h1 className='text-base font-semibold leading-7 text-gray-900'>Choose Existing Address</h1>
                <div className='flex flex-col h-96 overflow-y-scroll'>
                    <DeliveryAddressCard />
                    <DeliveryAddressCard />
                    <button
                        type="submit"
                        className="mt-4 flex w-[80%] mx-auto items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <h1 className='text-sm'>Choose Delivery Address</h1>
                    </button>
                </div>
            </div>
            <div>
                <DeliveryAddressForm />
            </div>
        </div>
    )
}

export default DeliveryAddress