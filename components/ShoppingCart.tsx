import { cn } from "@/lib/utils"
import React, { FC } from "react"
import { IoCloseOutline } from "react-icons/io5"

type ShoppingCartProps = {
  isOpen: boolean
}

export const ShoppingCart: FC<ShoppingCartProps> = ({ isOpen }) => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-20 h-screen w-64 p-4 overflow-y-auto transition-transform bg-white shadow-xl ",
        { "translate-x-0": isOpen },
        { "-translate-x-full": !isOpen }
      )}
    >
      <h4 className="text-sm font-bold text-gray-500">سبد خرید</h4>
      <button
        type="button"
        className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg size-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
      >
        <IoCloseOutline size={20} />
      </button>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2">
            Shopping cart
        </ul>
      </div>
    </div>
  )
}
