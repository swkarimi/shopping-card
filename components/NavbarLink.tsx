"use client"

import Link from "next/link"
import type { FC, ReactNode } from "react"
import { GoBook, GoPackage, GoPeople } from "react-icons/go"

type NavbarLinkProps = {
  label: string
  icon?: ReactNode
  href: string
}

export const NavbarLink: FC<NavbarLinkProps> = ({ label, icon, href }) => {
  return (
    <li>
      <Link
        href={href}
        className="block px-4 py-2 text-white hover:bg-nav-orange duration-300 text-center rounded"
      >
        <div className="flex flex-row items-center gap-1.5 text-base select-none">
          {icon && icon}
          {label}
        </div>
      </Link>
    </li>
  )
}
