'use client'

import { useCartList } from '@context/CartListContext'
import { Product } from '@interfaces/commons'
import Image from 'next/image'
import { useEffect } from 'react'

const AddCartButton = ({ product }: { product: Product }) => {
  const { cartList, setCartList } = useCartList()

  const addToCart = function addToCart() {
    setCartList((prev) => [...prev, product])
  }

  useEffect(() => {
    console.log(cartList)
  }, [cartList])

  const products = cartList.filter((items) => items.name === product.name)

  return (
    <>
      {!products.length ? (
        <div
          onClick={addToCart}
          className='flex items-center justify-center border-2 border-Rose_300 p-2 rounded-full bg-Rose_50 gap-2 w-40 text-Rose_900 font-semibold hover:cursor-pointer hover:border-red hover:text-red'
        >
          <Image
            src='/assets/images/icon-add-to-cart.svg'
            height={20}
            width={20}
            alt='cart'
            style={{ width: '20px', height: '20px' }}
          />
          Add to Cart
        </div>
      ) : (
        <div className='flex items-center justify-between border-2 border-red p-2 rounded-full bg-red gap-2 w-40 text-Rose_50 font-semibold'>
          <div className='border-2 flex justify-center items-center border-Rose_50 p-1 h-6 w-6 rounded-full cursor-pointer hover:bg-Rose_50 hover:text-red '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='10'
              height='10'
              fill='CurrentColor'
              viewBox='0 0 10 10'
            >
              <path
                fill='CurrentColor'
                d='M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z'
              />
            </svg>
          </div>
          {products.length}
          <div className='border-2 flex justify-center items-center border-Rose_50 p-1 h-6 w-6 rounded-full cursor-pointer hover:bg-Rose_50 hover:text-red '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='10'
              height='2'
              fill='none'
              viewBox='0 0 10 2'
            >
              <path fill='CurrentColor' d='M0 .375h10v1.25H0V.375Z' />
            </svg>
          </div>
        </div>
      )}
    </>
  )
}

export default AddCartButton
