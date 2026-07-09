export default function OfficeLocation() {
  return (
    <section id="location" className="scroll-mt-20 min-h-screen w-full bg-zinc-950 text-white overflow-hidden flex flex-col justify-center items-center py-16 relative border-t border-white/5">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-800/20 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-12 tracking-wide">Our Office Location</h2>

        <div className="w-full flex justify-center px-4 md:px-12 relative z-10">
          <div className="w-full max-w-2xl bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-sm flex flex-col justify-between shadow-2xl">
            <div>
              <div className="w-full aspect-video bg-zinc-950 relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/wEIEQHbxhp8"
                  title="Bridgeway Visa Travel Corporation Main Office Location"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 text-xs font-semibold bg-red-950 text-red-400 rounded-md border border-red-900/30">
                    Head Office
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Manila Headquarters</h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4">
                  GM Floor, MC Premiere Building, Balintawak, EDSA, Quezon City, Philippines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
