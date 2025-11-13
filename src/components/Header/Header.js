'use client'

import Link from 'next/link'
import Button from '../Button/Button'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        {/* ==== Left Section: Logo + Nav ==== */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-wide hover:text-yellow-300"
          >
            Muhammad Umar
          </Link>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* ==== Right Section: Search + Logout ==== */}
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <form className="hidden sm:flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1.5 w-40 text-sm text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black px-3 py-1.5 text-sm font-semibold hover:bg-yellow-300"
            ></button>
          </form>

          {/* Logout Button */}
          <Button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-1.5 rounded-md text-sm">
            Log out
          </Button>
        </div>
      </div>
    </header>
  )
}
