"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HomeImage from "@/assets/icons/interior-design.jpg";

const ApartmentDetails = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook WhatsApp API or email service here
    alert("Booking submitted! We'll reach out shortly on WhatsApp.");
  };

  return (
    <section className="bg-[#FAF9F6] min-h-screen py-20">
      <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-3 gap-12">
        {/* Left: Apartment Info */}
        <div className="lg:col-span-2">
          {/* Go Back button */}
          <button
            onClick={() => router.back()}
            className="mb-6 inline-flex items-center text-[#E76F51] hover:text-[#D45B3F] transition font-medium"
          >
            ← Go Back
          </button>

          <Image
            src={HomeImage}
            alt="Luxury Apartment"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-8"
          />

          <h1 className="text-4xl font-bold text-[#2E2E2E] mb-2">
            Premium Skyline Suite
          </h1>
          <p className="text-lg text-gray-500 mb-6">
            📍 Uptown · <span className="font-semibold text-[#E76F51]">$180/night</span>
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Welcome to the <span className="font-semibold">Premium Skyline Suite</span>,
            where modern luxury meets comfort. This apartment offers panoramic city
            views, designer interiors, and carefully curated details that ensure
            every stay is unforgettable.
          </p>

          {/* Amenities */}
          <h2 className="text-2xl font-semibold text-[#2E2E2E] mb-4">
            Amenities
          </h2>
          <ul className="grid grid-cols-2 gap-3 text-gray-600 mb-8">
            <li>✔ High-speed WiFi</li>
            <li>✔ Fully-equipped kitchen</li>
            <li>✔ 24/7 power supply</li>
            <li>✔ Smart TV with Netflix</li>
            <li>✔ Air conditioning</li>
            <li>✔ Secure parking</li>
          </ul>
        </div>

        {/* Right: Booking Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 lg:sticky lg:top-24 h-fit border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-[#2E2E2E]">
            Book Your Stay
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E76F51] transition"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E76F51] transition"
              required
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E76F51] transition"
              required
            />
            <div className="flex gap-4">
              <input
                type="date"
                name="checkin"
                value={form.checkin}
                onChange={handleChange}
                className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E76F51] transition"
                required
              />
              <input
                type="date"
                name="checkout"
                value={form.checkout}
                onChange={handleChange}
                className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E76F51] transition"
                required
              />
            </div>
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E76F51] transition"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n} Guest{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full bg-[#E76F51] text-white font-semibold py-3 rounded-lg hover:bg-[#D45B3F] transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApartmentDetails;
