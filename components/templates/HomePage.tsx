import { Cart } from '@components/molecules'
import { FoodCardList } from '@components/organisms'

export default function HomePage() {
  return (
    <section className='flex flex-col max-sm:items-center sm:flex-row gap-10'>
      <div>
        <h1 className='text-4xl sm:text-5xl text-Rose_900 pb-10'>
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
