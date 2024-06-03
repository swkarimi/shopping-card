"use client"

import { useLocalStorage } from "@/hooks/useLocalStorage"
import { ProductItem } from "@/type/type"
import { ReactNode, createContext, useContext, useState } from "react"

type ShoppingCartProviderProps = {
  children: ReactNode
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  cartQuantity: number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  addCart: (product: ProductItem) => void
  removeFromCart: (id: number) => void
  cartItems: CartItem[]
  isOpen: boolean
}

export type CartItem = {
  product: ProductItem
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  )

  const cartQuantity: number = cartItems
    .map((item) => item.quantity)
    .reduce((a, b) => a + b, 0)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.product?.id === id)?.quantity || 0
  }

  // add product for first time
  function addCart(product: ProductItem) {
    const newCartItems: CartItem[] = [...cartItems, { product, quantity: 1 }]
    setCartItems(newCartItems)
  }

  // increase quantity if added product before
  function increaseCartQuantity(id: number) {
    const newCartItem: CartItem | undefined = cartItems.find(
      (item) => item.product?.id === id
    )

    // never happend
    if (newCartItem === undefined) return

    const newCartItems: CartItem[] = cartItems.map((item) => {
      if (item.product.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    })

    setCartItems(newCartItems)
  }

  function decreaseCartQuantity(id: number) {
    const newCartItem: CartItem | undefined = cartItems.find(
      (item) => item.product.id === id
    )
    const newCartItems: CartItem[] =
      newCartItem?.quantity === 1
        ? cartItems.filter((item) => item.product.id !== id)
        : cartItems.map((item) => {
            if (item.product.id === id) {
              return { ...item, quantity: item.quantity - 1 }
            } else {
              return item
            }
          })

    setCartItems(newCartItems)
  }

  function removeFromCart(id: number) {
    const newCartItems: CartItem[] = cartItems.filter(
      (item) => item.product.id !== id
    )
    setCartItems(newCartItems)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        addCart,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
        openCart,
        closeCart,
        isOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}
