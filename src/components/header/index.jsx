"use client";
import React, { useState } from "react";
import Logo from "@/assets/icons/Shortlet.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#F1E1C6] z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-20">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={Logo} alt="logo" className="w-[100px] h-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 uppercase font-bold text-sm">
          <Link href="/" className="hover:text-[#E76F51] transition">Home</Link>
          <Link href="/about" className="hover:text-[#E76F51] transition">About Us</Link>
          <Link href="/listings" className="hover:text-[#E76F51] transition">Apartments</Link>
          <Link href="/contact" className="hover:text-[#E76F51] transition">Contact Us</Link>
        </nav>

        {/* Contact */}
        <div className="hidden md:block px-4 text-sm font-semibold">
          <p>+234 8123456554</p>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            className="text-gray-800 font-bold text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Side Drawer Modal */}
        {isOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Drawer */}
            <div className="fixed top-0 right-0 w-72 h-full bg-[#c0b6aa] z-50 shadow-lg p-6 flex flex-col">
              <button
                className="self-end text-2xl font-bold mb-8"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
              <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-bold uppercase mb-6 hover:text-[#E76F51] transition">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-bold uppercase mb-6 hover:text-[#E76F51] transition">
                About Us
              </Link>
              <Link href="/listings" onClick={() => setIsOpen(false)} className="text-xl font-bold uppercase mb-6 hover:text-[#E76F51] transition">
                Apartments
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl font-bold uppercase mb-6 hover:text-[#E76F51] transition">
                Contact Us
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
