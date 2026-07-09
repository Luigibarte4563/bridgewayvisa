import { useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#office', label: 'Office' },
  { href: '#services', label: 'Services' },
  { href: '#featured-programs', label: 'Featured' },
  { href: '#our-foundation', label: 'Foundation' },
  { href: '#organization-chart', label: 'Org Chart' },
  { href: '#team', label: 'Team' },
  { href: '#testimonial', label: 'Testimonials' },
  { href: '#partners', label: 'Partners' },
  { href: '#payment', label: 'Payment' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleClick = () => setMobileOpen(false)

  return (
    <nav className="fixed w-full z-50 bg-zinc-900/95 backdrop-blur-md border-b border-red-700/30" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#about" className="flex items-center gap-3 group cursor-pointer no-underline">
            <div className="relative">
              <img
                src="/assets/logo.ico"
                alt="BVTC Logo"
                className="w-11 h-11 rounded-full object-cover border-2 border-red-600 transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all group-hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white leading-tight tracking-tight text-sm sm:text-lg md:text-xl">
                Bridgeway Visa
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-red-500 font-bold hidden sm:block">
                Travel Corporation
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 bg-red-700 hover:bg-red-800 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-900/20"
            >
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleClick}
                className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-red-700/20 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleClick}
              className="block px-4 py-4 mt-4 text-center bg-red-700 text-white rounded-xl font-bold shadow-lg shadow-red-900/40"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
