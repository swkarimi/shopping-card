"use client"

import { useShoppingCart } from "@/context/ShoppingCartContext"
import type { CartItem as CartItemType } from "@/context/ShoppingCartContext"
import { cn } from "@/lib/utils"
import React, { FC, useEffect, useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { Currency } from "./Currency"
import { CartItem } from "./CartItem"

type ShoppingCartProps = {
  isOpen: boolean
}

export const ShoppingCart: FC<ShoppingCartProps> = ({ isOpen }) => {
  const [carItemsValue, setCartItemsValue] = useState<CartItemType[]>([])

  const { closeCart, cartItems } = useShoppingCart()

  useEffect(() => {
    setCartItemsValue(cartItems)
  }, [cartItems])

  const total = carItemsValue.reduce((total, cartItem) => {
    return total + cartItem.product.price * cartItem.quantity
  }, 0)

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-20 h-screen w-80 p-4 overflow-y-auto transition-transform bg-white shadow-xl ",
        { "translate-x-0": isOpen },
        { "-translate-x-full": !isOpen }
      )}
    >
      <h4 className="text-sm font-bold text-gray-500">سبد خرید</h4>
      <button
        type="button"
        className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg size-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
        onClick={closeCart}
      >
        <IoCloseOutline size={20} />
      </button>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-4">
          {carItemsValue.map((item) => (
            <CartItem key={item.product.id} {...item} />
          ))}
        </ul>
      </div>
      {total !== 0 && <hr />}
      {total === 0 ? (
        <div className="flex justify-center pt-4 text-sm">
          سبد خرید خالی می‌باشد
        </div>
      ) : (
        <div className="flex items-center justify-between pt-4">
          <div className="">قیمت کل</div>
          <Currency amount={total} />
        </div>
      )}
    </div>
  )
}
