import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiChevronDown } from 'react-icons/fi';
import { GiScales, GiGreekTemple } from 'react-icons/gi';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-visible">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300 ${
          isScrolled ? 'bg-black/40 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/hero-Section/logo[1].png"
              alt="Impetus IBC Advisors logo"
              className="h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.45)]"
              loading="lazy"
            />
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {['HOME', 'ABOUT', 'CASE', 'SERVICES', 'PAGE', 'NEWS', 'CONTACT US'].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-white text-sm font-medium hover:text-[#c89d5b] transition-colors duration-300 flex items-center gap-1"
              >
                {item}
                {item === 'PAGE' && <FiChevronDown className="text-xs" />}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-[#1b1512]/90 to-black/20" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-0">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          >

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-serif uppercase leading-tight mb-6"
            >
              LAW EXPERTISE
              <br />
              IT'S OUR POLICY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-[#d3cbb8] text-base md:text-lg mb-8 max-w-xl font-sans leading-relaxed"
            >
             Empowering Corporate Revival through Strategic Legal & Insolvency Solutions
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#c89d5b] text-black font-semibold px-8 py-4 rounded-md hover:bg-[#b89052] transition-colors duration-300 uppercase tracking-wide"
            >
              FREE CONSULTING
            </motion.button>
          </motion.div>

          {/* Right Side - Lawyer Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2 flex items-end justify-center md:justify-end h-full"
          >
            <div className="relative w-full max-w-md">
              <img
                src="hero-Section/lawyer.png"
                alt="Professional lawyer"
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
                style={{ filter: ' brightness(0.75)' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Floating Cards - Positioned at bottom, extending into next section */}
        <div className="absolute bottom-0 left-0 right-0 z-[60] px-6 md:px-12 transform translate-y-1/2 pointer-events-none">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-0 pointer-events-auto rounded-lg shadow-2xl overflow-hidden">
              {/* Card 1 - EXPERIENCED */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex-1 bg-gradient-to-br from-[#1b1512] to-[#0d0b09] p-6 md:p-8 relative z-50 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#2a2118] hover:to-[#1a1510] hover:shadow-[0_0_20px_rgba(200,157,91,0.3)] flex items-start gap-4 md:gap-6"
                style={{ color: 'white' }}
              >
                <div className="flex-shrink-0">
                  <GiScales className="text-[#c89d5b] text-4xl md:text-5xl" style={{ display: 'block' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl md:text-2xl font-bold font-serif uppercase mb-3 leading-tight" style={{ color: '#ffffff', fontWeight: '700' }}>
                    EXPERIENCED
                  </h3>
                  <p className="text-sm md:text-base font-sans leading-relaxed" style={{ color: '#d3cbb8', opacity: 1 }}>
                  Decades of legal experience dedicated to protecting your rights.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 - EFFECTIVE */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex-1 bg-gradient-to-br from-[#1b1512] to-[#0d0b09] p-6 md:p-8 relative z-50 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#2a2118] hover:to-[#1a1510] hover:shadow-[0_0_20px_rgba(200,157,91,0.3)] flex items-start gap-4 md:gap-6"
                style={{ color: 'white' }}
              >
                <div className="flex-shrink-0">
                  <GiGreekTemple className="text-[#c89d5b] text-4xl md:text-5xl" style={{ display: 'block' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl md:text-2xl font-bold font-serif uppercase mb-3 leading-tight" style={{ color: '#ffffff', fontWeight: '700' }}>
                    EFFECTIVE
                  </h3>
                  <p className="text-sm md:text-base font-sans leading-relaxed" style={{ color: '#d3cbb8', opacity: 1 }}>
                  Strategic, research-driven legal solutions with decisive action when it matters.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 - HERE FOR YOU */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="flex-1 bg-gradient-to-br from-[#1b1512] to-[#0d0b09] p-6 md:p-8 relative z-50 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#2a2118] hover:to-[#1a1510] hover:shadow-[0_0_20px_rgba(200,157,91,0.3)] flex items-start gap-4 md:gap-6"
                style={{ color: 'white' }}
              >
                <div className="flex-shrink-0">
                  <FiFileText className="text-[#c89d5b] text-4xl md:text-5xl" style={{ display: 'block' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl md:text-2xl font-bold font-serif uppercase mb-3 leading-tight" style={{ color: '#ffffff', fontWeight: '700' }}>
                    HERE FOR YOU
                  </h3>
                  <p className="text-sm md:text-base font-sans leading-relaxed" style={{ color: '#d3cbb8', opacity: 1 }}>
                  Around-the-clock legal guidance delivered with clarity and confidence.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;

