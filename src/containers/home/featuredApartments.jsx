import React from 'react'
import HomeImage from '@/assets/icons/interior-design.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'

const apartments = [
  {
    title: "Luxury Downtown Apartment",
    location: "City Center",
    price: "$120/night",
    image: "/images/apartment1.jpg",
  },
  {
    title: "Cozy Modern Loft",
    location: "Uptown",
    price: "$95/night",
    image: "/images/apartment2.jpg",
  },
  {
    title: "Stylish Studio Suite",
    location: "Riverside",
    price: "$110/night",
    image: "/images/apartment3.jpg",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // stagger each card
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const FeaturedApartments = () => {
  return (
    <section className="bg-[#FAF9F6] py-24">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <h2 className="text-4xl font-heading text-[#2E2E2E] mb-12 text-center">
          Featured Apartments
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {apartments.map((apt, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden rounded-xl shadow-lg group"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariant}
            >
              <Image
                src={HomeImage}
                alt={apt.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay info */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">{apt.title}</h3>
                <p className="text-white text-sm">{apt.location}</p>
                <p className="text-white font-bold mt-2">{apt.price}</p>
                <a
                  href="#"
                  className="inline-block mt-4 bg-[#E76F51] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#D45B3F] transition"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedApartments
