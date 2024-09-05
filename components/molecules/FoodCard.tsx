import { AddCartButton, CardInfo } from '@components/atoms'
import { Product } from '@interfaces/commons'
import { transformUrl } from '@utils'
import Image from 'next/image'

const FoodCard = ({ product }: { product: Product }) => {
  const { image } = product

  return (
    <article className='flex flex-col justify-center'>
      <Image
        src={transformUrl(image)}
        priority
        height={500}
        width={500}
        className='rounded-lg h-48 w-72 sm:h-64 sm:w-64'
        alt='cake'
      />
      <div className='self-center -translate-y-6 relative '>
        <AddCartButton product={product} />
      </div>
      <CardInfo {...product} />
    </article>
  )
}

export default FoodCard
