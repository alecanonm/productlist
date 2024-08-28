import { FoodCard } from '@components/molecules'
import data from '@/utils/data.json'
import { Product } from '@interfaces/commons'

const products = data as Product[]

const FoodCardList = () => {
  return (
    <section className='grid grid-cols-3 gap-8'>
      {products.map((product) => {
        return <FoodCard key={product.name} product={product} />
      })}
    </section>
  )
}

export default FoodCardList
