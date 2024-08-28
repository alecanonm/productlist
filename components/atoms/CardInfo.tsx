import { Product } from '@interfaces/commons'
import { formatCurrency } from '@utils'

const CardInfo = ({ name, category, price }: Product) => (
  <ul>
    <li className='text-Rose_400'>{category}</li>
    <li className='text-Rose_900 font-semibold'>{name}</li>
    <li className='text-red font-semibold'>{formatCurrency(price)}</li>
  </ul>
)

export default CardInfo
