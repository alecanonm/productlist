import Image from 'next/image'

export default function HomePage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-3xl text-Rose_900'>
        <strong>Desserts</strong>
      </h1>
      <section className='flex'>
        <article className='flex flex-col'>
          <Image
            src='/assets/images/image-baklava-desktop.jpg'
            height={250}
            width={250}
            className='rounded-lg'
            alt='cake'
          />
          <div className='flex items-center justify-center translate-x-10 -translate-y-5 relative border-2 p-2 rounded-full bg-Rose_50 gap-2 w-40 text-Rose_900 font-semibold hover:cursor-pointer'>
            <Image
              src='/assets/images/icon-add-to-cart.svg'
              height={20}
              width={20}
              alt='cart'
            />
            Add to Cart
          </div>
          <ul>
            <li>Baklava</li>
            <li>Pistachio Baklava</li>
            <li>$4.00</li>
          </ul>
        </article>
      </section>
    </main>
  )
}
