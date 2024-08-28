import { Cart } from '@components/molecules'
import { FoodCardList } from '@components/organisms'

export default function HomePage() {
  return (
    <section className='flex gap-10'>
      <div className='col-span-1'>
        <h1 className='text-5xl text-Rose_900 pb-10'>
          <strong>Desserts</strong>
        </h1>
        <FoodCardList />
      </div>
      <div>
        <Cart />
      </div>
    </section>
  )
}
