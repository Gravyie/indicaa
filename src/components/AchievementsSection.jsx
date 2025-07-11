import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaChartLine, FaUsers, FaAward } from 'react-icons/fa';

const stats = [
  {
    title: 'Countries Served',
    value: '22+',
    icon: <FaGlobe size={20} />,
  },
  {
    title: 'Million+ Tons Shipped',
    value: '3.4M',
    icon: <FaChartLine size={20} />,
  },
  {
    title: 'Clients Worldwide',
    value: '120+',
    icon: <FaUsers size={20} />,
  },
  {
    title: 'Awards & Recognitions',
    value: '15',
    icon: <FaAward size={20} />,
  },
];

const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="bg-[#f8fafc] text-[#1e293b] pt-5 pb-18 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-[#0f172a]"
        >
          Our Global Impact
        </motion.h2>
        <p className="text-[#64748b] max-w-xl mx-auto mt-2 text-sm md:text-base">
          Trusted by industries across continents — our numbers speak for themselves.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-center items-center mb-3 text-[#2563eb]">
              {stat.icon}
            </div>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-1">{stat.value}</h3>
            <p className="text-sm text-[#475569]">{stat.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
