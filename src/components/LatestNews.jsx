import React from "react";

const posts = [
  {
    title: "Understanding Your Rights in Personal Injury Cases",
    meta: "Legal Team | January 15, 2024",
    excerpt:
      "Learn about the key factors that determine compensation in personal injury claims and how our experienced attorneys can help you navigate the legal process to secure the settlement you deserve.",
  },
  {
    title: "Corporate Insolvency: New Regulations and What They Mean",
    meta: "Legal Team | December 8, 2023",
    excerpt:
      "Recent changes in insolvency laws have significant implications for businesses facing financial difficulties. Our corporate law specialists break down the new regulations and their impact on restructuring options.",
  },
  {
    title: "Real Estate Transactions: Common Pitfalls to Avoid",
    meta: "Legal Team | November 22, 2023",
    excerpt:
      "Property transactions involve complex legal requirements that can lead to costly mistakes. Discover the most common pitfalls in real estate deals and how proper legal counsel can protect your interests.",
  },
];

const logos = [
  "https://api.iconify.design/mdi/wheat.svg?color=%23c89d5b",
  "https://api.iconify.design/mdi/alpha-l-box.svg?color=%23c89d5b",
  "https://api.iconify.design/mdi/dots-grid.svg?color=%23c89d5b",
  "https://api.iconify.design/mdi/cube-outline.svg?color=%23c89d5b",
  "https://api.iconify.design/mdi/waves.svg?color=%23c89d5b",
];

export default function LatestNews() {
  return (
    <section className="relative w-full bg-white text-[#1a1a1a] py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center">
          <div className="text-[12px] tracking-[0.25em] text-gold/90">NEWS</div>
          <h2 className="mt-3 font-serif font-extrabold text-[34px] md:text-[44px] lg:text-[52px] leading-tight text-[#111]">
            Learn more from
            <br className="hidden md:block" /> our latest news
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article
              key={p.title}
              className="rounded-md border border-[#d8be98]/70 bg-white p-7 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            >
              <h3 className="font-serif text-[18px] md:text-[20px] tracking-wide text-[#0b0b0b]">
                {p.title}
              </h3>
              <div className="mt-2 text-[12px] tracking-wide text-[#9b8d7a]">{p.meta}</div>
              <p className="mt-5 text-[14px] leading-7 text-[#6a6a6a]">{p.excerpt}</p>
              <a
                href="#"
                className="mt-6 inline-block text-[14px] text-[#a87642] hover:text-[#c89d5b] transition-colors"
              >
                Read More »
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="italic text-[#0c0c0c] hover:text-gold transition-colors">
            View All
          </a>
        </div>

        {/* Logos */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="logo" className="h-8 opacity-70" />
          ))}
        </div>
      </div>
    </section>
  );
}


