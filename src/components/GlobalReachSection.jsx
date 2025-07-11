import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const counters = [
  { label: 'Countries Covered', value: 30 },
  { label: 'Million Tons Traded', value: 2 },
  { label: 'Active Ports', value: 85 },
  { label: 'Continents Served', value: 5 },
];

const Counter = ({ value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const step = value / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        clearInterval(interval);
        setCount(value);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white">{count}+</div>
      <div className="text-gray-300 mt-2 text-sm">{label}</div>
    </div>
  );
};

const GlobalReachSection = () => {
  return (
    <section id="global-reach" className="relative w-full h-[80vh] overflow-hidden">
      {/* Spline Globe */}
      <iframe
        src="https://my.spline.design/metallicrotatingglobe-xjjMN4NBC7F5tqqvJHt04JuU/"
        frameBorder="0"
        className="absolute inset-0 w-full h-full pointer-events-none"
        title="Metallic Globe"
      />

      {/* Blurred overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center bg-black/60 backdrop-blur-[2px] px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-gray-200 drop-shadow tracking-wide"
        >
          Indicaa Global
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          Empowering Global Scrap & Metal Trade — Modern, Reliable, Industrial.
        </motion.p>

        {/* Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.2 }}
              viewport={{ once: true }}
            >
              <Counter value={c.value} label={c.label} />
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-gray-800 text-white rounded-md border border-gray-600 hover:bg-gray-700 transition">
            Get a Quote
          </button>
          <button className="px-6 py-3 bg-gradient-to-br from-gray-300 to-gray-500 text-black rounded-md border border-gray-500 hover:from-gray-200 hover:to-gray-400 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Subtle metallic border (optional) */}
      <div className="absolute inset-0 border-2 border-gray-600 rounded-xl pointer-events-none z-20" />
    </section>
  );
};

export default GlobalReachSection;
