import Image from 'next/image'

const CarbonNeutral = () => (
  <div className='flex bg-Rose_100 p-5 rounded-lg justify-center gap-2'>
    <Image
      src='/assets/images/icon-carbon-neutral.svg'
      alt='carbon-neutral'
      height={20}
      width={20}
    />
    <span className='text-Rose_900'>
      This is a <b className='font-semibold'>carbon-neutral</b> delivery
    </span>
  </div>
)

export default CarbonNeutral
