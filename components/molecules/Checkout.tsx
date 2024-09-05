import { withBackdrop } from '@app/hooks'
import { CustomedButton, ItemListoConfirm } from '@components/atoms'
import Image from 'next/image'

const Checkout = () => {
  return (
    <div className='bg-Rose_50 w-[30rem] flex flex-col gap-3 p-6 rounded-lg shadow-lg text-center opacity-100'>
      <Image
        alt='hero'
        src='/assets/images/icon-order-confirmed.svg'
        width={50}
        height={50}
      />
      <div className='flex flex-col self-start'>
        <h2 className='text-4xl font-bold mt-4'>Order Confirmed</h2>
        <p className='text-Rose_400 px-1 self-start'>
          We hope you enjoy your food
        </p>
      </div>
      <ItemListoConfirm />
      <CustomedButton text='Start New Order' />
    </div>
  )
}

export default withBackdrop(Checkout)
