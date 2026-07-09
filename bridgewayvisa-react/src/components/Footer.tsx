export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <img src="/assets/logo.ico" alt="BVTC Logo" className="w-12 h-12 rounded-full object-cover border-2 border-red-600" />
              <span className="ml-3 text-xl font-bold text-white tracking-tight">Bridgeway Visa</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-zinc-400">
              Connecting the world's best talent with exceptional opportunities. Your trusted partner in global mobility and visa consulting.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Bridgeway-Visa-Travel-Corporation/61570211881355/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-blue-600 transition-colors text-white border border-zinc-800"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/></svg>
              </a>
              <a
                href="https://www.tiktok.com/@bridgewayvisatravelcorp_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 transition-colors text-white border border-zinc-800"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11v-3.5a6.37 6.37 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.37a8.16 8.16 0 004.76 1.52V7.34a4.85 4.85 0 01-1-.65z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#about" className="hover:text-red-600 transition-colors">About Us</a></li>
              <li><a href="#location" className="hover:text-red-600 transition-colors">Office Location</a></li>
              <li><a href="#services" className="hover:text-red-600 transition-colors">Our Services</a></li>
              <li><a href="#featured-programs" className="hover:text-red-600 transition-colors">Featured Programs</a></li>
              <li><a href="#our-foundation" className="hover:text-red-600 transition-colors">Our Foundation</a></li>
              <li><a href="#organization-chart" className="hover:text-red-600 transition-colors">Organization Chart</a></li>
              <li><a href="#testimonial" className="hover:text-red-600 transition-colors">Testimonials</a></li>
              <li><a href="#partners" className="hover:text-red-600 transition-colors">Global Partners</a></li>
              <li><a href="#payment" className="hover:text-red-600 transition-colors">Payment Channels</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Visa Services */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">Visa Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-red-500 transition-colors">Student & Tourist Visa</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Skills Migration</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Dependent / Open Work Permit</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Post-Graduation Permits</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Citizenship & Residency</a></li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">Ready to Start?</h4>
            <p className="text-sm mb-4 text-zinc-400">Book your free assessment today and take the first step toward your dream destination.</p>
            <a
              href="https://www.facebook.com/messages/t/61570211881355"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              Free Assessment
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800/50 text-center">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Bridgeway Visa Travel Corporation. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
