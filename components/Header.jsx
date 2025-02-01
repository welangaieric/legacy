"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex justify-center bg-white fixed top-0 w-full z-10 shadow-md">
      <div className="w-11/12 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Konnekt Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-darkgreen font-semibold hidden md:block">Konnekt Smart Life</h3>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-darkgreen hover:text-green transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/packages" className="text-darkgreen hover:text-green transition-colors">
                Packages
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-darkgreen hover:text-green transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-darkgreen hover:text-green transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-darkgreen hover:text-green transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/signin" className="text-green hover:text-darkgreen transition-colors">
                Self Care
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-darkgreen">
            <Menu size={24} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white w-3/4 h-full p-4">
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold">Konnekt Smart Life</p>
              <button onClick={() => setIsMenuOpen(false)} className="text-darkgreen">
                <X size={24} />
              </button>
            </div>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-darkgreen hover:text-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-darkgreen hover:text-green transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-darkgreen hover:text-green transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-darkgreen hover:text-green transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-darkgreen hover:text-green transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/signin" className="text-green hover:text-darkgreen transition-colors">
                  Self Care
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

