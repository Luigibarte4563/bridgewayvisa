import { useState, useRef, useEffect } from 'react'

export default function OrgChart() {
  const [modalOpen, setModalOpen] = useState(false)
  const [scale, setScale] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const viewportRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startPos = useRef({ x: 0, y: 0 })
  const startPan = useRef({ x: 0, y: 0 })

  const minScale = 0.4
  const maxScale = 6.0

  const openModal = () => {
    setModalOpen(true)
    setScale(1)
    setPan({ x: 0, y: 0 })
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = ''
  }

  const adjustZoom = (amount: number) => {
    setScale((s) => Math.min(Math.max(s + amount, minScale), maxScale))
  }

  const resetZoom = () => {
    setScale(1)
    setPan({ x: 0, y: 0 })
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return
    isDragging.current = true
    startPos.current = { x: e.clientX, y: e.clientY }
    startPan.current = { ...pan }
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return
    const dx = e.clientX - startPos.current.x
    const dy = e.clientY - startPos.current.y
    setPan({ x: startPan.current.x + dx, y: startPan.current.y + dy })
  }

  const handlePointerUp = () => {
    isDragging.current = false
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY < 0 ? 1 : -1
    setScale((s) => Math.min(Math.max(s + delta * 0.12, minScale), maxScale))
  }

  return (
    <>
      <section id="organization-chart" className="scroll-mt-20 min-h-screen w-full bg-zinc-950 text-white overflow-hidden flex flex-col justify-center items-center py-16 relative border-t border-white/5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-12 tracking-wide">Organization Chart</h2>

          <div
            className="w-full bg-zinc-900/40 border border-zinc-800/80 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm p-4 group relative cursor-pointer"
            onClick={openModal}
          >
            <div className="w-full aspect-[2/1] relative flex items-center justify-center overflow-hidden rounded-lg bg-zinc-950">
              <img
                src="/assets/Team/ORGANIZATION CHART FINAL VERSION.webp"
                alt="Organization Chart"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-red-700 hover:bg-red-600 text-white font-medium px-5 py-2.5 rounded-lg shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.601zM10.5 7.5v6m3-3h-6" />
                  </svg>
                  View Full Picture
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4 text-xs text-zinc-500">
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>Click graphic canvas to expand interactive workspace</span>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-md flex flex-col p-4 md:p-8 select-none" role="dialog" aria-modal="true">
          <div className="w-full flex justify-between items-center mb-4 max-w-7xl mx-auto px-4">
            <div>
              <h3 className="text-lg font-bold text-white">Organization Chart</h3>
              <p className="text-xs text-zinc-400">Drag to pan / Scroll to zoom</p>
            </div>
            <button
              onClick={closeModal}
              className="bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 p-2 rounded-lg transition-colors z-50"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div
            ref={viewportRef}
            className="flex-1 w-full max-w-7xl mx-auto border border-zinc-800/60 bg-zinc-950 rounded-xl overflow-hidden relative cursor-grab active:cursor-grabbing touch-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onWheel={handleWheel}
          >
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 bg-zinc-900/90 border border-zinc-800 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-3 shadow-2xl pointer-events-auto">
              <button onClick={() => adjustZoom(-0.25)} className="p-1.5 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-colors" title="Zoom Out">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg>
              </button>
              <span className="text-xs font-mono font-bold text-zinc-300 min-w-[50px] text-center">{Math.round(scale * 100)}%</span>
              <button onClick={() => adjustZoom(0.25)} className="p-1.5 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-colors" title="Zoom In">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </button>
              <div className="w-px h-4 bg-zinc-800 mx-0.5" />
              <button onClick={resetZoom} className="text-xs font-medium text-zinc-400 hover:text-red-500 px-2 py-1 hover:bg-zinc-800/50 rounded-md transition-colors">Reset</button>
            </div>

            <div
              className="w-full h-full absolute inset-0 flex items-center justify-center will-change-transform origin-center"
              style={{ transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${scale})` }}
            >
              <div className="w-[90vw] max-w-[1200px] aspect-[2/1] relative">
                <img
                  src="/assets/Team/ORGANIZATION CHART FINAL VERSION.webp"
                  alt="Organization Chart High Res View"
                  className="w-full h-full object-contain pointer-events-none select-none"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
