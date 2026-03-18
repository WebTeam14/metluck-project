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
          alt={slide.subtitle}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Very light overlay so background is visible */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Very subtle title */}
        <h1
          style={{
            fontSize: "clamp(3rem,6vw,6rem)",
            fontWeight: 500,
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.18)"
          }}
        >
          METLUCK
          <span
            style={{
              display: "block",
              color: "rgba(56,189,248,0.28)",
              letterSpacing: "0.18em"
            }}
          >
            GROUP
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            marginTop: "20px",
            fontSize: "clamp(1.2rem,2vw,1.8rem)",
            color: "rgba(255,255,255,0.65)"
          }}
        >
          {heroSlides[currentSlide].subtitle}
        </p>

        {/* Buttons */}
        <div className="flex gap-6 flex-wrap justify-center mt-8">

          <Link
            to="/services"
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg text-white"
          >
            Explore Services
          </Link>

          <Link
            to="/contact"
            className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition text-white"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}