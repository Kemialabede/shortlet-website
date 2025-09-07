"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import HomeImage from "@/assets/icons/interior-design.jpg";

// Embla imports
import useEmblaCarousel from "embla-carousel-react";

const apartments = [
  {
    title: "Luxury Downtown Apartment",
    location: "City Center",
    price: "$120/night",
  },
  {
    title: "Cozy Modern Loft",
    location: "Uptown",
    price: "$95/night",
  },
  {
    title: "Stylish Studio Suite",
    location: "Riverside",
    price: "$110/night",
  }
];

const FeaturedApartments = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const [emblaRef] = useEmblaCarousel({ dragFree: true, containScroll: "trimSnaps" });

  return (
    <section className="bg-[#FAF9F6] py-24">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-heading text-[#2E2E2E] mb-12 text-center">
          Featured Apartments
        </h2>

        {/* Desktop Grid */}
        <div className="hidden lg:grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {apartments.map((apt, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-500 cursor-pointer group"
              onClick={() => setActiveIdx(idx === activeIdx ? null : idx)}
            >
              <Image
                src={HomeImage}
                alt={apt.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-black/30 flex flex-col justify-end p-6 transition-opacity duration-300
                  ${activeIdx === idx ? "opacity-100" : "opacity-0"} 
                  group-hover:opacity-100`}
              >
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
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {apartments.map((apt, idx) => (
              <div
                key={idx}
                className="flex-[0_0_80%] relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => setActiveIdx(idx === activeIdx ? null : idx)}
              >
                <Image
                  src={HomeImage}
                  alt={apt.title}
                  className="w-full h-72 object-cover transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-black/30 flex flex-col justify-end p-6 transition-opacity duration-300
                      ${activeIdx === idx ? "opacity-100" : "opacity-0"}`}
                >
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedApartments;
