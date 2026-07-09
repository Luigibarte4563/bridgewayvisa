import { useState } from 'react'

const services = [
  { id: 'tourist', title: 'TOURIST VISA', content: 'Tourist visas are non-immigrant visas granted to persons who want to enter a certain country temporarily for business, leisure, or a combination of both. The duration of your stay depends on the Embassy Consul\'s approval.' },
  { id: 'student', title: 'STUDENT VISA', content: 'A student visa allows foreign students to stay in their preferred country for the duration of their studies. Students must first be enrolled in a qualified institution.' },
  { id: 'dependent', title: 'DEPENDENT VISA / OPEN WORK PERMIT', content: 'This visa allows dependents of legal residents or citizens to enter and remain in a country. The sponsor (resident) is responsible for initiating the application.' },
  { id: 'postgrad', title: 'POST GRADUATION WORK VISA', content: 'This visa is granted to international students who have completed studies at a recognized institution. It allows them to work for a set period.' },
  { id: 'residency', title: 'RESIDENCY & CITIZENSHIP', content: 'Our Residency and Citizenship program offers a step-by-step solution for individuals to obtain legal residency and eventually full citizenship.' },
  { id: 'digital-nomad', title: 'DIGITAL NOMAD VISA', content: 'A Digital Nomad Visa is a type of visa that allows Filipinos to live in another country while working remotely for clients or companies based outside that country. To qualify, you must have a valid Philippine passport, a stable online job or freelance work, and a consistent monthly income.' },
]

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="services" className="scroll-mt-20 min-h-screen flex items-center bg-zinc-950 py-20 text-white border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-12 tracking-wide">Services We Offer</h2>

        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="border border-zinc-900 rounded-xl overflow-hidden shadow-xl">
              <button
                type="button"
                onClick={() => toggle(service.id)}
                className="w-full flex justify-between items-center px-6 py-5 bg-zinc-900 hover:bg-zinc-800 transition font-semibold text-white text-lg cursor-pointer border-l-4 border-l-red-700"
              >
                <span>{service.title}</span>
                <svg
                  className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${openId === service.id ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="accordion-content bg-zinc-900/40 text-zinc-300 transition-all duration-300 overflow-hidden"
                style={{ maxHeight: openId === service.id ? '200px' : '0px' }}
              >
                <div className="px-6 py-8 border-t border-zinc-900">
                  <p className="leading-relaxed text-sm">{service.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
