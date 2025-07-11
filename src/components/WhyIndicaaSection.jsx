import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaShieldAlt, FaLeaf, FaClock } from 'react-icons/fa';

const features = [
  {
    title: 'Ethical Sourcing',
    icon: <FaHandshake size={22} className="text-sky-600" />,
    desc: 'We maintain transparent, ethical, and sustainable sourcing from verified yards and suppliers.',
  },
  {
    title: 'Unmatched Reliability',
    icon: <FaShieldAlt size={22} className="text-indigo-600" />,
    desc: 'With strict QA protocols and shipping control, we deliver on time — every time.',
  },
  {
    title: 'Environmental Focus',
    icon: <FaLeaf size={22} className="text-emerald-600" />,
    desc: 'We ensure compliance with green regulations and promote circular economies worldwide.',
  },
  {
    title: '24/7 Logistics Network',
    icon: <FaClock size={22} className="text-yellow-500" />,
    desc: 'Our global teams operate non-stop to connect suppliers, ports, and partners seamlessly.',
  },
];

const WhyIndicaaSection = () => {
  return (
    <section
      id="why-indicaa"
      className="bg-[#f9fafb] text-[#111827] py-16 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-2"
        >
          Why Choose Indicaa?
        </motion.h2>
        <p className="text-[#4b5563] max-w-2xl mx-auto text-base">
          More than a trader — we are partners, facilitators, and pioneers in sustainable scrap metal trade.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.15,
              duration: 0.5,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-200 rounded-xl p-6 text-center shadow hover:shadow-md transition"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="text-base font-semibold text-[#111827] mb-1">{item.title}</h3>
            <p className="text-sm text-[#4b5563]">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyIndicaaSection;
