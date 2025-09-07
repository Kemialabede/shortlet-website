/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "@/assets/icons/interior-design.jpg";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you shortly.");
  };

  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative w-full h-96">
        <Image
          src={HeroImage}
          alt="Luxury interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Content Section */}
      <div className="bg-[#FAF9F6] -mt-32 relative z-10 rounded-t-3xl shadow-xl">
        <div className="container mx-auto px-6 lg:px-20 py-20 grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#2E2E2E]">Contact Us</h1>
            <p className="text-gray-700 text-lg">
              Have questions or want to book directly? Fill out the form and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div>
                <h2 className="font-semibold text-[#2E2E2E]">Phone</h2>
                <p className="text-gray-600">+234 8123456554</p>
              </div>
              <div>
                <h2 className="font-semibold text-[#2E2E2E]">Email</h2>
                <p className="text-gray-600">info@yourbrand.com</p>
              </div>
              <div>
                <h2 className="font-semibold text-[#2E2E2E]">Address</h2>
                <p className="text-gray-600">123 Luxury St, Uptown, Your City</p>
              </div>
            </div>
          </div>

          {/* Right: Sticky Contact Form */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-[#2E2E2E] mb-6">Send Us a Message</h2>
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
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E76F51] transition resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#E76F51] text-white font-semibold py-3 rounded-lg hover:bg-[#D45B3F] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Optional: Map Section */}
        <div className="container mx-auto px-6 lg:px-20 mt-16">
          <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
            Map Placeholder
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
