import { CarbonNeutral, CustomedButton, ItemList } from '@components/atoms'

const Cart = () => (
  <section className='bg-Rose_50 flex flex-col gap-6 p-5 sticky top-10 rounded-md'>
    <h2 className='text-3xl font-bold text-red'>Your Cart (7)</h2>
    <ItemList />
    <div className='flex justify-between text-Rose_900 '>
      <span className='font-medium'>Order Total</span>
      <span className='font-bold text-xl'>$46.50</span>
    </div>
    <CarbonNeutral />
    <CustomedButton text='Confirm Order' />
  </section>
)

export default Cart
