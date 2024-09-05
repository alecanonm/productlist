import { useCartList } from '@context/CartListContext'

const CustomedButton = ({ text }: { text: string }) => {
  const { toggleCart, setToggleCart } = useCartList()

  return (
    <button
      onClick={() => setToggleCart(!toggleCart)}
      className='bg-red p-3 w-full text-Rose_50 rounded-full hover:bg-[#942d01]'
    >
      {text}
    </button>
  )
}

export default CustomedButton
