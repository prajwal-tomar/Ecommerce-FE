import React from 'react'

const DeliveryAddressCard = () => {
    return (
        <div>
            <div className='cursor-pointer flex p-2 items-center border border-black/10 mt-2'>
                <div className='flex flex-col ps-2 pt-2'>
                    <p className='font-bold text-sm text-slate-600'>Prajwal Tomar</p>
                    <p className='text-md'>House No. 766, Sector 15, Faridabad</p>
                    <p className='text-md'>Haryana, 121007</p>
                    <p className='text-sm font-bold mt-2'>Phone Number</p>
                    <p className='text-sm'>+91 9654089706</p>
                </div>
            </div>
        </div>
    )
}

export default DeliveryAddressCard