import Image from 'next/image'

const ItemList = () => (
  <ul className='flex flex-col gap-5'>
    <li>
      <div className='flex justify-between items-center'>
        <div>
          <span className='text-Rose_900 font-semibold '>Classic Tiramisu</span>
          <div className='flex gap-6'>
            <span className=' font-semibold text-red'>1x</span>
            <div className='flex gap-4 text-Rose_400'>
              <span>@$5.00</span>
              <span className='font-semibold text-Rose_500'>$5.00</span>
            </div>
          </div>
        </div>
        <Image
          src='/assets/images/icon-remove-item.svg'
          height={15}
          width={15}
          alt='remove'
          className='border-2 border-Rose_300 rounded-full  cursor-pointer'
        />
      </div>
      <hr className='border-1 border-Rose_100' />
    </li>
  </ul>
)

export default ItemList
