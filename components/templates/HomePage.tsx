import { FoodCardList } from '@components/organisms'

export default function HomePage() {
  return (
    <section>
      <h1 className='text-5xl text-Rose_900'>
        <strong>Desserts</strong>
      </h1>
      <div>
        <FoodCardList />
      </div>
    </section>
  )
}
