import React from "react";

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-24 lg:py-28">
      {/* Background image and dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1582582621959-48b3e1a1c9f7?q=80&w=2064&auto=format&fit=crop)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#0b0a0a]/94" aria-hidden />

      {/* Top thin gold line */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="hidden md:block h-px w-full bg-[rgba(200,157,91,0.25)]" />

        {/* Content grid */}
        <div className="relative mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Testimonial block */}
          <div className="lg:col-span-6">
            <p className="text-[12px] tracking-[0.25em] text-gold/90 mb-4">OUR TESTIMONIAL</p>

            <div className="relative rounded-xl bg-[#111011]/80 backdrop-blur-sm border border-white/5 p-7 md:p-9">
              <p className="text-[16px] md:text-[18px] leading-8 text-white/80">
                The team provided exceptional legal representation during my personal injury case. Their expertise, dedication, and transparent communication throughout the entire process gave me confidence that I was in the best hands. They secured a favorable settlement that exceeded my expectations.
              </p>

              {/* Person */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop"
                  alt="Michael Chen"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-serif tracking-wide text-[22px] text-white">MICHAEL CHEN</div>
                  <div className="text-white/60 text-sm">Business Owner</div>
                </div>
              </div>

              {/* Big quote mark */}
              <div className="pointer-events-none absolute right-6 bottom-6 text-gold/30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-16 w-16">
                  <path fill="currentColor" d="M18 10h-6a8 8 0 00-8 8v12h12V22H8a4 4 0 014-4h6V10zm26 0h-6a8 8 0 00-8 8v12h12V22h-8a4 4 0 014-4h6V10z"/>
                </svg>
              </div>

              {/* Dots */}
              <div className="mt-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/60" />
              </div>
            </div>
          </div>

          {/* Right: Person image */}
          <div className="lg:col-span-6 relative">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop"
              alt="Professional"
              className="mx-auto lg:mx-0 max-h-[520px] object-contain select-none"
            />
          </div>
        </div>

        {/* Bottom thin gold line */}
        <div className="mt-12 hidden md:block h-px w-full bg-[rgba(200,157,91,0.25)]" />
      </div>
    </section>
  );
}


