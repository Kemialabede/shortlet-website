import React from 'react';
import Logo from "@/assets/icons/Shortlet.png";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-[#F1E1C6] z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-20">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={Logo} alt="logo" className="w-[100px] h-auto" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 uppercase font-bold text-sm">
          <a href="/" className="hover:text-[#E76F51] transition">Home</a>
          <a href="/about" className="hover:text-[#E76F51] transition">About Us</a>
          <a href="/listings" className="hover:text-[#E76F51] transition">Apartments</a>
          <a href="/contact" className="hover:text-[#E76F51] transition">Contact Us</a>
        </nav>

        {/* Contact */}
        <div className="hidden md:block px-4 text-sm font-semibold">
          <p>+234 8123456554</p>
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          {/* You can add a hamburger menu here later */}
          <button aria-label="Open menu" className="text-gray-800 font-bold text-lg">
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;
