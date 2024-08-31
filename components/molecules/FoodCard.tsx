import { AddCartButton, CardInfo } from '@components/atoms'
import { Product } from '@interfaces/commons'
import Image from 'next/image'

const FoodCard = ({ product }: { product: Product }) => {
  const { image } = product

  let url = ''

  for (const key in image) {
    url = image[key as keyof typeof image].replace('.', '')
  }

  return (
    <article className='flex flex-col justify-center'>
      <Image
        src={url}
        priority
        height={500}
        width={500}
        className='rounded-lg h-48 w-72 sm:h-64 sm:w-64'
        alt='cake'
      />
      <div className='self-center -translate-y-6 relative '>
        <AddCartButton />
      </div>
      <CardInfo {...product} />
    </article>
  )
}

export default FoodCard
