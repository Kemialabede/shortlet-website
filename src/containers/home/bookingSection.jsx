import React from 'react';
import Image from 'next/image';
import HomeImage from '@/assets/icons/interior-design.jpg'

const BookingSection = () => {
  return (
   <section className="bg-[#E76F51] py-24">
     <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
       
       {/* Left: Booking Form */}
       <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-8">
         <h2 className="text-3xl font-heading text-[#2E2E2E] mb-6">
           Book Your Stay
         </h2>
         <p className="text-gray-700 mb-6">
           Select your apartment and dates, and we’ll follow up with you directly on WhatsApp for a seamless booking.
         </p>
   
         <form
           action={`https://wa.me/YOURNUMBER?text=`} // Replace YOURNUMBER
           method="get"
           target="_blank"
           className="grid gap-4"
         >
           {/* Apartment Selection */}
           <div className="flex flex-col">
             <label className="mb-2 font-semibold text-gray-800">Apartment</label>
             <select
               name="apartment"
               className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#E76F51]"
               required
             >
               <option value="">Select</option>
               <option value="Luxury Downtown Apartment">Luxury Downtown Apartment</option>
               <option value="Cozy Modern Loft">Cozy Modern Loft</option>
               <option value="Stylish Studio Suite">Stylish Studio Suite</option>
             </select>
           </div>
   
           {/* Check-in */}
           <div className="flex flex-col">
             <label className="mb-2 font-semibold text-gray-800">Check-in</label>
             <input
               type="date"
               name="checkin"
               className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#E76F51]"
               required
             />
           </div>
   
           {/* Check-out */}
           <div className="flex flex-col">
             <label className="mb-2 font-semibold text-gray-800">Check-out</label>
             <input
               type="date"
               name="checkout"
               className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#E76F51]"
               required
             />
           </div>
   
           {/* Submit */}
           <button
             type="submit"
             className="bg-[#E76F51] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D45B3F] transition mt-4"
           >
             Book Now
           </button>
         </form>
       </div>
   
       {/* Right: Big Image */}
       <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
         <Image
           src={HomeImage}
           alt="Luxury Apartment"
           className="w-full h-full object-cover"
         />
       </div>
     </div>
   </section>

  )
}

export default BookingSection