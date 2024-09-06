'use client'

import { useCartList } from '@context/CartListContext'
import { formatCurrency } from '@utils'
import Image from 'next/image'

const ItemList = () => {
  const { cartList, setCartList } = useCartList()

  const removeItem = (index: number) => {
    const newCartList = cartList.filter((_, i) => i !== index)
    setCartList(newCartList)
  }

  return (
    <ul className='flex flex-col gap-5 overflow-auto max-h-52 scrollbar-thin'>
      {cartList.map((item, index) => {
        const price = formatCurrency(item.price)
        return (
          <li key={index} className='pr-5'>
            <div className='flex justify-between items-center'>
              <div>
                <span className='text-Rose_900 font-semibold '>
                  {item.name}
                </span>
                <div className='flex gap-6'>
                  <span className=' font-semibold text-red'>{item.cant}</span>
                  <div className='flex gap-4 text-Rose_400'>
                    <span>@{price}</span>
                    <span className='font-semibold text-Rose_500'>{price}</span>
                  </div>
                </div>
              </div>
              <Image
                src='/assets/images/icon-remove-item.svg'
                height={15}
                width={15}
                alt='remove'
                className='border-2 border-Rose_300 rounded-full  cursor-pointer'
                onClick={removeItem.bind(null, index)}
              />
            </div>
            <hr className='border-1 border-Rose_100' />
          </li>
        )
      })}
    </ul>
  )
}

export default ItemList
