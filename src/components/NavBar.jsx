import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#12181f] text-[#e1e4e8] shadow-sm border-b border-[#5b6770] backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-4 border-r border-[#5b6770] pr-6">
          <img src="/images/logo.png" alt="Indicaa Logo" className="h-14 w-auto" />
        </div>

        {/* Nav Links */}
        <ul className="flex gap-6 text-sm font-medium tracking-wider uppercase">
          {[
            'HOME',
            'ABOUT US',
            'PRODUCTS',
            'GLOBAL REACH',
            'PARTNERS',
            'QUALITY POLICY',
            'CAREERS',
            'CONTACT US',
          ].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative group transition duration-300"
              >
                <span className="group-hover:text-[#a6b1bb]">{link}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#9ea5ab] to-[#d3d7dc] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
