'use client'

import { useCartList } from '@context/CartListContext'
import { formatCurrency, transformUrl } from '@utils'
import Image from 'next/image'

const ItemListoConfirm = () => {
  const { cartList } = useCartList()

  return (
    <ul className='flex flex-col'>
      {cartList.map((item, index) => {
        const price = formatCurrency(item.price)
        return (
          <li key={index}>
            <div className='flex p-2 gap-5 bg-Rose_100 rounded-md'>
              <Image
                src={transformUrl(item.image)}
                height={20}
                width={50}
                alt='remove'
              />
              <div>
                <span className='text-Rose_900 font-semibold '>
                  {item.name}
                </span>
                <div className='flex gap-6'>
                  <span className=' font-semibold text-red'>{item.cant}x</span>
                  <div className=' text-Rose_400'>
                    <span>@{price}</span>
                  </div>
                </div>
              </div>
              <span className='text-Rose_900 font-semibold'>{price}</span>
            </div>
            <hr className='border-1 border-Rose_50' />
          </li>
        )
      })}
      <li>
        <div className='flex justify-between items-center p-5 bg-Rose_100'>
          <span className='text-Rose_900 font-semibold'>Order Total</span>
          <span className='text-Rose_900 text-3xl font-bold'>
            {formatCurrency(
              cartList.reduce((acc, item) => acc + item.price, 0),
            )}
          </span>
        </div>
      </li>
    </ul>
  )
}

export default ItemListoConfirm
