'use client'

import { Product } from '@interfaces/commons'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type CartListContextType = {
  cartList: Product[]
  setCartList: Dispatch<SetStateAction<Product[]>>
}

const cartListContextDefaultValue: CartListContextType = {
  cartList: [],
  setCartList: () => {},
}

export const CartListContext = createContext<CartListContextType>(
  cartListContextDefaultValue,
)

export const useCartList = () => {
  return useContext(CartListContext)
}

export const CartListProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [cartList, setCartList] = useState<Product[]>([])

  return (
    <CartListContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartListContext.Provider>
  )
}
