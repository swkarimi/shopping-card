import Image from "next/image"
import React, { FC } from "react"
import { GoTrash } from "react-icons/go"
import { HiMinus, HiOutlinePlusSmall, HiPlus } from "react-icons/hi2"

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
  const quantity: number = 0
  return (
    <div className="max-w-80 w-full mx-auto border rounded bg-white">
      <div className="relative w-full aspect-square">
        <Image src={imgUrl} alt={name} fill className="rounded-t" />
      </div>
      <div className="flex justify-between items-baseline p-2">
        <span className="text-sm">{name}</span>
        <span className=" text-gray-600">{price}</span>
      </div>
      <div className="w-full text-center p-4">
        {quantity === 0 ? (
          <button className="px-4 py-2 text-sm bg-sky-600 hover:bg-sky-700 text-white rounded-md outline-none">
            افزودن به سبد خرید
          </button>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <button className="size-8 text-sm bg-sky-600 hover:bg-sky-700 text-white rounded-md outline-none flex items-center justify-center">
                <HiPlus size={20} />
              </button>
              <div>
                <span className="p-2">{quantity}</span>
              </div>
              {quantity === 1 ? (
                <button className="size-8 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md outline-none flex items-center justify-center">
                  <GoTrash size={20} />
                </button>
              ) : (
                <button className="size-8 text-sm bg-sky-600 hover:bg-sky-700 text-white rounded-md outline-none flex items-center justify-center">
                  <HiMinus size={20} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
