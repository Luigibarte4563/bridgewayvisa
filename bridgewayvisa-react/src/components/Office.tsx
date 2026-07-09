import { useState, useEffect } from "react";
import updatedMainOffice from "../../../assets/ourOffice/UPDATED MAIN OFFICE.webp";
import cebuOffice1 from "../../../assets/ourOffice/CEBU OFFICE 1.0.webp";
import cebuOffice2 from "../../../assets/ourOffice/CEBU OFFICE 2.0.webp";
import cebuOffice3 from "../../../assets/ourOffice/CEBU OFFICE 3.0.webp";
import cebuOffice4 from "../../../assets/ourOffice/CEBU OFFICE 4.0.webp";

const slides = [
  {
    src: updatedMainOffice,
    alt: "Updated Main Office",
  },
  {
    src: cebuOffice1,
    alt: "Cebu Office 1",
  },
  {
    src: cebuOffice2,
    alt: "Cebu Office 2",
  },
  {
    src: cebuOffice3,
    alt: "Cebu Office 3",
  },
  {
    src: cebuOffice4,
    alt: "Cebu Office 4",
  },
];

export default function Office() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const moveSlide = (dir: number) => {
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  };

  return (
    <section
      id="office"
      className="scroll-mt-20 h-auto w-full bg-zinc-950 text-white flex flex-col justify-center py-16 md:py-24 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-12 tracking-wide">
          Our Office
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 w-full flex flex-col items-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl group border border-white/10 bg-zinc-900">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((slide) => (
                  <img
                    key={slide.alt}
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-64 md:h-96 object-cover flex-shrink-0"
                  />
                ))}
              </div>
              <button
                onClick={() => moveSlide(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
                aria-label="Previous slide"
              >
                &#10094;
              </button>
              <button
                onClick={() => moveSlide(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
                aria-label="Next slide"
              >
                &#10095;
              </button>
            </div>
            <div className="flex gap-3 mt-8">
              {slides.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    i === current
                      ? "bg-red-700 w-8"
                      : "bg-zinc-700 w-3 hover:bg-red-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
              <p>
                <span className="text-white font-medium">
                  Bridgeway Visa Travel Corporation
                </span>{" "}
                offers a welcoming and professional office ambiance that
                reflects our commitment to quality service. The space is
                meticulously organized, featuring a clean and modern layout
                designed to put you at ease.
              </p>
              <p>
                Our team provides a warm, efficient environment perfect for
                detailed travel consultations and secure visa processing,
                ensuring every client feels supported throughout their journey.
              </p>
            </div>
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-block bg-transparent text-red-600 border-2 border-red-700 px-10 py-3 rounded-xl font-bold hover:bg-red-700 hover:text-white transition duration-300 shadow-lg hover:shadow-red-900/20 active:scale-95"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
