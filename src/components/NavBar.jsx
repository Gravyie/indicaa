import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about' },
  { name: 'PRODUCTS', path: '/products' },
  { name: 'GLOBAL REACH', path: '/global-reach' },
  { name: 'PARTNERS', path: '/partners' },
  { name: 'QUALITY POLICY', path: '/quality-policy' },
  { name: 'CAREERS', path: '/careers' },
  { name: 'CONTACT US', path: '/contact-us' },
];

const Navbar = () => {
  return (
    <nav className="bg-[#12181f] text-[#e1e4e8] shadow-sm border-b border-[#5b6770] backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-4 border-r border-[#5b6770] pr-6">
          <Link to="/">
            <img src="/images/logo.png" alt="Indicaa Logo" className="h-14 w-auto" />
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-6 text-sm font-medium tracking-wider uppercase">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative group transition duration-300 ${
                    isActive ? 'text-[#a6b1bb]' : ''
                  }`
                }
              >
                <span className="group-hover:text-[#a6b1bb]">{name}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#9ea5ab] to-[#d3d7dc] group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
