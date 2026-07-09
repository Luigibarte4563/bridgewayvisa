import { useRef, useEffect } from 'react'

const programs = [
  { image: '/assets/featuredPrograms/continuingCareAssisstant.jpg', title: 'Continuing Care Assistant', description: 'Start your career in healthcare and make a difference.' },
  { image: '/assets/featuredPrograms/studyInGermany.jpg', title: 'Free Tuition in Germany', description: 'Study and work in Germany without the burden of tuition fees.' },
  { image: '/assets/featuredPrograms/studyInAustrillia.jpg', title: 'Study in Australia', description: 'Unlock opportunities at top Australian universities and gain global exposure.' },
  { image: '/assets/featuredPrograms/longtermResidencyPathwayNewZealand.jpg', title: 'New Zealand Residency', description: 'Your long-term route to residency in the beautiful landscapes of NZ.' },
  { image: '/assets/featuredPrograms/TravelToSpain.jpg', title: 'Travel to Spain', description: 'Experience the vibrant culture, history, and beauty of Spain.' },
  { image: '/assets/featuredPrograms/generalSkillMigrantVisa.jpg', title: 'Skills Migration', description: 'Take the next step in your career abroad with skilled migration programs.' },
  { image: '/assets/featuredPrograms/StudyInUnitedKingdom.jpg', title: 'Study in the UK', description: 'Explore educational opportunities in top universities across the UK.' },
  { image: '/assets/featuredPrograms/studyAbroad.jpg', title: 'Study Abroad Program', description: 'Open the door to global education experiences around the world.' },
]

export default function FeaturedPrograms() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const currentTranslate = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      container.classList.add('is-dragging')
      const style = window.getComputedStyle(container)
      const matrix = new WebKitCSSMatrix(style.transform)
      const currentX = matrix.m41
      container.style.animation = 'none'
      container.style.transform = `translateX(${currentX}px)`
      startX.current = e.pageX
      currentTranslate.current = currentX
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      const walk = e.pageX - startX.current
      container.style.transform = `translateX(${currentTranslate.current + walk}px)`
    }

    const onMouseUp = () => {
      if (!isDragging.current) return
      isDragging.current = false
      container.classList.remove('is-dragging')

      const style = window.getComputedStyle(container)
      const matrix = new WebKitCSSMatrix(style.transform)
      const finalX = matrix.m41
      const setWidth = container.scrollWidth / 3
      const speed = 30

      let progress = Math.abs(finalX % setWidth) / setWidth
      if (finalX > 0) progress = 1 - progress

      container.style.animation = `scroll ${speed}s linear infinite`
      container.style.animationDelay = `-${progress * speed}s`
      container.style.transform = ''
    }

    container.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)

    return () => {
      container.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  // Triple the content for infinite scroll
  const tripled = [...programs, ...programs, ...programs]

  return (
    <section id="featured-programs" className="scroll-mt-20 min-h-screen w-full bg-zinc-950 text-white overflow-hidden flex flex-col justify-center items-center py-16 md:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-12 tracking-wide">Featured Programs</h2>

        <div className="relative group overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

          <div
            ref={containerRef}
            className="animate-infinite-scroll flex gap-4 md:gap-8 py-4"
          >
            {tripled.map((program, idx) => (
              <div
                key={idx}
                className="relative bg-zinc-900 rounded-2xl overflow-hidden w-[300px] md:w-[420px] h-[380px] md:h-[450px] flex-shrink-0 border border-white/5 group/card transition-all duration-500"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition duration-700 group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-5 md:p-8 translate-y-[65%] group-hover/card:translate-y-0 transition-transform duration-500">
                  <h4 className="font-bold text-base md:text-xl text-white mb-2 md:mb-3">{program.title}</h4>
                  <p className="text-gray-300 text-[10px] md:text-sm mb-4 md:mb-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 delay-100">
                    {program.description}
                  </p>
                  <a
                    href="https://www.facebook.com/messages/t/61570211881355"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-700 hover:bg-red-600 text-white text-center py-2 md:py-3 rounded-xl font-bold text-sm md:text-base transition-colors"
                  >
                    Message us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
