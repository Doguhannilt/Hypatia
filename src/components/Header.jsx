import React from 'react';
import Navbar from './Navbar';
import Quote from './Quote';


import '../styles/header.css';

const Header = () => {
  return (
    <div className="h-screen scroll-smooth">
     
      
      <div className="
        hover:opacity-50 
        hover:-translate-y-3 
        duration-500">
        <span className="relative">
          <h3 className="
            text-slate-100 ease-in duration-300 
            text-center 
            font-normal 
            text-9xl 
            font-arial 
            antialiased 
            tracking-wide 
            brightness-100
            pt-20
            hover:brightness-200">
            Hypatia Group
          </h3>
        </span>
      </div>

      <h4 className="font-arial antialiased text-5xl text-center font-bold text-gradient bg-gradient-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent brightness-120 hover:brightness-200 duration-500">
        <p>Make Together!</p>
      </h4>
      <Navbar />
      <Quote />


    </div>
  );
};

export default Header;
