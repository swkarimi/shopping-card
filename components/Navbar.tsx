"use client"

import { GoBook, GoPackage, GoPeople } from "react-icons/go"
import { NavbarLink } from "./NavbarLink"
import { GrCart } from "react-icons/gr"

export const Navbar = () => {
  return (
    <div className="bg-nav-blue sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-row items-center justify-between">
          <ul className="flex flex-row gap-4">
            <NavbarLink href="/" label="مجله" icon={<GoBook size={20} />} />
            <NavbarLink
              href="/products"
              label="محصولات"
              icon={<GoPackage size={20} />}
            />
            <NavbarLink
              href="/contact"
              label="تماس"
              icon={<GoPeople size={20} />}
            />
          </ul>
          <div className="relative cursor-pointer">
            <div className="bg-white rounded-full size-10 flex items-center justify-center">
              <GrCart size={24} className="text-nav-blue" />
            </div>
            <div className="absolute -right-2 -bottom-2">
              <div className="border border-nav-orange size-6 bg-white text-nav-orange rounded-full flex items-center justify-center text-sm select-none">
                9
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
