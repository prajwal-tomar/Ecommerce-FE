import DeliveryAddressCard from './DeliveryAddressCard'
import Cart from '../Cart/Cart'

const OrderSummary = () => {
  return (
    <div className='flex flex-col'>
      <DeliveryAddressCard />
      <Cart />
    </div>
  )
}

export default OrderSummary