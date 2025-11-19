import React from "react";

const members = [
  {
    name: "DAVID MARTINEZ",
    role: "Personal Injury Attorney",
    img: "https://static.vecteezy.com/system/resources/previews/024/587/953/original/businessman-png.png",
  },
  {
    name: "SARAH JOHNSON",
    role: "Corporate Law Specialist",
    img: "https://static.vecteezy.com/system/resources/previews/024/588/032/original/portrait-of-businessman-png.png",
  },
  {
    name: "JAMES ANDERSON",
    role: "Insolvency & Financial Law",
    img: "https://static.vecteezy.com/system/resources/previews/026/650/023/original/young-african-american-businessman-isolated-png.png",
  },
];

export default function TeamSection() {
  return (
    <section className="relative w-full bg-white py-20 md:py-24 lg:py-28 text-[#121212]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <div className="text-[12px] tracking-[0.25em] text-gold/90 mb-2">OUR TEAM</div>
            <h2 className="font-serif font-extrabold text-[34px] leading-[1.15] md:text-[44px] lg:text-[52px] text-[#0c0c0c]">
              Most Successful Expert & Attorney works with our Team
            </h2>
          </div>
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 text-[14px] leading-7 text-[#3a3a3a]">
            <p>
              Our team consists of highly qualified attorneys with extensive experience across multiple legal practice areas, dedicated to delivering exceptional results for our clients.
            </p>
            <div>
              <p>
                Each member brings unique expertise and a proven track record of success, working collaboratively to provide comprehensive legal solutions tailored to your specific needs.
              </p>
              <a href="#" className="inline-block mt-6 italic text-[15px] text-[#0c0c0c] hover:text-gold transition-colors">
                View All Our Team
              </a>
            </div>
          </div>
        </div>

        {/* Team Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((m) => (
            <div key={m.name} className="group">
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-sm">
                {/* Background changes on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a140e] to-[#2b2119] transition-colors duration-300 group-hover:from-[#20160b] group-hover:to-[#a87642]" />
                {/* PNG person */}
                <img
                  src={m.img}
                  alt={m.name}
                  className="relative z-[1] h-full w-full object-contain object-bottom select-none pointer-events-none"
                />
              </div>
              {/* Name plate */}
              <div className="-mt-6 mx-4 rounded-sm bg-white shadow-sm text-center py-6 relative z-[2]">
                <div className="font-serif tracking-wider text-[22px] md:text-[24px] text-[#0b0b0b]">{m.name}</div>
                <div className="mt-1 text-[#5a5a5a] text-sm">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


