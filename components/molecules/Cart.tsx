'use client'

import { CarbonNeutral, CustomedButton, ItemList } from '@components/atoms'
import { useCartList } from '@context/CartListContext'
import Image from 'next/image'

const Cart = () => {
  const { cartList } = useCartList()

  const cantItems = cartList.length + 1

  return (
    <section className='bg-Rose_50 w-72 sm:w-full p-5 sticky top-10 rounded-md'>
      <h2 className='text-2xl sm:text-3xl font-bold text-red pb-5'>
        Your Cart ({cantItems})
      </h2>
      {cantItems ? (
        <div className='flex flex-col gap-6'>
          <ItemList />
          <div className='flex justify-between text-Rose_900 '>
            <span className='font-medium'>Order Total</span>
            <span className='font-bold text-xl'>$46.50</span>
          </div>
          <CarbonNeutral />
          <CustomedButton text='Confirm Order' />
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center w-80'>
          <Image
            src='/assets/images/illustration-empty-cart.svg'
            height={150}
            width={150}
            alt='empty-cart'
          />
          <p className='text-center text-Rose_500 font-semibold'>
            Your added items will appear here
          </p>
        </div>
      )}
    </section>
  )
}

export default Cart
