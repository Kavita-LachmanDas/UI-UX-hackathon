'use client'

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full  flex items-center px-6 py-4  z-50">
      {/* Logo */}
      <div className="text-black text-xl font-bold">
        <a href="#">Logo</a>
      </div>

      {/* Hamburger Toggle */}
      <div className="lg:hidden ml-auto text-2xl cursor-pointer" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row lg:items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#FBEBB5] lg:bg-transparent shadow-md lg:shadow-none lg:ml-auto text-center`}
      >
        <ul className="lg:flex lg:space-x-10 text-black font-medium px-6 lg:px-0">
          <li className="py-2 lg:py-0">
            <Link href="/" className="hover:text-gray-700">Home</Link>
          </li>
          <li className="py-2 lg:py-0">
            <a href="/routes/shop" className="hover:text-gray-700">Shop</a>
          </li>
          <li className="py-2 lg:py-0">
            <a href="/routes/blog" className="hover:text-gray-700">About</a>
          </li>
          <li className="py-2 lg:py-0">
            <a href="/routes/contact" className="hover:text-gray-700">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Right-side Icons */}
      <ul className="hidden lg:flex space-x-6 text-black text-xl ml-auto">
        <li>
          <a href="/routes/account" className="hover:text-gray-700">👤</a>
        </li>
        <li>
          <a href="/routes/billing" className="hover:text-gray-700">🔍</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-700">❤️</a>
        </li>
        <li>
          <a href="/routes/cart" className="hover:text-gray-700">🛒</a>
        </li>
      </ul>
    </header>
  );
}
