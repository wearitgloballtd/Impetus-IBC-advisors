import { GiScales, GiGreekTemple } from 'react-icons/gi';

const AboutSection = () => {
  return (
    <section className="relative bg-[#fdfbf8] pt-48 md:pt-56 pb-20 px-10 md:px-24 overflow-visible z-[5]">
      {/* Subtle Architectural Background Pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          filter: 'blur(4px) brightness(1.2)',
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-0 max-w-7xl mx-auto">
        {/* Top Section - About Content and Certificate */}
        <div className="flex flex-col mb-10">
          {/* Gold Subtitle */}
          <p className="text-[#c89d5b] text-sm md:text-base font-serif uppercase tracking-wider mb-2 md:mb-2">
            ABOUT US
          </p>

          {/* Main Content Row - Heading with Text to the Right */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Side - Heading and Button */}
            <div className="flex flex-col">
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#1b1512] font-serif mb-8 md:mb-10 leading-tight">
                Personal Lawyer &<br />
                Accident Attorney
              </h2>

              {/* Read More Button */}
              <button className="bg-[#c89d5b] text-black font-medium px-6 py-3 rounded-md hover:bg-[#b89052] transition-colors duration-300 w-fit uppercase">
                Read More
              </button>
            </div>

            {/* Right Side - Paragraph Text and Certificate */}
            <div className="flex-1 flex flex-col justify-between min-h-full">
              {/* Paragraphs - Aligned with heading */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-4 mb-8 md:mb-10">
                <p className="text-[#444] text-base md:text-base font-sans  flex-1">
                  With years of dedicated experience in personal injury law and accident representation, we provide comprehensive legal services tailored to protect your rights and secure the compensation you deserve.
                </p>
                <p className="text-[#444] text-base md:text-base font-sans  flex-1">
                  Our team combines deep legal expertise with compassionate client care, ensuring you receive personalized attention throughout every step of your case.
                </p>
              </div>

              {/* Certificate Box - Bottom Right */}
              <div className="w-fit ml-auto bg-gradient-to-br from-[#1b1512] to-[#0d0b09] rounded-xl shadow-md p-4 md:p-6 flex items-center gap-4">
                {/* Gold Circular Badge/Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#c89d5b] flex items-center justify-center flex-shrink-0">
                  <GiScales className="text-black text-xl md:text-2xl" />
                </div>
                
                {/* Certificate Text */}
                <div>
                  <p className="text-[#c89d5b] text-sm md:text-base font-bold font-serif uppercase mb-1">
                    CERTIFICATE
                  </p>
                  <p className="text-[#d3cbb8] text-xs md:text-sm font-sans">
                    Personal Lawyer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Team Image - Full Width */}
      <div className="w-full mt-10 -mx-10 md:-mx-24 flex justify-center items-center overflow-hidden">
        <img
          src="/hero-Section/group-lawyers.png"
          alt="Professional law team"
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-center"
        />
      </div>
    </section>
  );
};

export default AboutSection;

