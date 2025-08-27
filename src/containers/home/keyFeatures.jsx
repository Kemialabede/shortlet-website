import React from 'react'

const KeyFeatures = () => {
  return (
    <section className="bg-white py-24">
  <div className="container mx-auto px-6 lg:px-20">
    {/* Heading */}
    <h2 className="text-4xl font-heading text-[#2E2E2E] mb-12 text-center">
      Why Choose Us
    </h2>

    {/* Features Grid */}
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          icon: "🏠",
          title: "Modern Interiors",
          description:
            "Stylish, thoughtfully designed apartments that feel like home.",
        },
        {
          icon: "📍",
          title: "Prime Locations",
          description:
            "Stay in the heart of the city, close to attractions and transport.",
        },
        {
          icon: "⚡",
          title: "Fast & Reliable WiFi",
          description:
            "Work or stream seamlessly with high-speed internet in every apartment.",
        },
        {
          icon: "🛎️",
          title: "Personalized Service",
          description:
            "Our team ensures a smooth stay from check-in to check-out.",
        },
      ].map((feature, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="text-5xl">{feature.icon}</div>
          <h3 className="text-xl font-semibold text-[#2E2E2E]">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default KeyFeatures