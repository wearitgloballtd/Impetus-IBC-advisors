import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#2a1d12] text-[#e9e3d7]">
      {/* Floating subscribe card */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="-translate-y-16 md:-translate-y-20">
          <div className="relative rounded-md border border-[#2f3a35] bg-[#0d221f] overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10">
                <h3 className="font-serif text-gold text-[30px] md:text-[36px] leading-tight">
                  Subscribe Your Email
                  <br /> for Newsletter & Promotion
                </h3>
                <div className="mt-6 flex">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="flex-1 h-12 rounded-l-md bg-[#17312d] placeholder-[#9ab3a9] text-[#e7f2ee] px-4 outline-none border border-[#29433d]"
                  />
                  <button className="h-12 px-6 rounded-r-md bg-[#c89d5b] text-[#1b1b1b] font-semibold">Send</button>
                </div>
              </div>
              <div className="hidden md:block relative">
                <img
                  src="https://images.unsplash.com/photo-1589396573515-1cde39f5d0f4?q=80&w=1400&auto=format&fit=crop"
                  alt="gavel"
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pb-12 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 text-gold">
              <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9h18M5 9V7l7-4 7 4v2M6 9v9M10 9v9M14 9v9M18 9v9M3 20h18"/></svg>
              <div className="font-serif text-[28px] leading-none">LAWONE</div>
            </div>
            <p className="mt-4 text-[#d8cbb6]/80 text-[14px] leading-7 max-w-md">
              Leo sem euismod massa iaculis ullamcorper duis potenti, facilisi per natoque sapien proin pulvinar habitant
            </p>
            <div className="mt-4 flex gap-5 text-gold/80">
              <span className="h-4 w-4 rounded-full border border-gold/60"/>
              <span className="h-4 w-4 rounded-full border border-gold/60"/>
              <span className="h-4 w-4 rounded-full border border-gold/60"/>
              <span className="h-4 w-4 rounded-full border border-gold/60"/>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-gold text-[18px] tracking-wide">OUR SERVICES</h4>
            <ul className="mt-4 space-y-2 text-[#e9e3d7]/80 text-[14px]">
              <li>Domestic Violence</li>
              <li>Business Activity</li>
              <li>Murder Crime</li>
              <li>Commercial Law</li>
              <li>Financial Law</li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-gold text-[18px] tracking-wide">SUPPORT</h4>
            <ul className="mt-4 space-y-2 text-[#e9e3d7]/80 text-[14px]">
              <li>Professional</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Support System</li>
              <li>Refund Policy</li>
            </ul>
          </div>

          {/* Gallery */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-gold text-[18px] tracking-wide">GALLEY</h4>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[1,2,3,4].map((i)=> (
                <img key={i} src={`https://images.unsplash.com/photo-155${60+i}1234-26160f608093?q=80&w=400&auto=format&fit=crop`} alt="g" className="h-16 w-full object-cover" />
              ))}
            </div>
          </div>
        </div>

        {/* Contact row */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-[#e9e3d7]">
          <div className="flex items-center gap-4">
            <div className="text-gold">
              <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 6.18 2 2 0 0 1 5 4h4.09a2 2 0 0 1 2 1.72l.57 3.43a2 2 0 0 1-.54 1.73l-1.27 1.27a16 16 0 0 0 6.88 6.88l1.27-1.27a2 2 0 0 1 1.73-.54l3.43.57A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <div className="text-gold tracking-wide">PHONE</div>
              <div className="text-[#e9e3d7]/80">+6297501</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-gold">
              <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
            </div>
            <div>
              <div className="text-gold tracking-wide">EMAIL</div>
              <div className="text-[#e9e3d7]/80">lawone@mail.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-gold">
              <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <div className="text-gold tracking-wide">Location</div>
              <div className="text-[#e9e3d7]/80">Jl. Soekarno</div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#3a2a1d] pt-6 text-center text-[#d8cbb6]/70 text-sm">
          Copyright © 2021 LAWONE Design By StrongTheme
        </div>
      </div>
    </footer>
  );
}


