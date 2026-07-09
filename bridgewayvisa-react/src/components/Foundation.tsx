import { useState } from 'react'

const foundationItems = [
  {
    id: 'mission',
    title: 'OUR MISSION',
    content: (
      <p className="leading-relaxed text-sm">
        To deliver <span className="text-white font-medium">ethical, accurate, and professional</span> visa processing services that empower individuals and families to pursue global opportunities with confidence and trust.
      </p>
    ),
  },
  {
    id: 'vision',
    title: 'OUR VISION',
    content: (
      <p className="leading-relaxed text-sm">
        To be a <span className="text-white font-medium">globally respected</span> visa and travel corporation recognized for integrity, excellence, and meaningful impact connecting people to opportunities beyond borders.
      </p>
    ),
  },
  {
    id: 'values',
    title: 'OUR CORE VALUES',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <h4 className="text-red-700 font-bold mb-1">Integrity</h4>
          <p className="text-sm text-zinc-400">We act with honesty, transparency, and ethical responsibility in every decision and interaction.</p>
        </div>
        <div>
          <h4 className="text-red-700 font-bold mb-1">Excellence</h4>
          <p className="text-sm text-zinc-400">We commit to accuracy, continuous learning, and consistently high standards of professional services.</p>
        </div>
        <div>
          <h4 className="text-red-700 font-bold mb-1">Client-Centered Responsibility</h4>
          <p className="text-sm text-zinc-400">We respect the trust our clients place in us and treat every application with care, diligence, and accountability.</p>
        </div>
        <div>
          <h4 className="text-red-700 font-bold mb-1">Teamwork and Respect</h4>
          <p className="text-sm text-zinc-400">We foster a professional environment built on collaboration, mutual respect, and shared success.</p>
        </div>
        <div>
          <h4 className="text-red-700 font-bold mb-1">Accountability</h4>
          <p className="text-sm text-zinc-400">We take ownership of our work, uphold our commitments, and address challenges with responsibility and integrity.</p>
        </div>
        <div>
          <h4 className="text-red-700 font-bold mb-1">Global Perspective</h4>
          <p className="text-sm text-zinc-400">We value diversity, cultural understanding, and international awareness in the work we do.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'compliance',
    title: 'COMMITMENT AND COMPLIANCE',
    content: (
      <div className="space-y-4">
        <p className="leading-relaxed text-sm">
          At Bridgeway Visa Travel Corporation, we uphold the highest standards of professionalism, transparency, and regulatory compliance.
        </p>
        <ul className="list-none space-y-2 text-zinc-400 text-sm">
          <li className="flex items-start"><span className="mr-2 text-red-700 font-bold">•</span> Legally registered with SEC, BIR, LOCATION CLEARANCE, and MAYOR'S PERMIT (2026).</li>
          <li className="flex items-start"><span className="mr-2 text-red-700 font-bold">•</span> Upholds ethical standards and consumer protection laws.</li>
          <li className="flex items-start"><span className="mr-2 text-red-700 font-bold">•</span> Continuously trains staff for quality visa and travel service.</li>
          <li className="flex items-start"><span className="mr-2 text-red-700 font-bold">•</span> Provides accurate, transparent, and responsive support.</li>
        </ul>
      </div>
    ),
  },
]

export default function Foundation() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="our-foundation" className="scroll-mt-20 min-h-screen w-full bg-zinc-950 text-white flex flex-col justify-center py-16 md:py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-12 tracking-wide">Our Foundation</h2>

        <div className="space-y-4">
          {foundationItems.map((item) => (
            <div key={item.id} className="border border-zinc-900 rounded-xl overflow-hidden shadow-xl">
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="w-full flex justify-between items-center px-6 py-5 bg-zinc-900 hover:bg-zinc-800 transition font-semibold text-white text-lg cursor-pointer border-l-4 border-l-red-700"
              >
                <span>{item.title}</span>
                <svg
                  className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="bg-zinc-900/40 text-zinc-300 transition-all duration-300 overflow-hidden"
                style={{ maxHeight: openId === item.id ? '500px' : '0px' }}
              >
                <div className="px-6 py-8 border-t border-zinc-900">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
