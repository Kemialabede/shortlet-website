import React from "react";
import Image from "next/image";
import AboutImage from "@/assets/icons/interior-design.jpg";

const About = () => {
  return (
    <section className="bg-[#FAF9F6]">
      {/* Hero */}
      <div className="relative w-full h-[60vh]">
        <Image
          src={AboutImage}
          alt="Luxury interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl lg:text-7xl font-bold">
            About Us
          </h1>
        </div>
      </div>

      {/* Who We Are */}
      <div className="container mx-auto px-6 lg:px-20 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-heading text-[#2E2E2E] mb-6">
            Who We Are
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At <span className="font-semibold">[Your Brand Name]</span>, we
            believe every stay should feel like home. We design our service
            apartments with a unique blend of comfort and contemporary elegance.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to create spaces where modern design meets timeless
            comfort — making your short stay feel like a luxurious escape.
          </p>
        </div>
        <div>
          <Image
            src={AboutImage}
            alt="About Us interior"
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

<div className="bg-white py-16">
  <div className="container mx-auto px-6 lg:px-20 text-center">
    <h2 className="text-3xl font-heading mb-12">Our Philosophy</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Comfort, Elevated",
          desc: "Every detail is designed to make you feel at home, yet indulge in more than the ordinary.",
        },
        {
          title: "Luxury Made Personal",
          desc: "We believe luxury isn’t about excess — it’s about thoughtful touches tailored to your stay.",
        },
        {
          title: "Design that Inspires",
          desc: "Our interiors blend modern aesthetics with timeless warmth, creating spaces that lift your mood.",
        },
        {
          title: "Details that Matter",
          desc: "From lighting to textures, we obsess over the little things, because they make the biggest difference.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="p-6 rounded-xl shadow-md bg-[#FAF9F6] hover:shadow-lg transition text-left"
        >
          <h3 className="text-xl font-semibold text-[#2E2E2E] mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* CTA */}
      <div className="py-20 text-center">
        <h2 className="text-3xl font-heading mb-6">
          Ready to Experience Luxury?
        </h2>
        <a
          href="/booking"
          className="inline-block bg-[#E76F51] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#D45B3F] transition"
        >
          Book Your Stay
        </a>
      </div>
    </section>
  );
};

export default About;
