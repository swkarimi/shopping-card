'use client'

import { ShoppingCart } from "@/components/ShoppingCart"
import { useShoppingCart } from "@/context/ShoppingCartContext"

export default function Template({ children }: { children: React.ReactNode }) {
  const { isOpen } = useShoppingCart()
  return (
    <>
      <ShoppingCart isOpen={isOpen} />
      {children}
    </>
  )
}
