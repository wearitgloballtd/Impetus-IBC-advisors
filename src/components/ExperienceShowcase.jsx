import React, { useEffect, useRef, useState } from "react";

function useCountUp(target, durationMs = 1400, startWhenInView = true) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    let observer;
    let started = !startWhenInView;
    const start = () => {
      if (started) return;
      started = true;
      const startTs = performance.now();
      const animate = (ts) => {
        const progress = Math.min(1, (ts - startTs) / durationMs);
        setValue(Math.floor(progress * target));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };
    if (startWhenInView) {
      observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && start()),
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
    } else {
      start();
    }
    return () => observer && observer.disconnect();
  }, [target, durationMs, startWhenInView]);
  return { value, ref };
}

const lawCards = [
  {
    title: "Liquidation & Compliance Services",
    subtitle: "Compliance Solutions",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Corporate Legal Advisory",
    subtitle: "Company Law & Compliance Advisory",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Insolvency Resolution Services",
    subtitle: "Corporate Insolvency Resolution Process (CIRP) support",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Documentation & Reporting",
    subtitle: "Legal Drafting for Corporate Matters",
    img: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function ExperienceShowcase() {
  const years = useCountUp(10, 1200);
  const clients = useCountUp(2456, 1400);
  const awards = useCountUp(25, 1200);

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Background image behind stats */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1558980664-10eaaffc9de1?q=80&w=2000&auto=format&fit=crop)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#0b0a0a]/92" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Top stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          <div
            ref={years.ref}
            className="flex items-center justify-start rounded-lg px-6 py-6 md:py-8 bg-gradient-to-b from-transparent to-black/30"
          >
            <div className="font-serif text-gold text-[64px] md:text-[88px] leading-none mr-4">
              {years.value}
            </div>
            <div className="font-serif text-white/90 text-[26px] md:text-[34px] leading-tight">
              years of experience
            </div>
          </div>

          <div
            ref={clients.ref}
            className="rounded-lg px-8 py-8 bg-gradient-to-b from-[#1a1a1a] to-black/60 text-center"
          >
            <div className="font-serif text-white text-[40px] md:text-[56px]">{clients.value.toLocaleString()}</div>
            <div className="mt-2 text-white/80 tracking-wide">Satisfied Clients</div>
          </div>

          <div
            ref={awards.ref}
            className="rounded-lg px-8 py-8 bg-gradient-to-b from-[#c89d5b] to-[#9b6f35] text-center"
          >
            <div className="font-serif text-[#121212] text-[40px] md:text-[56px]">{awards.value}</div>
            <div className="mt-2 text-[#1b1b1b]/80 tracking-wide">Winning Awards</div>
          </div>
        </div>
      </div>
      {/* Cards grid - full width */}
      <div className="relative mt-10 md:mt-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {lawCards.map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-md">
              <div className="relative h-[420px]">
                <img
                  src={c.img}
                  alt={c.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* dark overlay + slim vertical shine */}
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute left-[22px] top-0 bottom-0 w-[4px] bg-white/30" />

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-serif text-white text-[26px] md:text-[28px]">{c.title}</h3>
                  <div className="mt-2 h-[2px] w-40 bg-gradient-to-r from-gold/70 to-transparent" />
                  <p className="mt-3 text-white/70 text-sm">{c.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


