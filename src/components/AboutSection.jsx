import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#181f29] text-[#e1e4e8] py-20 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full h-[280px] md:h-[380px] lg:h-[460px] overflow-hidden rounded-2xl border border-[#353f4b] shadow-xl"
        >
          <img
            src="/images/ScrapYard.jpeg"
            alt="Scrap metal yard"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            About <span className="text-blue-300">Indicaa</span>
          </h2>
          <p className="text-[#c1c9d2] leading-relaxed text-[15px]">
            Indicaa is one of the world’s largest transnationals in containerized scrap metal trade. 
            With a global footprint and an unshakable commitment to efficiency and ethics, 
            we deliver over <strong className="text-white">2 million tons</strong> of metal annually.
          </p>
          <p className="text-[#8f9aa5] italic text-sm">
            From ports to people — we connect industries and enable sustainability.
          </p>

          <a
            href="#products"
            className="inline-block mt-4 px-6 py-2.5 text-sm bg-gradient-to-br from-[#dfe3e7] to-[#a6b1bb] text-[#12181f] font-semibold rounded-full shadow-md hover:scale-[1.04] hover:shadow-lg transition-transform duration-300"
          >
            Explore Our Products
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
