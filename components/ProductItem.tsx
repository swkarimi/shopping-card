"use client"

import { useShoppingCart } from "@/context/ShoppingCartContext"
import Image from "next/image"
import { useEffect, useState } from "react"
import type { FC } from "react"
import { GoTrash } from "react-icons/go"
import { HiMinus, HiPlus } from "react-icons/hi2"
import { Currency } from "./Currency"
import { formatPersianNumber } from "@/lib/format"

type ProductItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export const ProductItem: FC<ProductItemProps> = ({
  id,
  name,
  imgUrl,
  price,
}) => {
  const [quantity, setQuantity] = useState<number>(0)
  const {
    getItemQuantity,
    addCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart()

  useEffect(() => {
    const q = getItemQuantity(id)
    setQuantity(q)
  }, [getItemQuantity, id])

  return (
    <div className="max-w-80 w-full mx-auto border rounded bg-white">
      <div className="relative w-full aspect-square">
        <Image
          src={imgUrl}
          alt={name}
          fill
          className="rounded-t"
          sizes="w-full aspect-square"
        />
      </div>
      <div className="flex justify-between items-baseline p-2">
        <span className="text-sm">{name}</span>
        <span className=" text-gray-600">{<Currency amount={price} />}</span>
      </div>
      <div className="w-full text-center p-4">
        {quantity === 0 ? (
          <button
            className="px-4 py-2 text-sm bg-sky-600 hover:bg-sky-700 text-white rounded-md outline-none"
            onClick={() => addCart({ id, imgUrl, name, price })}
          >
            افزودن به سبد خرید
          </button>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <button
              className="size-8 text-sm bg-sky-600 hover:bg-sky-700 text-white rounded-md outline-none flex items-center justify-center"
              onClick={() => increaseCartQuantity(id)}
            >
              <HiPlus size={20} />
            </button>
            <div className="w-10">{formatPersianNumber(quantity)}</div>
            {quantity === 1 ? (
              <button
                className="size-8 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md outline-none flex items-center justify-center"
                onClick={() => decreaseCartQuantity(id)}
              >
                <GoTrash size={20} />
              </button>
            ) : (
              <button
                className="size-8 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md outline-none flex items-center justify-center"
                onClick={() => decreaseCartQuantity(id)}
              >
                <HiMinus size={20} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
