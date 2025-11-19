import React from "react";

const services = [
  // {
  //   title: "Real Estate Law",
  //   description:
  //     "Comprehensive legal services for property transactions, disputes, zoning issues, and real estate development matters.",
  //   // courthouse pillars
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       className="h-12 w-12"
  //       strokeWidth="1.5"
  //     >
  //       <path d="M3 9h18M5 9V7l7-4 7 4v2M6 9v9M10 9v9M14 9v9M18 9v9M3 20h18" />
  //     </svg>
  //   ),
  // },
  // {
  //   title: "Criminal Lawyer",
  //   description:
  //     "Expert defense representation for criminal cases, ensuring your rights are protected throughout the legal process.",
  //   // badge
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       className="h-12 w-12"
  //       strokeWidth="1.5"
  //     >
  //       <path d="M12 3l2.09 4.23L19 8l-3.5 3.41L16.18 16 12 13.9 7.82 16l.68-4.59L5 8l4.91-.77L12 3z" />
  //       <circle cx="12" cy="9.5" r="2" />
  //     </svg>
  //   ),
  // },
  {
    title: "NCLT & IBBI Advisory",
    description:
      "From NCLT litigation to IBBI regulatory matters, we help businesses manage every step with clarity and confidence",
    // gavel
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-12 w-12"
        strokeWidth="1.5"
      >
        <path d="M2 21h12M7 15l5-5M4 12l5-5m6 1l-5 5m7-3l-3-3" />
      </svg>
    ),
  },
  {
    title: "Corporate Law",
    description:
      "We assist businesses with acquisitions and corporate governance matters through strategic legal counsel tailored to their corporate needs.",
    // briefcase
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-12 w-12"
        strokeWidth="1.5"
      >
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Financial Settlements",
    description:
      "We assist companies through insolvency proceedings — a legal process that resolves unpaid debts by reorganising or liquidating assets with clarity and compliance.",
    // ledger/book
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-12 w-12"
        strokeWidth="1.5"
      >
        <path d="M5 3h10a4 4 0 014 4v13H7a2 2 0 01-2-2V3z" />
        <path d="M7 7h8M7 11h6M7 15h8" />
      </svg>
    ),
  },
  // {
  //   title: "Digital Media Law",
  //   description:
  //     "Legal guidance for intellectual property, copyright, trademark protection, and digital content licensing issues.",
  //   // network
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       className="h-12 w-12"
  //       strokeWidth="1.5"
  //     >
  //       <circle cx="12" cy="7" r="3" />
  //       <circle cx="6" cy="17" r="3" />
  //       <circle cx="18" cy="17" r="3" />
  //       <path d="M9 9.5L7.5 14M15 9.5l1.5 4.5M9 17h6" />
  //     </svg>
  //   ),
  // },
];

export default function LegalPracticeAreas() {
  return (
    <section className="relative w-full py-20 md:py-24 lg:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1887&auto=format&fit=crop)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#0b0a0a]/90" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="text-center">
          <div className="text-[12px] tracking-[0.25em] text-gold/90 italic mb-2">OUR SERVICES</div>
          <h2 className="font-serif font-extrabold text-white text-[36px] md:text-[44px] lg:text-[52px] leading-tight">
            Legal Practice Areas
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative flex flex-col items-center text-center p-8 rounded-xl bg-white/0 border border-white/5 hover:border-gold/30 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_35px_-10px_rgba(200,157,91,0.35)]"
            >
              <div className="text-gold">
                {s.icon}
              </div>
              <h3 className="mt-5 font-serif text-white text-[22px] md:text-[24px] font-semibold">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/60 max-w-xs">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


