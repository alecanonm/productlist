import { useCartList } from '@context/CartListContext'
import { Product } from '@interfaces/commons'
import { Dispatch, SetStateAction } from 'react'

const CustomedButton = ({
  text,
  func,
}: {
  text: string
  func?: Dispatch<SetStateAction<Product[]>>
}) => {
  const { toggleCart, setToggleCart } = useCartList()

  return (
    <button
      onClick={() => {
        setToggleCart(!toggleCart)
        func && func([])
      }}
      className='bg-red p-3 w-full text-Rose_50 rounded-full hover:bg-[#942d01]'
    >
      {text}
    </button>
  )
}

export default CustomedButton
