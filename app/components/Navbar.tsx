"use client";
import { useState } from "react";
import Link from "next/link";
import { IoIosSearch, IoMdContact } from "react-icons/io";
import { FiMenu } from "react-icons/fi"; // Hamburger icon
import { AiOutlineClose } from "react-icons/ai"; // Close icon for the menu
import { CiShoppingCart } from "react-icons/ci";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-4 py-3 border-b border-gray-100 top-0 left-0 bg-white z-50">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Left Section: Hamburger Icon and Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu Button for Mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            {isMenuOpen ? <AiOutlineClose size={26} /> : <FiMenu size={26} />}
          </button>

          {/* Logo */}
          <h1 className="font-IntegralCF text-4xl font-extrabold text-black">
            SHOP.CO
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-12 items-center">
          <Link
            className="text-lg font-medium text-gray-800 hover:text-black transition-all"
            href="/Shop"
          >
            Shop
          </Link>
          <Link
            className="text-lg font-medium text-gray-800 hover:text-black transition-all"
            href="/OnSale"
          >
            OnSale
          </Link>
          <Link
            className="text-lg font-medium text-gray-800 hover:text-black transition-all"
            href="/NewArrivals"
          >
            NewArrivals
          </Link>
          <Link
            className="text-lg font-medium text-gray-800 hover:text-black transition-all"
            href="/Brands"
          >
            Brands
          </Link>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className="hidden lg:flex items-center rounded-lg px-3 py-2 bg-slate-100">
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-slate-100 outline-none px-4 py-2 text-sm"
            />
            <IoIosSearch size={24} className="cursor-pointer text-black" />
          </div>

          {/* Icons */}
          <Link href="/cart">
            <CiShoppingCart
              size={26}
              className="cursor-pointer text-gray-800 hover:text-black transition-all"
            />
          </Link>
          <Link href="/contact">
            <IoMdContact
              size={26}
              className="cursor-pointer text-gray-800 hover:text-black transition-all"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 bg-white shadow-md p-4 absolute top-16 left-0 w-full rounded-lg z-40">
          <Link
            className="block text-lg font-medium text-gray-800 hover:text-black transition-all py-2"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="block text-lg font-medium text-gray-800 hover:text-black transition-all py-2"
            href="/Shop"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            className="block text-lg font-medium text-gray-800 hover:text-black transition-all py-2"
            href="/OnSale"
            onClick={() => setIsMenuOpen(false)}
          >
            OnSale
          </Link>
          <Link
            className="block text-lg font-medium text-gray-800 hover:text-black transition-all py-2"
            href="/NewArrivals"
            onClick={() => setIsMenuOpen(false)}
          >
            New Arrivals
          </Link>
          <Link
            className="block text-lg font-medium text-gray-800 hover:text-black transition-all py-2"
            href="/Brands"
            onClick={() => setIsMenuOpen(false)}
          >
            Brands
          </Link>
        </nav>
      )}
    </header>
  );
}
