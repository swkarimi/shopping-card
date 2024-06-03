"use client"

import { useShoppingCart } from "@/context/ShoppingCartContext"
import type { FC } from "react"
import Image from "next/image"
import { Currency } from "./Currency"
import { formatPersianNumber } from "@/lib/format"
import { HiMinus, HiPlus } from "react-icons/hi2"
import { GoTrash } from "react-icons/go"
import { ProductItem } from "@/type/type"

type CartItemProps = {
  product: ProductItem
  quantity: number
}
export const CartItem: FC<CartItemProps> = ({ product, quantity }) => {
  const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()
  return (
    <div className="flex flex-row items-start justify-between">
      <div className="flex flex-row gap-1">
        <div className="relative size-14">
          <Image src={product.imgUrl} alt={product.name} fill sizes="size-14" />
        </div>
        <div className="flex flex-col text-xs space-y-1">
          <div>{product.name}</div>
          <Currency amount={product.price} />
          <div className="flex items-center gap-2">
            <button
              className="size-4 text-sm text-sky-600 hover:text-sky-800 rounded-md outline-none flex items-center justify-center"
              onClick={() => increaseCartQuantity(product.id)}
            >
              <HiPlus size={20} />
            </button>
            <div className="w-4 text-center text-sm">
              {formatPersianNumber(quantity)}
            </div>
            {quantity === 1 ? (
              <button
                className="size-4 text-sm text-red-500 hover:text-red-700 rounded-md outline-none flex items-center justify-center"
                onClick={() => decreaseCartQuantity(product.id)}
              >
                <GoTrash size={12} />
              </button>
            ) : (
              <button
                className="size-4 text-sm text-red-500 hover:text-red-700 rounded-md outline-none flex items-center justify-center"
                onClick={() => decreaseCartQuantity(product.id)}
              >
                <HiMinus size={8} />
              </button>
            )}
          </div>
        </div>
      </div>
      <Currency amount={quantity * product.price} className="text-sm" />
    </div>
  )
}
