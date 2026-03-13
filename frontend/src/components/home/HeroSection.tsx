import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* Images */
import picture1 from "@/assets/Picture1.png";
import picture2 from "@/assets/Picture2.png";
import picture3 from "@/assets/Picture3.jpg";
import picture4 from "@/assets/Picture4.jpg";

const heroSlides = [
  { image: picture1, subtitle: "Our Office" },
  { image: picture2, subtitle: "Our Factory" },
  { image: picture3, subtitle: "Industrial Services" },
  { image: picture4, subtitle: "Engineering & Construction Services" }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Center Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          METLUCK
          <span className="block text-blue-500">GROUP</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8">
          {heroSlides[currentSlide].subtitle}
        </p>

        <div className="flex gap-6">
          <Link
            to="/services"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg"
          >
            Explore Services
          </Link>

          <Link
            to="/contact"
            className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black"
          >
            Contact Us
          </Link>
        </div>

      </div>

    </section>
  );
}