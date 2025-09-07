"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // default styles
import HomeImage from "@/assets/icons/interior-design.jpg";


const apartments = [
  { id: 1, title: "Classic Downtown Apartment", category: "classic", location: "City Center", price: 95, image: HomeImage },
  { id: 2, title: "Premium Skyline Suite", category: "premium", location: "Uptown", price: 180, image: HomeImage },
  { id: 3, title: "Classic Riverside Loft", category: "classic", location: "Riverside", price: 120, image: HomeImage },
  { id: 4, title: "Premium Luxury Penthouse", category: "premium", location: "Central District", price: 250, image: HomeImage },
  { id: 5, title: "Classic Garden Studio", category: "classic", location: "Greenwood", price: 80, image: HomeImage },
  { id: 6, title: "Premium Marina View Loft", category: "premium", location: "Harbor Side", price: 200, image: HomeImage },
  { id: 7, title: "Classic Suburban Retreat", category: "classic", location: "West End", price: 105, image: HomeImage },
  { id: 8, title: "Premium Presidential Suite", category: "premium", location: "Sky Towers", price: 320, image: HomeImage },
  { id: 4, title: "Premium Luxury Penthouse", category: "premium", location: "Central District", price: 250, image: HomeImage },
  { id: 5, title: "Classic Garden Studio", category: "classic", location: "Greenwood", price: 80, image: HomeImage },
  { id: 6, title: "Premium Marina View Loft", category: "premium", location: "Harbor Side", price: 200, image: HomeImage },
  { id: 7, title: "Classic Suburban Retreat", category: "classic", location: "West End", price: 105, image: HomeImage },
];

const ApartmentListing = () => {
  const [category, setCategory] = useState("all");
  const [range, setRange] = useState([50, 350]);

  const filtered = apartments.filter(
    (apt) =>
      (category === "all" || apt.category === category) &&
      apt.price >= range[0] &&
      apt.price <= range[1]
  );

  return (
    <section className="bg-[#FAF9F6] min-h-screen py-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-4xl font-heading text-[#2E2E2E] mb-12 text-center">
          Browse Our Apartments
        </h2>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
          {/* Category */}
          <div className="flex gap-4">
            {["all", "classic", "premium"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  category === cat
                    ? "bg-[#E76F51] text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Price Slider */}
          <div className="w-full max-w-md">
            <p className="mb-2 font-medium text-gray-700 text-sm">
              Price Range: <span className="text-[#E76F51]">${range[0]} – ${range[1]}</span>
            </p>
            <Slider
              range
              min={50}
              max={350}
              step={5}
              value={range}
              onChange={(val) => setRange(val)}
              trackStyle={[{ backgroundColor: "#E76F51" }]}
              handleStyle={[
                { borderColor: "#E76F51", backgroundColor: "#E76F51" },
                { borderColor: "#E76F51", backgroundColor: "#E76F51" },
              ]}
            />
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((apt) => (
              <div
                key={apt.id}
                className="relative rounded-xl overflow-hidden shadow-lg group bg-white"
              >
                <Image
                  src={apt.image}
                  alt={apt.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2E2E2E]">{apt.title}</h3>
                  <p className="text-gray-500 text-sm">{apt.location}</p>
                  <p className="text-lg font-bold text-[#E76F51] mt-2">${apt.price}/night</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        apt.category === "premium"
                          ? "bg-[#E76F51]/10 text-[#E76F51]"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {apt.category.charAt(0).toUpperCase() + apt.category.slice(1)}
                    </span>
                    <a href="/listings/details" className="text-sm font-medium text-[#E76F51] hover:underline">
                      View Details →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-12">
            No apartments found matching your filters.
          </p>
        )}
      </div>
    </section>
  );
};

export default ApartmentListing;
