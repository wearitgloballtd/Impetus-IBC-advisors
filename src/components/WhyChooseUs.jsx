import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1582582621959-48b3e1a1c9f7?q=80&w=2064&auto=format&fit=crop)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-6">
            <p className="text-[12px] tracking-[0.25em] text-[#a47a3c] font-semibold mb-2">OUR EXPERIENCES</p>
            <h2 className="text-[#0c0c0c] font-extrabold font-playfair text-[34px] md:text-[40px] leading-[1.15]">Why Client Choose Us?</h2>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 text-[13px] leading-6 text-[#5a5a5a]">
            <p>Our team of experienced attorneys brings decades of combined expertise in personal injury law, corporate legal matters, and insolvency solutions to every case we handle.</p>
            <p>We pride ourselves on delivering personalized attention, transparent communication, and strategic legal counsel that consistently achieves favorable outcomes for our clients.</p>
          </div>
        </div>

        {/* <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "192+", label: "Completed Works" },
            { value: "3,210", label: "Contract Signed" },
            { value: "260%", label: "Registered Cases" },
            { value: "100%", label: "Trusted Clients" },
          ].map((s) => (
            <div key={s.label} className="rounded-md bg-[#151515] text-white px-6 py-6 flex flex-col items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
              <div className="text-[40px] md:text-[46px] font-extrabold font-playfair">{s.value}</div>
              <div className="mt-2 text-[12px] tracking-wider uppercase text-[#c9c9c9]">{s.label}</div>
            </div>
          ))}
        </div> */}

        <div className="mt-14 rounded-md bg-gradient-to-b from-[#c4955c] to-[#a87642] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.15)_0px,rgba(255,255,255,0.15)_6px,transparent_6px,transparent_16px)]" />
              <img
                src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=1200&q=80"
                alt="Professional"
                className="relative z-10 h-full w-full object-cover object-center"
              />
            </div>
            <div className="lg:col-span-7 p-8 md:p-10 lg:p-12">
              <h3 className="text-[#191919] text-[28px] md:text-[30px] font-extrabold tracking-wide">MAKE AN APPOINTMENT</h3>
              <p className="mt-3 text-[#2f2f2f] text-[13px] leading-6 max-w-xl">Schedule a free consultation with our legal experts. We'll review your case, answer your questions, and provide guidance on the best path forward for your legal needs.</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" placeholder="Your Name" className="h-10 w-full rounded-sm bg-[#e8d3bd] placeholder-[#6f573e] text-[#2a1e14] px-3 outline-none" />
                <input type="text" placeholder="Your Phone" className="h-10 w-full rounded-sm bg-[#e8d3bd] placeholder-[#6f573e] text-[#2a1e14] px-3 outline-none" />
                <input type="email" placeholder="Your Email" className="h-10 w-full rounded-sm bg-[#e8d3bd] placeholder-[#6f573e] text-[#2a1e14] px-3 outline-none" />
                <input type="text" placeholder="Appointment Date" className="h-10 w-full rounded-sm bg-[#e8d3bd] placeholder-[#6f573e] text-[#2a1e14] px-3 outline-none" />
                <textarea placeholder="Message" className="sm:col-span-2 h-28 w-full rounded-sm bg-[#e8d3bd] placeholder-[#6f573e] text-[#2a1e14] p-3 resize-none outline-none" />
              </div>

              <div className="mt-5">
                <button type="button" className="w-full sm:w-auto px-8 py-2 rounded-sm bg-[#e0bb8c] text-[#1b1b1b] font-semibold tracking-wider">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

