import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-Helvetica-med">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            About <span className="text-rose-600">YourShop</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe shopping should be joyful, inspiring, and effortless.
            YourShop curates premium products with a focus on quality, style,
            and simplicity.
          </p>
        </div>
      </section>

      {/* Brand Story + Images */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Founded with a passion for design and a love for clean aesthetics,
              YourShop started as a small boutique and grew into a trusted
              destination for modern shoppers. We blend technology with timeless
              style to deliver products that feel personal and premium.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/story1.jpg"
              alt="Story 1"
              className="rounded-lg shadow-md object-cover h-40 w-full"
            />
            <img
              src="/images/story2.jpg"
              alt="Story 2"
              className="rounded-lg shadow-md object-cover h-40 w-full"
            />
            <img
              src="/images/story3.jpg"
              alt="Story 3"
              className="rounded-lg shadow-md object-cover h-40 w-full"
            />
            <img
              src="/images/story4.jpg"
              alt="Story 4"
              className="rounded-lg shadow-md object-cover h-40 w-full"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-xl shadow p-6">
                <p className="text-gray-700 italic mb-4">
                  “Absolutely love the quality and the vibe. Fast delivery and
                  beautiful packaging!”
                </p>
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={`/images/user${i}.jpg`}
                    alt={`User ${i}`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-900">
                      User {i}
                    </p>
                    <p className="text-xs text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
