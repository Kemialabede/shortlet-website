import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/icons/Shortlet.png'

const Footer = () => {
  return (
    <footer className="bg-[#F1E1C6] py-12">
  <div className="container mx-auto px-6 lg:px-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

    {/* Logo & About */}
    <div>
      <h1 className="font-heading text-[#2E2E2E]">
        <Image src={Logo} alt="logo" className='w-[100px]' />
      </h1>
      <p className="text-gray-700 text-sm">
        Elegant, fully-furnished service apartments designed for comfort and style. Stay with us for a boutique experience in the heart of the city.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold text-[#2E2E2E] mb-4">Quick Links</h3>
      <ul className="space-y-2 text-gray-700 text-sm">
        <li><a href="#about" className="hover:text-[#E76F51]">About Us</a></li>
        <li><a href="#apartments" className="hover:text-[#E76F51]">Apartments</a></li>
        <li><a href="#features" className="hover:text-[#E76F51]">Why Choose Us</a></li>
        <li><a href="#contact" className="hover:text-[#E76F51]">Contact</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-lg font-semibold text-[#2E2E2E] mb-4">Contact</h3>
      <ul className="space-y-2 text-gray-700 text-sm">
        <li>📞 +123 456 7890</li>
        <li>✉️ info@yourbrand.com</li>
        <li>📍 123 Main Street, City</li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h3 className="text-lg font-semibold text-[#2E2E2E] mb-4">Follow Us</h3>
      <div className="flex space-x-4 text-gray-700 text-2xl">
        <a href="#" className="hover:text-[#E76F51]">🌐</a>
        <a href="#" className="hover:text-[#E76F51]">📸</a>
        <a href="#" className="hover:text-[#E76F51]">📘</a>
        <a href="#" className="hover:text-[#E76F51]">🐦</a>
      </div>
    </div>

  </div>

  <div className="mt-12 text-center text-gray-600 text-sm">
    &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
  </div>
</footer>

  )
}

export default Footer;