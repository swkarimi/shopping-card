'use client'

import { useShoppingCart } from "@/context/ShoppingCartContext"
import { cn } from "@/lib/utils"
import React, { FC } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { CartItem } from "./CartItem"
import productItems from "../data/items.json"
import { Currency } from "./Currency"

type ShoppingCartProps = {
  isOpen: boolean
}

export const ShoppingCart: FC<ShoppingCartProps> = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart()
  const total = cartItems.reduce((total, cartItem) => {
    const item = productItems.find((i) => i.id == cartItem.id)
    return total + (item?.price || 0) * cartItem.quantity
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
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
      {total !== 0 && <hr />}
      {total === 0 ? (
        <div className="flex justify-center pt-4 text-sm">
          سبد کالا خالی می‌باشد
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
