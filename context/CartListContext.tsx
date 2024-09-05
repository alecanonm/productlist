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
  toggleCart: boolean
  setToggleCart: Dispatch<SetStateAction<boolean>>
  setCartList: Dispatch<SetStateAction<Product[]>>
}

const cartListContextDefaultValue: CartListContextType = {
  cartList: [],
  toggleCart: false,
  setToggleCart: () => {},
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
  const [toggleCart, setToggleCart] = useState<boolean>(false)

  return (
    <CartListContext.Provider
      value={{ cartList, setCartList, toggleCart, setToggleCart }}
    >
      {children}
    </CartListContext.Provider>
  )
}
