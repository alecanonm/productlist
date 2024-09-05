import { Image } from '@interfaces/commons'

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)

export const transformUrl = (image: Image) => {
  let url = ''
  for (const key in image) {
    url = image[key as keyof typeof image].replace('.', '')
  }
  return url
}
