import DeliveryAddressCard from '../Checkout/DeliveryAddressCard'
import OrderTracker from './OrderTracker'

const OrderDetail = () => {
    return (
        <div className='mx-20'>
            <h1 className='mt-5 font-bold text-lg'>Delivery Address</h1>
            <DeliveryAddressCard />
            <div className='px-20 my-7 shadow-lg border border-black/10 h-36 flex items-center justify-center'>
                <OrderTracker step={3} />
            </div>
            {[1, 1, 1, 1].map((item) => (
                <div className='flex justify-between p-3 items-center shadow-lg border border-black/10 w-full rounded-lg mb-7'>
                    <div className='flex space-x-5'>
                        <img className='object-cover object-top max-h-32 rounded-lg' src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70" alt="kurta_woman" />
                        <div className='flex flex-col justify-between'>
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
                    <div>
                        <p className='text-sm text-violet-600 hover:cursor-pointer'>Rate and Review Item</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default OrderDetail