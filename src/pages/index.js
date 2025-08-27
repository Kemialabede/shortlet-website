import Image from "next/image";
import { Outfit } from "next/font/google";
import HomeImage from '@/assets/icons/interior-design.jpg';
import FeaturedApartments from "@/containers/home/featuredApartments";
import KeyFeatures from "@/containers/home/keyFeatures";
import Testimonial from "@/containers/home/testimonial";
import BookingSection from "@/containers/home/bookingSection";
import { motion } from "framer-motion";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  return (
      <div className={`${outfit.variable}`}>

        {/* Hero Section */}
        <section className="relative w-full h-[60vh]">
          <Image 
            src={HomeImage} 
            alt="home image" 
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
         <div className="absolute inset-0 flex flex-col justify-end items-start pb-16 px-8">
    <span className="text-white text-lg mb-2 uppercase tracking-wider opacity-80 font-medium">Stay in Style</span>
    <a
      href="#booking"
      className="bg-[#E76F51] text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition transform flex items-center gap-2"
    >
      Book Your Stay <span className="text-xl">🛎️</span>
    </a>
  </div>
        </section>

        {/* About Us */}
        <section className="bg-[#FAF9F6] py-24">
          <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
            <div
              className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg"
              // initial={{ opacity: 0, x: -50 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // viewport={{ once: false}}
              // transition={{ duration: 0.8 }}
            >
              <Image src={HomeImage} alt="Luxury apartment interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div
              className="lg:w-1/2 space-y-6"
              // initial={{ opacity: 0, x: 50 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // viewport={{ once: false }}
              // transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-heading text-[#2E2E2E]">About Us</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At <span className="font-semibold">[Your Brand Name]</span>, we believe every stay should feel like home. Our service apartments are designed with comfort and modern aesthetics.
              </p>
              <a href="/apartments" className="inline-block mt-4 bg-[#E76F51] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D45B3F] transition">
                Explore Our Apartments
              </a>
            </div>
          </div>
        </section>

        {/* Other Sections */}
        <FeaturedApartments />
        <KeyFeatures />
        <Testimonial />

        {/* Sticky Booking Section */}
        <BookingSection />

      </div>
  );
}
