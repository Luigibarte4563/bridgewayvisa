import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";

import adelaBehagan from "../../../assets/Testimonials/ADELA BEHAGAN - TOURIST VISA.webp";
import carlosAguiran from "../../../assets/Testimonials/CARLOS-AGUIRAN - VISIT VISA.webp";
import edralynNieves from "../../../assets/Testimonials/EDRALYN NIEVES - SPAIN VISA APPROVED.webp";
import emmanuel from "../../../assets/Testimonials/EMMANUEL - STUDENT-VISA DEPENDENT OF WORKER.webp";
import ghernessLiwag from "../../../assets/Testimonials/GHERNESS LIWAG - POST GRADUATION WORK PERMIT.webp";
import graceAnn from "../../../assets/Testimonials/GRACE ANN - PARTNER WORK VISA .webp";
import hanzenVelarde from "../../../assets/Testimonials/HANZEN VELARDE - VISIT VISA.webp";
import jelicaSanJose from "../../../assets/Testimonials/JELICA SAN JOSE - TOURIST VISA.webp";
import jhameica from "../../../assets/Testimonials/JHAMEICA - VISIT VISA.webp";
import josuaOndog from "../../../assets/Testimonials/JOSUA ONDOG - STUDENT VISA APPROVED.webp";
import kaeslyNicole from "../../../assets/Testimonials/KAESLY NICOLE - WORKING PERMIT.webp";
import kristineSuarez from "../../../assets/Testimonials/KRISTINE SUAREZ - BUSINESS VISA.webp";
import maherAli from "../../../assets/Testimonials/MAHER ALI MOHAMMED BA LABID - PHILIPPINE VISA APPROVED.webp";
import mantillaFamily from "../../../assets/Testimonials/MANTILLA FAMILY - TOURIST VISA.webp";
import mariaChristina from "../../../assets/Testimonials/MARIA CHRISTINA BRIONES - TOURIST_VISITOR VISA.webp";
import marygraceMangupag from "../../../assets/Testimonials/MARYGRACE MANGUPAG - BRIDGING VISA.webp";
import merryBiagtan from "../../../assets/Testimonials/MERRY BIAGTAN - TOURIST VISA.webp";
import miguel from "../../../assets/Testimonials/MIGUEL - STUDENT-VISA DEPENDENT OF WORKER.webp";
import mrAguiran from "../../../assets/Testimonials/MR. AGUIRAN -POST GRADUATION WORK PERMIT.webp";
import mrsOfreneo from "../../../assets/Testimonials/MRS. ROCHEL ANN OFRENEO.webp";
import normanCordon from "../../../assets/Testimonials/NORMAN CORDON  - US VISA.webp";
import paguioMarticio from "../../../assets/Testimonials/PAGUIO MARTICIO - POST GRADUATION WORK PERMIT.webp";
import reynaldoCuadra from "../../../assets/Testimonials/REYNALDO CUADRA - STUDENT VISA.webp";
import rosieBejer from "../../../assets/Testimonials/ROSIE BEJER - US VISA.webp";
import santiagoFamily from "../../../assets/Testimonials/SANTIAGO FAMILY - STUDENT VISA + 3 DEPENDENTS TO SPAIN.webp";

const reviews = [
  {
    image: adelaBehagan,
    name: "Adela Behagan",
    description: "Tourist Visa Approved",
  },
  {
    image: carlosAguiran,
    name: "Carlos Aguiran",
    description: "Visit Visa Approved",
  },
  {
    image: edralynNieves,
    name: "Edralyn Nieves",
    description: "Spain Visa Approved",
  },
  {
    image: emmanuel,
    name: "Emmanuel",
    description: "Student Visa Dependent of Worker",
  },
  {
    image: ghernessLiwag,
    name: "Gherness Liwag",
    description: "Post Graduation Work Permit",
  },
  {
    image: graceAnn,
    name: "Grace Ann",
    description: "Partner Work Visa",
  },
  {
    image: hanzenVelarde,
    name: "Hanzen Velarde",
    description: "Visit Visa Approved",
  },
  {
    image: jelicaSanJose,
    name: "Jelica San Jose",
    description: "Tourist Visa Approved",
  },
  {
    image: jhameica,
    name: "Jhameica",
    description: "Visit Visa Approved",
  },
  {
    image: josuaOndog,
    name: "Josua Ondog",
    description: "Student Visa Approved",
  },
  {
    image: kaeslyNicole,
    name: "Kaesly Nicole",
    description: "Work Permit Secured",
  },
  {
    image: kristineSuarez,
    name: "Kristine Suarez",
    description: "Business Visa Approved",
  },
  {
    image: maherAli,
    name: "Maher Ali Mohammed Ba Labid",
    description: "Philippine Visa Approved",
  },
  {
    image: mantillaFamily,
    name: "Mantilla Family",
    description: "Tourist Visa Approved",
  },
  {
    image: mariaChristina,
    name: "Maria Christina Briones",
    description: "Tourist / Visitor Visa Approved",
  },
  {
    image: marygraceMangupag,
    name: "Marygrace Mangupag",
    description: "Bridging Visa Approved",
  },
  {
    image: merryBiagtan,
    name: "Merry Biagtan",
    description: "Tourist Visa Approved",
  },
  {
    image: miguel,
    name: "Miguel",
    description: "Student Visa Dependent of Worker",
  },
  {
    image: mrAguiran,
    name: "Mr. Aguiran",
    description: "Post Graduation Work Permit",
  },
  {
    image: mrsOfreneo,
    name: "Mrs. Rochel Ann Ofreneo",
    description: "Visa Milestone Journey",
  },
  {
    image: normanCordon,
    name: "Norman Cordon",
    description: "US Visa Approved",
  },
  {
    image: paguioMarticio,
    name: "Paguio Marticio",
    description: "Post Graduation Work Permit",
  },
  {
    image: reynaldoCuadra,
    name: "Reynaldo Cuadra",
    description: "Student Visa Approved",
  },
  {
    image: rosieBejer,
    name: "Rosie Bejer",
    description: "US Visa Approved",
  },
  {
    image: santiagoFamily,
    name: "Santiago Family",
    description: "Student Visa + 3 Dependents to Spain",
  },
];

export default function UserReviews() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="user-reviews-testimonial"
      className="scroll-mt-20 min-h-screen w-full bg-zinc-950 text-white overflow-hidden flex flex-col justify-center items-center py-16 relative border-t border-white/5"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-4 tracking-wide">
          Testimonials
        </h2>

        <div className="w-full relative px-4 md:px-12">
          <Swiper
            modules={[Navigation, Autoplay, EffectCoverflow]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            loop
            centeredSlides
            slidesPerView="auto"
            spaceBetween={0}
            speed={600}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: -40,
              depth: 160,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            className="w-full overflow-visible py-8"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide
                key={idx}
                className="!w-[300px] md:!w-[460px] !h-[420px] md:!h-[520px]"
                style={{
                  opacity: activeIndex === idx ? 1 : 0.5,
                  filter: activeIndex === idx ? "blur(0px)" : "blur(4px)",
                  transform: activeIndex === idx ? "scale(1.06)" : "scale(1)",
                  zIndex: activeIndex === idx ? 30 : 1,
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div
                  className={`w-full h-full bg-zinc-900/70 border rounded-3xl overflow-hidden flex flex-col relative shadow-xl ${activeIndex === idx ? "border-red-900/20 shadow-[0_25px_50px_-12px_rgba(185,28,28,0.25)]" : "border-white/5"}`}
                >
                  <div className="w-full h-[70%] bg-black relative">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover lg:object-contain lg:p-2"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full h-[30%] p-5 md:p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-zinc-950/90 flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                      {review.name}
                    </h3>
                    <p className="text-zinc-300 text-xs md:text-sm">
                      {review.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 md:-left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-900/80 border border-white/10 rounded-full flex items-center justify-center z-40 cursor-pointer hover:bg-red-700 hover:border-red-400 transition-all backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 text-zinc-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 md:-right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-900/80 border border-white/10 rounded-full flex items-center justify-center z-40 cursor-pointer hover:bg-red-700 hover:border-red-400 transition-all backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 text-zinc-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* Counter */}
        <div className="flex justify-center items-center mt-8">
          <div className="bg-zinc-900/60 border border-white/5 backdrop-blur-md px-5 py-2 rounded-full font-mono text-xs md:text-sm font-semibold tracking-widest flex items-center gap-2 text-zinc-500 shadow-xl">
            <span className="text-red-500 font-bold">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span className="text-zinc-400">
              {String(reviews.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
