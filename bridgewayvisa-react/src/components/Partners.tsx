import { useRef, useEffect } from "react";
import skylineInternationalCollege from "../../../assets/ourPartners/skylineInternationalCollege.webp";
import timesEducation from "../../../assets/ourPartners/timesEducation.webp";
import goozingImmigration from "../../../assets/ourPartners/GoozingMigration.webp";
import canberraCollege from "../../../assets/ourPartners/canberraCollegeOfManagement&Technology.webp";
import adventus from "../../../assets/ourPartners/Adventus.io.webp";
import internationalBusinessUniversity from "../../../assets/ourPartners/InternationalBusinessUniversity.webp";
import geebee from "../../../assets/ourPartners/GEEBEE.webp";
import trentGlobalCollege from "../../../assets/ourPartners/TRENT.webp";
import flemingCollege from "../../../assets/ourPartners/FLEEMING.webp";

const partners = [
  {
    logo: skylineInternationalCollege,
    name: "Skyline International College",
    tagline: "Career-Focused Courses",
    features: [
      "Affordable Tuition",
      "Online & On-Campus Options",
      "Official Accreditation",
      "Work Opportunities",
    ],
    quote: "Skyline blends practical education with affordability.",
  },
  {
    logo: timesEducation,
    name: "Times Education",
    tagline: "Practical, career-oriented learning",
    features: [
      "Practical Training",
      "Budget-Friendly Tuition",
      "ASQA & CRICOS Accredited",
      "Industry-Aligned Programs",
    ],
    quote: "Delivers skills-focused learning with flexibility.",
  },
  {
    logo: goozingImmigration,
    name: "Goozing Immigration",
    tagline: "Personalized visa assistance",
    features: [
      "Tailored Visa Assistance",
      "Education Partnerships",
      "Responsive Support",
      "Migration Guidance",
    ],
    quote: "Guiding clients with personalized immigration solutions.",
  },
  {
    logo: canberraCollege,
    name: "Canberra College (CCMT)",
    tagline: "Business and tech disciplines",
    features: [
      "Specialized Programs",
      "Local Accessibility",
      "Hands-On Learning",
      "Community Engagement",
    ],
    quote: "Vocational learning rooted in real-world experience.",
  },
  {
    logo: adventus,
    name: "Adventus",
    tagline: "Global provider of ICT services",
    features: [
      "24/7 ICT support",
      "Simplifies admissions",
      "Strategic industry partnerships",
      "Employee perks & healthcare",
    ],
    quote: "Empowers institutions and students through innovation.",
  },
  {
    logo: internationalBusinessUniversity,
    name: "International Business University",
    tagline: "Innovative academic pathways",
    features: [
      "Digital transformation focus",
      "Real-world application",
      "Modern resources",
      "Career-readiness programs",
    ],
    quote: "Helping students grow via future-ready education.",
  },
  {
    logo: geebee,
    name: "Geebee Education",
    tagline: "900+ international universities",
    features: [],
    description: "Opportunities in the USA, Canada, Australia, UK, and Europe.",
    quote: "Supporting students in exploring global goals.",
  },
  {
    logo: trentGlobalCollege,
    name: "TRENT Global College",
    tagline: "Practical Singapore-based programs",
    features: [],
    description:
      "Short course durations with paid internships and hands-on experience.",
    quote: "Combines education with real-world Singapore experience.",
  },
  {
    logo: flemingCollege,
    name: "Fleming College",
    tagline: "High-demand programs in Canada",
    features: [],
    description: "Nursing, AI, and Caregiving with industry placements.",
    quote: "Preparing graduates for successful careers in Canada.",
  },
];

export default function Partners() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onStart = (e: MouseEvent | TouchEvent) => {
      isDragging.current = true;
      track.classList.add("partner-is-dragging");
      const style = window.getComputedStyle(track);
      const matrix = new WebKitCSSMatrix(style.transform);
      const x = matrix.m41;
      track.style.animation = "none";
      track.style.transform = `translateX(${x}px)`;
      startX.current = "touches" in e ? e.touches[0].pageX : e.pageX;
      currentX.current = x;
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      const x = "touches" in e ? e.touches[0].pageX : e.pageX;
      const walk = x - startX.current;
      track.style.transform = `translateX(${currentX.current + walk}px)`;
    };

    const onEnd = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      track.classList.remove("partner-is-dragging");

      const style = window.getComputedStyle(track);
      const matrix = new WebKitCSSMatrix(style.transform);
      const finalX = matrix.m41;
      const setWidth = track.scrollWidth / 3;
      const speed = 40;

      let progress = Math.abs(finalX % setWidth) / setWidth;
      if (finalX > 0) progress = 1 - progress;

      track.style.animation = `partner-inf-scroll ${speed}s linear infinite`;
      track.style.animationDelay = `-${progress * speed}s`;
      track.style.transform = "";
    };

    track.addEventListener("mousedown", onStart as EventListener);
    window.addEventListener("mousemove", onMove as EventListener);
    window.addEventListener("mouseup", onEnd);
    track.addEventListener("touchstart", onStart as EventListener, {
      passive: true,
    });
    window.addEventListener("touchmove", onMove as EventListener, {
      passive: false,
    });
    window.addEventListener("touchend", onEnd);

    return () => {
      track.removeEventListener("mousedown", onStart as EventListener);
      window.removeEventListener("mousemove", onMove as EventListener);
      window.removeEventListener("mouseup", onEnd);
      track.removeEventListener("touchstart", onStart as EventListener);
      window.removeEventListener("touchmove", onMove as EventListener);
      window.removeEventListener("touchend", onEnd);
    };
  }, []);

  const tripled = [...partners, ...partners, ...partners];

  return (
    <section
      id="partners"
      className="scroll-mt-20 min-h-screen w-full bg-zinc-950 py-16 md:py-24 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-12 tracking-wide">
          Our Partners
        </h2>

        <div
          className="overflow-hidden w-full relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div ref={trackRef} className="partners-scroll-container gap-8">
            {tripled.map((partner, idx) => (
              <div
                key={idx}
                className="partner-card bg-black p-8 rounded-xl shadow-lg border border-white transition-transform duration-300 hover:scale-105 hover:border-red-300"
              >
                <div className="flex-grow">
                  <div className="w-40 h-20 mx-auto mb-4 bg-white rounded-md flex items-center justify-center overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {partner.name}
                  </h4>
                  <p className="text-gray-300 text-sm italic mb-2">
                    {partner.tagline}
                  </p>
                  {partner.features.length > 0 && (
                    <ul className="text-left text-gray-300 text-sm list-disc list-inside space-y-1">
                      {partner.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  )}
                  {partner.description && (
                    <p className="text-gray-300 text-sm mb-2">
                      {partner.description}
                    </p>
                  )}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <p className="text-gray-400 italic text-sm">
                    {partner.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
