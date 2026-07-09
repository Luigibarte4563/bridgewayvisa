import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import anicaAguiran from "../../../assets/Testimonials/ANICA AGUIRAN.webp";
import behaganAdela from "../../../assets/Testimonials/BEHAGAN ADELA.webp";
import behmanMantilla from "../../../assets/Testimonials/BEHMAN MANTILLA.webp";
import bernabeMantilla from "../../../assets/Testimonials/BERNABE MANTILLA.webp";
import carlosAndAguiranFamily from "../../../assets/Testimonials/CARLOS AND AGUIRAN FAMILY.webp";
import erlindaMantilla from "../../../assets/Testimonials/ERLINDA MANTILLA.webp";
import gemmilexCarlos from "../../../assets/Testimonials/GEMMILEX CARLOS.webp";
import hanzenVelarde from "../../../assets/Testimonials/HANZEN VELARDE APPROVED VISIT VISA.webp";
import jellicaSanJose from "../../../assets/Testimonials/JELLICA SAN JOSE.webp";
import kaeslyNicole from "../../../assets/Testimonials/KAESLY NICOLE.webp";
import mantillaFamily from "../../../assets/Testimonials/MANTILLA FAMILY.webp";
import mrAguiran from "../../../assets/Testimonials/MR. AGUIRAN.webp";
import msPaguioMarticio from "../../../assets/Testimonials/MS. PAGUIO MARTICIO.webp";
import normanCordon from "../../../assets/Testimonials/NORMAN CORDON US VISA.webp";
import ronaldAguiran from "../../../assets/Testimonials/RONALD AGUIRAN.webp";
import rosieBejer from "../../../assets/Testimonials/ROSIE BEJER US VISA.webp";
import santiagoFamily1 from "../../../assets/Testimonials/SANTIAGO FAMILY (MR. ALVIN SANTIAGO).webp";
import santiagoFamily2 from "../../../assets/Testimonials/SANTIAGO FAMILY 2.webp";
import santiagoFamily3 from "../../../assets/Testimonials/SANTIAGO FAMILY 3.webp";
import santiagoFamily4 from "../../../assets/Testimonials/SANTIAGO FAMILY4.webp";

const reviews = [
  {
    image: anicaAguiran,
    name: "Anica Aguiran",
    description: "International Journey Success",
  },
  {
    image: behaganAdela,
    name: "Behagan Adela",
    description: "Visa Approved Milestone",
  },
  {
    image: behmanMantilla,
    name: "Behman Mantilla",
    description: "Career Advancement Abroad",
  },
  {
    image: bernabeMantilla,
    name: "Bernabe Mantilla",
    description: "Residency Pathway Success",
  },
  {
    image: carlosAndAguiranFamily,
    name: "Carlos & Aguiran Family",
    description: "Family Relocation Accomplished",
  },
  {
    image: erlindaMantilla,
    name: "Erlinda Mantilla",
    description: "Successful Program Transition",
  },
  {
    image: gemmilexCarlos,
    name: "Gemmilex Carlos",
    description: "Gained Invaluable Exposure",
  },
  {
    image: hanzenVelarde,
    name: "Hanzen Velarde",
    description: "Approved Visit Visa",
  },
  {
    image: jellicaSanJose,
    name: "Jellica San Jose",
    description: "Student Experience Success",
  },
  {
    image: kaeslyNicole,
    name: "Kaesly Nicole",
    description: "International Milestone Journey",
  },
  {
    image: mantillaFamily,
    name: "Mantilla Family",
    description: "Secured Long-term Family Status",
  },
  {
    image: mrAguiran,
    name: "Mr. Aguiran",
    description: "Accomplished Global Transition",
  },
  {
    image: msPaguioMarticio,
    name: "Ms. Paguio Marticio",
    description: "Professional Pathway Achieved",
  },
  {
    image: normanCordon,
    name: "Norman Cordon",
    description: "Approved US Visa Success",
  },
  {
    image: ronaldAguiran,
    name: "Ronald Aguiran",
    description: "Skills Migration Success Story",
  },
  {
    image: rosieBejer,
    name: "Rosie Bejer",
    description: "Approved US Visa Accomplished",
  },
  {
    image: santiagoFamily1,
    name: "Santiago Family (Mr. Alvin)",
    description: "Relocation & Residency Success",
  },
  {
    image: santiagoFamily2,
    name: "Santiago Family Part II",
    description: "Global Career Development",
  },
  {
    image: santiagoFamily3,
    name: "Santiago Family Part III",
    description: "New Horizons Secured",
  },
  {
    image: santiagoFamily4,
    name: "Santiago Family Part IV",
    description: "Complete Family Relocation Journey",
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
