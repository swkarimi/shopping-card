'use client'

import { useShoppingCart } from "@/context/ShoppingCartContext"
import productItems from "../data/items.json"
import React, { FC } from "react"
import Image from "next/image"
import { Currency } from "./Currency"
import { formatPersianNumber } from "@/lib/format"
import { HiMinus, HiPlus } from "react-icons/hi2"
import { GoTrash } from "react-icons/go"

type CartItemProps = {
  id: number
  quantity: number
}
export const CartItem: FC<CartItemProps> = ({ id, quantity }) => {
  const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()
  const item = productItems.find((i) => i.id === id)
  if (item == null) return null
  return (
    <div className="flex flex-row items-start justify-between">
      <div className="flex flex-row gap-1">
        <div className="relative size-14">
          <Image src={item.imgUrl} alt={item.name} fill sizes="size-14" />
        </div>
        <div className="flex flex-col text-xs space-y-1">
          <div>{item.name}</div>
          <Currency amount={item.price} />
          <div className="flex items-center gap-2">
            <button
              className="size-4 text-sm text-sky-600 hover:text-sky-800 rounded-md outline-none flex items-center justify-center"
              onClick={() => increaseCartQuantity(id)}
            >
              <HiPlus size={20} />
            </button>
            <div className="w-4 text-center text-sm">
              {formatPersianNumber(quantity)}
            </div>
            {quantity === 1 ? (
              <button
                className="size-4 text-sm text-red-500 hover:text-red-700 rounded-md outline-none flex items-center justify-center"
                onClick={() => decreaseCartQuantity(id)}
              >
                <GoTrash size={12} />
              </button>
            ) : (
              <button
                className="size-4 text-sm text-red-500 hover:text-red-700 rounded-md outline-none flex items-center justify-center"
                onClick={() => decreaseCartQuantity(id)}
              >
                <HiMinus size={8} />
              </button>
            )}
          </div>
        </div>
      </div>
      <Currency amount={quantity * item.price} className="text-sm" />
    </div>
  )
}
