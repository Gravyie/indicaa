import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaCheckCircle, FaAward, FaCertificate, FaGlobeAmericas, FaTree, FaSchool, FaHandsHelping, FaWater } from 'react-icons/fa';
import TestimonialSection from '../components/Testimonials';

const cards = [
  {
    icon: <FaBullseye size={26} />,
    title: 'Our Mission',
    text: 'To connect industries with responsible metal sourcing — promoting environmental sustainability, operational efficiency, and global accessibility.',
    colorFrom: '#d1d5db',
    colorTo: '#9ca3af',
  },
  {
    icon: <FaEye size={26} />,
    title: 'Our Vision',
    text: 'To lead the world in ethical scrap trade, creating a transparent and circular economy that supports communities, industries, and the planet.',
    colorFrom: '#a6b1bb',
    colorTo: '#cfd4d9',
  },
];

const leaders = [
  {
    name: 'Rajesh Mehta',
    title: 'Founder & CEO',
    img: '/images/Testi1.png',
    bio: 'A visionary leader with over 20 years in global scrap trade, Rajesh drives the strategic vision and sustainable operations of Indicaa.',
  },
  {
    name: 'Priya Nair',
    title: 'Director of Global Operations',
    img: '/images/Testi1.png',
    bio: 'Priya leads multi-continental logistics with precision and an unwavering commitment to timely delivery and compliance.',
  },
  {
    name: 'Ahmed Khan',
    title: 'Chief Sustainability Officer',
    img: '/images/Testi1.png',
    bio: 'Ahmed ensures Indicaa’s trade practices align with global green mandates, circular economies, and ethical sourcing.',
  },
];

const certifications = [
  {
    title: 'ISO 9001:2015 Certified',
    icon: <FaCheckCircle size={24} />,
    desc: 'Ensures our quality management systems meet international standards across all trading operations.',
  },
  {
    title: 'Recognized Exporter Award',
    icon: <FaAward size={24} />,
    desc: 'Awarded by the Government of India for consistent global exports and trade compliance.',
  },
  {
    title: 'Green Trade Compliance',
    icon: <FaCertificate size={24} />,
    desc: 'Certified for meeting strict environmental guidelines in sourcing, processing, and logistics.',
  },
  {
    title: 'Global Recycling Standard (GRS)',
    icon: <FaGlobeAmericas size={24} />,
    desc: 'Indicaa complies with GRS protocols for transparency and sustainability in the recycling supply chain.',
  },
];

const initiatives = [
  {
    title: 'Tree Plantation Drives',
    icon: <FaTree size={22} />,
    desc: 'We’ve planted over 50,000 trees across industrial zones to reduce our environmental footprint.',
  },
  {
    title: 'Education Sponsorships',
    icon: <FaSchool size={22} />,
    desc: 'Supporting education for underprivileged children with scholarships and infrastructure grants.',
  },
  {
    title: 'Community Welfare',
    icon: <FaHandsHelping size={22} />,
    desc: 'From skill development to healthcare camps — we uplift the communities we operate in.',
  },
  {
    title: 'Clean Water Access',
    icon: <FaWater size={22} />,
    desc: 'Funding and installing water purification systems in remote and affected areas.',
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative w-full h-[50vh] overflow-hidden" id="about-hero">
        <img
            src="/images/AboutHero.jpg"
            alt="About Indicaa"
            className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30"></div>

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 h-full flex items-center justify-center px-4"
        >
            <div className="text-center text-white max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Behind Indicaa: Legacy, Vision, and Global Impact
            </h1>
            <p className="text-base md:text-lg text-[#d3d7dc] max-w-xl mx-auto">
                Discover the journey that shaped one of the world’s leading scrap metal companies — rooted in ethics, driven by excellence.
            </p>
            </div>
        </motion.div>
      </section>

      <section className="bg-[#f4f6f8] text-[#111827] py-20 px-6 md:px-10 lg:px-20" id="company-story">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-md"
            >
            <img
                src="/images/Company-Legacy.jpg"
                alt="Indicaa Legacy"
                className="w-full h-full object-cover"
            />
            </motion.div>

            {/* Right: Text */}
            <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
            >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                A Legacy Forged in Metal & Trust
            </h2>
            <p className="text-[#374151] text-base md:text-lg leading-relaxed mb-6">
                Founded in the early 2000s, Indicaa Metals has grown from a modest trading house to a
                global powerhouse in the scrap metal industry. From our first shipment of HMS scrap to
                building trusted relationships across 20+ countries — we’ve remained rooted in our values
                of integrity, transparency, and quality.
            </p>
            <p className="text-[#4b5563] italic">
                “What began as a trade has evolved into a global movement — driving sustainability and
                shaping industries.”
            </p>
            </motion.div>
        </div>
      </section>

      <section className="bg-[#f9fafb] text-[#111827] py-20 px-6 md:px-10 lg:px-20" id="mission-vision">
        <div className="max-w-5xl mx-auto text-center mb-12">
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
            >
            Mission & Vision
            </motion.h2>
            <p className="text-[#4b5563] max-w-2xl mx-auto mt-3 text-sm md:text-base">
            At the heart of everything we do lies purpose — one that scales beyond profit.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cards.map((card, idx) => (
            <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="p-6 rounded-xl shadow-md border bg-white hover:shadow-lg transition group"
            >
                <div className="mb-4 text-[#6b7280] group-hover:text-[#111827] transition">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-[#374151]">{card.text}</p>
            </motion.div>
            ))}
        </div>
      </section>

      <section className="bg-[#f3f4f6] text-[#111827] py-20 px-6 md:px-10 lg:px-20" id="leadership">
        <div className="max-w-6xl mx-auto text-center mb-14">
            <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
            >
            Our Leadership
            </motion.h2>
            <p className="text-[#4b5563] max-w-xl mx-auto mt-3 text-sm md:text-base">
            Meet the minds behind our mission. People who steer Indicaa with expertise, clarity, and vision.
            </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {leaders.map((person, index) => (
            <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition"
            >
                <img
                src={person.img}
                alt={person.name}
                className="w-full h-64 object-cover"
                />
                <div className="p-6">
                <h3 className="text-lg font-semibold text-[#111827]">{person.name}</h3>
                <p className="text-sm text-[#6b7280] mb-3">{person.title}</p>
                <p className="text-sm text-[#374151]">{person.bio}</p>
                </div>
            </motion.div>
            ))}
        </div>
      </section>

      <section
        id="certifications"
        className="bg-[#f9fafb] text-[#1f2937] py-20 px-6 md:px-10 lg:px-20"
        >
        <div className="max-w-6xl mx-auto text-center mb-14">
            <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
            >
            Certifications & Recognition
            </motion.h2>
            <p className="text-[#6b7280] max-w-xl mx-auto mt-3 text-sm md:text-base">
            Our excellence in quality, compliance, and sustainability has been acknowledged worldwide.
            </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {certifications.map((item, index) => (
            <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
                <div className="text-[#2563eb] mb-3">{item.icon}</div>
                <h3 className="font-semibold text-base text-[#111827] mb-2">
                {item.title}
                </h3>
                <p className="text-sm text-[#4b5563] leading-snug">{item.desc}</p>
            </motion.div>
            ))}
        </div>
      </section>

      <TestimonialSection />
      
      <section
        id="csr"
        className="bg-[#eef2f7] text-[#1f2937] py-20 px-6 md:px-10 lg:px-20"
        >
        <div className="max-w-6xl mx-auto text-center mb-14">
            <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
            >
            Social Responsibility at Our Core
            </motion.h2>
            <p className="text-[#6b7280] max-w-xl mx-auto mt-3 text-sm md:text-base">
            Our growth is meaningful only when it positively impacts the world around us.
            </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {initiatives.map((item, idx) => (
            <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
                <div className="text-[#059669] mb-3">{item.icon}</div>
                <h3 className="font-semibold text-base text-[#111827] mb-2">
                {item.title}
                </h3>
                <p className="text-sm text-[#4b5563] leading-snug">{item.desc}</p>
            </motion.div>
            ))}
        </div>
      </section>
    </div>
  )
}