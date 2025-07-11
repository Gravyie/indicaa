import React from 'react';
import { motion } from 'framer-motion';
import { FaTruckMoving, FaRecycle, FaCubes, FaGlobe } from 'react-icons/fa';

const products = [
  {
    icon: <FaRecycle size={22} />,
    title: 'Ferrous Scrap',
    desc: 'High-volume trade of HMS, shredded scrap, and re-rollable scrap from global sources.',
  },
  {
    icon: <FaCubes size={22} />,
    title: 'Non-Ferrous Scrap',
    desc: 'Aluminum, copper, brass, and specialty alloys sourced and supplied worldwide.',
  },
  {
    icon: <FaTruckMoving size={22} />,
    title: 'Containerized Trade',
    desc: 'End-to-end logistics of containerized scrap metal — port-to-port and inland transport.',
  },
  {
    icon: <FaGlobe size={22} />,
    title: 'Global Sourcing',
    desc: 'Strong local presence across 10+ countries ensures quality, consistency, and trust.',
  },
];

const ProductsSection = () => {
  return (
    <section
      id="products"
      className="bg-[#f3f4f6] text-[#1e293b] pt-10 pb-18 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-3 text-[#0f172a]"
        >
          Our Products & Services
        </motion.h2>
        <p className="text-[#475569] max-w-2xl mx-auto text-base">
          Indicaa deals in a wide array of scrap commodities and provides containerized logistics solutions across the globe.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.15,
              type: 'spring',
              stiffness: 70,
              damping: 13,
            }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-200 rounded-xl p-6 text-center shadow-md hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="mb-3 text-[#2563eb] group-hover:text-[#1d4ed8] transition duration-300">
              {item.icon}
            </div>
            <h3 className="text-base font-semibold text-[#0f172a] mb-1">{item.title}</h3>
            <p className="text-sm text-[#475569] group-hover:text-[#1e293b] transition leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
