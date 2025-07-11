import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a1826] text-[#c3cbd4] border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand + Mission */}
        <div>
          <img src="/images/logo.png" alt="Indicaa Logo" className="h-16 mb-4" />
          <p className="text-sm text-[#9ca3af] max-w-xs leading-relaxed">
            Indicaa is a global leader in scrap metal trade — connecting sustainable sources to industrial demand with precision and quality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm">
            {[
              'About Us',
              'Products',
              'Global Reach',
              'Partners',
              'Quality Policy',
              'Careers',
              'Contact Us',
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[#b0b8c0] hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Contact + Socials */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Connect With Us</h3>
          <p className="text-sm text-[#9ca3af] mb-2">contact@indicaa.com</p>
          <p className="text-sm text-[#9ca3af] mb-5">+91 98765 43210</p>

          <div className="flex gap-4 text-[#9da6b1]">
            <a href="#" className="hover:text-white transition-all duration-200 ease-out">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-white transition-all duration-200 ease-out">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition-all duration-200 ease-out">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition-all duration-200 ease-out">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500 bg-[#08121b]">
        © {new Date().getFullYear()} Indicaa Metals Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
