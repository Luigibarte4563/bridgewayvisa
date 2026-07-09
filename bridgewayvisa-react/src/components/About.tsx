import logo from "../../../assets/logo.ico";
export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[60px] block lg:flex lg:items-center bg-zinc-950 text-white pt-24 pb-12 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="mt-12 md:mt-15 text-3xl md:text-4xl font-bold text-red-700 text-center mb-8 md:mb-12 tracking-wide">
          About
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2 relative group w-full max-w-sm lg:max-w-none mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-700 to-zinc-800 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <div className="relative">
              <img
                src={logo}
                alt="Bridgeway Visa Travel Corporation"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                Bridgeway Visa Travel Corporation
              </h3>
              <div className="flex items-center gap-3">
                <div className="h-1 w-10 bg-red-700" />
                <p className="text-red-500 font-semibold uppercase tracking-widest text-[10px] md:text-xs">
                  Professional Visa & Travel Support
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
              <p>
                Bridgeway Visa Travel Corporation is a professional visa
                processing and travel support company dedicated to assisting
                individuals and families seeking opportunities abroad. We
                provide expert guidance for visa applications to{" "}
                <b>
                  Canada, Australia, New Zealand, The United States and European
                  Countries.
                </b>
              </p>
              <p>
                Our role is to simplify complex visa processes while maintaining
                the highest standards of accuracy, transparency, and ethical
                practice. We serve as a trusted bridge between aspiration and
                opportunity helping clients move forward with clarity,
                confidence, and realistic expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {[
                "Accuracy & Transparency",
                "Ethical Practice",
                "Expert Visa Guidance",
                "Realistic Expectations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-gray-300 text-xs md:text-sm"
                >
                  <span className="text-red-600 flex-shrink-0">✓</span> {item}
                </div>
              ))}
            </div>

            <div className="pt-5 border-t border-white/10">
              <p className="text-white italic font-medium text-base md:text-lg leading-relaxed">
                "A trusted bridge between{" "}
                <span className="text-red-500">
                  aspiration and opportunity.
                </span>
                "
              </p>
              <p className="text-gray-500 mt-1 text-[10px] md:text-xs uppercase tracking-widest">
                your dream destination, achieves today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
