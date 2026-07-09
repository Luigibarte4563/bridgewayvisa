import { useState } from 'react'

const locations = {
  manila: {
    address: 'GM Floor, MC Premiere Building, Balintawak, EDSA, Quezon City, Philippines, 1181',
    mapSrc: 'https://www.google.com/maps?q=14.65755,121.02107&output=embed&z=16',
    fbLink: 'https://www.facebook.com/people/Bridgeway-Visa-Travel-Corporation/61570211881355/',
  },
  cebu: {
    address: 'Copenhagen East Residences Building, A.C.Cortes Avenue, Cambaro, Mandaue City, Philippines, 6014',
    mapSrc: 'https://www.google.com/maps?q=10.33124,123.94411&output=embed&z=16',
    fbLink: 'https://www.facebook.com/share/16uLpWc4GJ/?mibextid=wwXIfr',
  },
}

export default function Contact() {
  const [activeLocation, setActiveLocation] = useState<'manila' | 'cebu'>('manila')
  const loc = locations[activeLocation]

  return (
    <section id="contact" className="scroll-mt-20 py-20 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-4 tracking-wide">Contact Us</h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto">Have questions? Reach out directly to our visa consultation teams.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Message Us Card */}
          <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center border border-zinc-800 border-t-4 border-t-red-700">
            <h3 className="text-3xl font-bold text-white mb-6">Message Us</h3>
            <p className="text-zinc-300 mb-8 leading-relaxed max-w-md">
              For inquiries or faster assistance, you may contact us through Messenger or fill out our
              <span className="text-red-500 font-semibold"> Free Call Assessment Form</span>.
              Our visa consultant will reach out within 24 hours.
            </p>
            <div className="w-full max-w-sm space-y-4">
              <a
                href="https://www.facebook.com/messages/t/61570211881355"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-[#0052cc] text-white py-4 px-6 rounded-xl font-bold hover:bg-[#006AFF] transition-all transform hover:-translate-y-1 shadow-lg border border-white/5"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.897 1.437 5.48 3.683 7.167V22l3.385-1.86A11.27 11.27 0 0012 20.486c5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.062 12.447l-2.545-2.715-4.965 2.715 5.463-5.8 2.607 2.715 4.903-2.715-5.463 5.8z"/></svg>
                Chat on Messenger
              </a>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-zinc-800 border-t-4 border-t-zinc-700 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-zinc-800/80 pb-4">Contact Information</h3>

            {/* Location Toggle */}
            <div className="flex space-x-2 mb-8">
              <button
                onClick={() => setActiveLocation('manila')}
                className={`flex-1 py-2 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all ${activeLocation === 'manila' ? 'bg-red-700 text-white shadow-lg' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200'}`}
              >
                Head Office (QC)
              </button>
              <button
                onClick={() => setActiveLocation('cebu')}
                className={`flex-1 py-2 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all ${activeLocation === 'cebu' ? 'bg-red-700 text-white shadow-lg' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200'}`}
              >
                Cebu Branch
              </button>
            </div>

            <div className="space-y-6 flex-1">
              {/* Address */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-700/10 p-3 rounded-lg mr-4 border border-red-900/20">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                </div>
                <div>
                  <span className="block font-bold text-zinc-400 uppercase text-xs tracking-widest mb-1">Office Address</span>
                  <p className="text-zinc-200 text-sm leading-relaxed">{loc.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-700/10 p-3 rounded-lg mr-4 border border-red-900/20">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div>
                    <span className="block font-bold text-zinc-400 uppercase text-xs tracking-widest mb-1">Phone Number</span>
                    <p className="text-zinc-200 text-sm">+63 953 460 0255</p>
                  </div>
                  <div>
                    <span className="block font-bold text-zinc-400 uppercase text-xs tracking-widest mb-1">Landline</span>
                    <p className="text-zinc-200 text-sm">(02) 8681 4497</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-700/10 p-3 rounded-lg mr-4 border border-red-900/20">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                </div>
                <div>
                  <span className="block font-bold text-zinc-400 uppercase text-xs tracking-widest mb-1">Email Address</span>
                  <p className="text-zinc-200 text-sm break-all">bridgewayvisa@gmail.com</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-700/10 p-3 rounded-lg mr-4 border border-red-900/20">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
                </div>
                <div>
                  <span className="block font-bold text-zinc-400 uppercase text-xs tracking-widest mb-1">Office Hours</span>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    <span className="text-white font-medium">Mon - Fri:</span> 8:00 AM – 5:00 PM<br />
                    <span className="text-white font-medium">Sat:</span> 8:00 AM – 12:00 NN
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex space-x-6 mt-10 pt-6 border-t border-zinc-800/80">
              <a
                href={loc.fbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white border border-zinc-700/50"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/></svg>
              </a>
              <a
                href="https://www.tiktok.com/@bridgewayvisatravelcorp_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-red-600 transition-colors text-white border border-zinc-700/50"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11v-3.5a6.37 6.37 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.37a8.16 8.16 0 004.76 1.52V7.34a4.85 4.85 0 01-1-.65z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-zinc-900 bg-zinc-900">
          <iframe
            src={loc.mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          />
        </div>
      </div>
    </section>
  )
}
