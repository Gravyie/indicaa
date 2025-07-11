import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';

const slides = [
  {
    image: '/images/Hero1.jpeg',
    headline: 'Global Leaders in Scrap Metal Trade',
    text: 'With over 3.4 million tons shipped annually, Indicaa delivers quality, reliability, and reach like no other.',
    cta: 'Explore Our Reach',
    link: '#global-reach',
  },
  {
    image: '/images/Hero2.jpeg',
    headline: 'Ferrous & Non-Ferrous Excellence',
    text: 'From HMS to specialty alloys, we move metals the world depends on — ethically and efficiently.',
    cta: 'View Our Products',
    link: '#products',
  },
  {
    image: '/images/Hero3.jpeg',
    headline: 'Driving a Greener Tomorrow',
    text: 'Indicaa is at the forefront of sustainable sourcing, circular economies, and environmental compliance.',
    cta: 'Learn About Our Values',
    link: '#why-indicaa',
  },
];

const HeroSection = () => {
  return (
    <section className="w-full h-[90vh] relative overflow-hidden" id="home">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img
                src={slide.image}
                alt="Hero Slide"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 h-full w-full flex items-center justify-center text-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="max-w-2xl text-white"
                >
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.headline}
                  </h1>
                  <p className="text-base md:text-lg mb-6 text-[#d3d7dc]">
                    {slide.text}
                  </p>
                  <a
                    href={slide.link}
                    className="inline-block px-6 py-3 bg-gradient-to-br from-[#d1d5db] to-[#a6b1bb] text-[#12181f] font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
                  >
                    {slide.cta}
                  </a>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
