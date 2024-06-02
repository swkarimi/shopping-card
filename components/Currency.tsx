'use client'

import { formatPersianNumber } from "@/lib/format"
import React, { FC } from "react"

type CurrencyProps = {
  amount: number
  className?: string
}

export const Currency: FC<CurrencyProps> = ({ amount, className }) => {
  return (
    <div className={className}>
      <span className="me-1">{formatPersianNumber(amount)}</span>
      <span className="text-xs">تومان</span>
    </div>
  )
}
