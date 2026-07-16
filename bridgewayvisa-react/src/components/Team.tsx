import { useState } from "react";
import justinePaulBautista from "../../../assets/Team/JUSTINE PAUL BAUTISTA - CHIEF EXECUTIVE OFFICER.webp";
import neilAndreyAgaza from "../../../assets/Team/NEIL ANDREY AGAZA - CHIEF OPERATING OFFICER.webp";

import nicoleGarcia from "../../../assets/Team/NICOLE GARCIA - HR OFFICER.webp";
import marjorieLuminario from "../../../assets/Team/MARJORIE LUMINARIO - ACCOUNTING OFFICER.webp";
import kristelJoyLo from "../../../assets/Team/KRISTEL JOY LO - RECRUITMENT SPECIALIST.webp";
import patriciaIsabelleDeRojas from "../../../assets/Team/PATRICIA ISABELLE DE ROJAS - MARKETING SPECIALIST.webp";

import keithAndrewPonce from "../../../assets/Team/KEITH ANDREW PONCE - VISA CASE OFFICER.webp";

import erikaAlfornon from "../../../assets/Team/ERIKA ALFORNON - VISA CONSULTANT (TEAM ACCOUNTABILITY).webp";
import melbeMaeNiez from "../../../assets/Team/MELBE MAE NIEZ -  VISA CONSULTANT (TEAM ACCOUNTABILITY).webp";
import hannahArenza from "../../../assets/Team/HANNAH ARENZA - VISA SPECIALIST (TEAM ACCOUNTABILITY).webp";
import kateYamoway from "../../../assets/Team/KATE YAMOWAY - VISA CONSULTANT (TEAM ACCOUNTABILITY).webp";

import biancaSantolorin from "../../../assets/Team/BIANCA SANTOLORIN - VISA CONSULTANT (TEAM EXCELLENCE).webp";
import juliaMarieVentayen from "../../../assets/Team/JULIA MARIE VENTAYEN - VISA CONSULTANT (TEAM EXCELLENCE).webp";
import kierstineCleoBernaldo from "../../../assets/Team/KIERSTINE CLEO BERNALDO - VISA CONSULTANT (TEAM EXCELLENCE).webp";
import jemimahSelidio from "../../../assets/Team/JEMIMAH SELIDIO - VISA SPECIALIST (TEAM EXCELLENCE).webp";

import daniellaTan from "../../../assets/Team/DANIELLA TAN - VISA CONSULTANT (TEAM INTEGRITY).webp";
import jessicaBracia from "../../../assets/Team/JESSICA BRACIA - VISA CONSULTANT (TEAM INTEGRITY).webp";
import jannileBaculi from "../../../assets/Team/JANNILE BACULI - VISA SPECIALIST (TEAM INTEGRITY).webp";
import jasperBalgos from "../../../assets/Team/JASPER BALGOS - VISA CONSULTANT (TEAM INTEGRITY).webp";

interface TeamMember {
  name: string;
  role: string;
  team?: string;
  image: string;
  isExecutive?: boolean;
}

const teamMembers: TeamMember[] = [
  // Executive Leadership
  {
    name: "Justine Paul Bautista",
    role: "Chief Executive Officer",
    image: justinePaulBautista,
    isExecutive: true,
  },
  {
    name: "Neil Andrey Agaza",
    role: "Chief Operating Officer",
    image: neilAndreyAgaza,
    isExecutive: true,
  },

  // Administration & Management
  {
    name: "Nicole Garcia",
    role: "HR Officer",
    image: nicoleGarcia,
  },
  {
    name: "Marjorie Luminario",
    role: "Accounting Officer",
    image: marjorieLuminario,
  },
  {
    name: "Kristel Joy Lo",
    role: "Recruitment Specialist",
    image: kristelJoyLo,
  },
  {
    name: "Patricia Isabelle De Rojas",
    role: "Marketing Specialist",
    image: patriciaIsabelleDeRojas,
  },

  // Visa Operations
  {
    name: "Keith Andrew Ponce",
    role: "Visa Case Officer",
    image: keithAndrewPonce,
  },

  // Team Accountability
  {
    name: "Erika Alfornon",
    role: "Visa Consultant",
    team: "Team Accountability",
    image: erikaAlfornon,
  },
  {
    name: "Melbe Mae Niez",
    role: "Visa Consultant",
    team: "Team Accountability",
    image: melbeMaeNiez,
  },
  {
    name: "Hannah Arenza",
    role: "Visa Specialist",
    team: "Team Accountability",
    image: hannahArenza,
  },
  {
    name: "Kate Yamoway",
    role: "Visa Consultant",
    team: "Team Accountability",
    image: kateYamoway,
  },

  // Team Excellence
  {
    name: "Bianca Santolorin",
    role: "Visa Consultant",
    team: "Team Excellence",
    image: biancaSantolorin,
  },
  {
    name: "Julia Marie Ventayen",
    role: "Visa Consultant",
    team: "Team Excellence",
    image: juliaMarieVentayen,
  },
  {
    name: "Kierstine Cleo Bernaldo",
    role: "Visa Consultant",
    team: "Team Excellence",
    image: kierstineCleoBernaldo,
  },
  {
    name: "Jemimah Selidio",
    role: "Visa Specialist",
    team: "Team Excellence",
    image: jemimahSelidio,
  },

  // Team Integrity
  {
    name: "Daniella Tan",
    role: "Visa Consultant",
    team: "Team Integrity",
    image: daniellaTan,
  },
  {
    name: "Jessica Bracia",
    role: "Visa Consultant",
    team: "Team Integrity",
    image: jessicaBracia,
  },
  {
    name: "Jannile Baculi",
    role: "Visa Specialist",
    team: "Team Integrity",
    image: jannileBaculi,
  },
  {
    name: "Jasper Balgos",
    role: "Visa Consultant",
    team: "Team Integrity",
    image: jasperBalgos,
  },
];

export default function Team() {
  const [lightbox, setLightbox] = useState<{
    img: string;
    name: string;
  } | null>(null);

  return (
    <>
      <section
        id="team"
        className="scroll-mt-20 min-h-screen w-full bg-zinc-950 text-white overflow-hidden flex flex-col justify-center items-center py-16 relative border-t border-white/5"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-2 tracking-wide pb-12">
            Meet Our Dedicated Team
          </h2>

          <div className="w-full max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-1">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-zinc-900/40 border border-zinc-800 hover:border-red-900/60 rounded-2xl p-4 flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer group shadow-lg"
                  onClick={() =>
                    setLightbox({ img: member.image, name: member.name })
                  }
                >
                  <div className="w-full aspect-[3/4] bg-zinc-950 rounded-xl overflow-hidden mb-4 border border-zinc-800/50">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-red-400 transition-colors line-clamp-1">
                      {member.name}
                    </h3>
                    <p
                      className={`text-xs mt-1 tracking-wide uppercase font-${member.isExecutive ? "semibold" : "medium"} ${member.isExecutive ? "text-red-500" : "text-zinc-400"}`}
                    >
                      {member.role}
                    </p>
                    {member.team && (
                      <p className="text-zinc-500 text-[11px] mt-0.5">
                        {member.team}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-zinc-950/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-md w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-6 text-zinc-400 hover:text-white text-3xl z-50"
              aria-label="Close lightbox"
            >
              &times;
            </button>
            <img
              src={lightbox.img}
              alt={lightbox.name}
              className="w-full rounded-2xl max-h-[70vh] object-contain border border-zinc-800 shadow-2xl"
            />
            <h3 className="text-xl font-bold mt-4 text-white">
              {lightbox.name}
            </h3>
          </div>
        </div>
      )}
    </>
  );
}
