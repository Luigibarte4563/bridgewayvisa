import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonialVideos = [
  { videoId: 'Rz5pXuiAylI', title: 'Global Pathway Success', description: 'Achieved international residency milestones smoothly.' },
  { videoId: 'obXcRl02mVI', title: 'Germany Free Tuition Journey', description: 'Transitioned to European student and professional life.' },
  { videoId: '8IkvNpzb5n8', title: 'Australia Student Experience', description: 'Gained invaluable global exposure at top universities.' },
  { videoId: 'vjacYSnoXJY', title: 'Skills Migration Accomplished', description: 'Secured long-term visa status abroad via skilled work.' },
  { videoId: 'otAK1u4xzQc', title: 'Success Story Five', description: 'Custom description for your new international journey testimonial.' },
  { videoId: 'QVWR7USvTKA', title: 'Success Story Six', description: 'Custom description for your new international journey testimonial.' },
]

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonial" className="scroll-mt-20 min-h-screen w-full bg-zinc-950 text-white overflow-hidden flex flex-col justify-center items-center py-16 relative border-t border-white/5">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-4 tracking-wide">Testimonials</h2>

        <div className="w-full relative px-4 md:px-12">
          <Swiper
            modules={[Navigation, Pagination]}
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            loop
            centeredSlides
            slidesPerView="auto"
            spaceBetween={0}
            speed={500}
            className="w-full overflow-visible py-8"
          >
            {testimonialVideos.map((video, idx) => (
              <SwiperSlide
                key={video.videoId}
                className="!w-[300px] md:!w-[460px] !h-[420px] md:!h-[520px] transition-all duration-500"
                style={{
                  opacity: activeIndex === idx ? 1 : 0.5,
                  filter: activeIndex === idx ? 'blur(0px)' : 'blur(4px)',
                  transform: activeIndex === idx ? 'scale(1.06)' : 'scale(1)',
                  zIndex: activeIndex === idx ? 30 : 1,
                }}
              >
                <div className={`w-full h-full bg-zinc-900/70 border rounded-3xl overflow-hidden flex flex-col relative shadow-xl ${activeIndex === idx ? 'border-red-900/20 shadow-[0_25px_50px_-12px_rgba(185,28,28,0.25)]' : 'border-white/5'}`}>
                  <div className="w-full h-[70%] bg-black relative">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="w-full h-[30%] p-5 md:p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-zinc-950/90 flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">{video.title}</h3>
                    <p className="text-zinc-300 text-xs md:text-sm">{video.description}</p>
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-zinc-400 hover:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 md:-right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-900/80 border border-white/10 rounded-full flex items-center justify-center z-40 cursor-pointer hover:bg-red-700 hover:border-red-400 transition-all backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-zinc-400 hover:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Pagination */}
        <div className="bg-zinc-900/60 border border-white/5 backdrop-blur-md px-5 py-2 rounded-full font-mono text-sm font-semibold tracking-widest flex items-center gap-2 text-zinc-500 shadow-xl mt-8">
          <span className="text-red-500 font-bold">{String(activeIndex + 1).padStart(2, '0')}</span>
          <span>/</span>
          <span className="text-zinc-400">{String(testimonialVideos.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
}
