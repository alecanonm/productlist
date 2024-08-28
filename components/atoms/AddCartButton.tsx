import Image from 'next/image'

const AddCartButton = () => (
  <div className='flex items-center justify-center border-2 border-Rose_300 p-2 rounded-full bg-Rose_50 gap-2 w-40 text-Rose_900 font-semibold hover:cursor-pointer hover:border-red hover:text-red'>
    <Image
      src='/assets/images/icon-add-to-cart.svg'
      height={20}
      width={20}
      alt='cart'
      style={{ width: '20px', height: '20px' }}
    />
    Add to Cart
  </div>
)

export default AddCartButton
