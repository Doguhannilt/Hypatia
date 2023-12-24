// Navbar.jsx
import React from 'react';
import { navLinks } from '../constants/navbar';

const Navbar = () => {
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="text-slate-100">
      <ul className="flex space-x-10 justify-center mt-10 font-arial text text-2xl">
        {navLinks.map((navlink) => (
          <li key={navlink.id}>
            <div
              className="hover:translate-y-1 duration-500 cursor-pointer"
              onClick={() => handleSmoothScroll(navlink.id)}
            >
              <span className="opacity-40 brightness-200 hover:opacity-100">
                {navlink.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
