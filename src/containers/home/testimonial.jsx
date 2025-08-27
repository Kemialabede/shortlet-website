import React from 'react';
import Image from 'next/image';
import HomeImage from '@/assets/icons/interior-design.jpg'

const Testimonial = () => {
  return (
    <section className="bg-[#F7F5F0] py-24">
  <div className="container mx-auto px-6 lg:px-20">
    <h2 className="text-4xl font-heading text-[#2E2E2E] mb-12 text-center">
      What Our Guests Say
    </h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Alice Johnson",
          image: "/images/guest1.jpg",
          quote:
            "Staying here felt like a home away from home. The interiors are stunning and every detail is perfect.",
        },
        {
          name: "Michael Lee",
          image: "/images/guest2.jpg",
          quote:
            "Excellent service and very convenient location. Would definitely stay again!",
        },
        {
          name: "Sophie Turner",
          image: "/images/guest3.jpg",
          quote:
            "The apartment exceeded my expectations. Stylish, clean, and super comfortable.",
        },
      ].map((guest, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
        >
          <Image
            src={HomeImage}
            alt={guest.name}
            className="w-16 h-16 rounded-full object-cover mb-4"
          />
          <p className="text-gray-700 italic">"{guest.quote}"</p>
          <h4 className="mt-4 text-[#2E2E2E] font-semibold">{guest.name}</h4>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default Testimonial