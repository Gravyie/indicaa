import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section
      id="contact-us"
      className="bg-[#f3f4f6] text-[#1f2937] py-20 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0f172a]">Contact Us</h2>
          <p className="text-[#475569] mb-6 max-w-md text-sm leading-relaxed">
            Let’s connect! Whether you're a supplier, client, or collaborator — we’re just a message away.
          </p>

          <div className="space-y-5 text-sm text-[#334155]">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#2563eb] mt-1" />
              <span>
                Indicaa Metals Pvt. Ltd.<br />
                Industrial Zone, Navi Mumbai, India 400703
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#10b981]" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#f59e0b]" />
              <span>contact@indicaa.com</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-md border border-gray-200 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-sm mb-1 text-[#1f2937] font-medium">Name</label>
            <input
              type="text"
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-sm text-[#1f2937] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-[#1f2937] font-medium">Email</label>
            <input
              type="email"
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-sm text-[#1f2937] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-[#1f2937] font-medium">Message</label>
            <textarea
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-sm text-[#1f2937] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              rows="4"
              placeholder="Type your message here..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] text-white text-sm font-semibold rounded-md transition-all duration-300 shadow hover:shadow-lg"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
