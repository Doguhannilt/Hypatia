import React, { useState } from 'react';
import hypatia_image from '../images/Hypatia_1.png';
import '../styles/quotes.css';

const Quote = () => {
  const [text, setText] = useState('');

  const updateText = () => {
     setText('She was a prominent and taught philosophy and astronomy.');
     document.querySelector('.text-container').classList.add('show');
  };

  return (
    <div className="flex pt-20 mt-20 justify-center">
        <div className="text-container">
      <p className="text-cyan-100 font-arial text-left text-hypatia hover-translate-y-3 duration-500 mt-16 mr-10 text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-700">{text}</p></div>
      <div className="glowing-background">
        <img
          className="rounded-full h-40 brightness-100 hover-translate-y-3 mr-10 duration-1000 hover:h-44"
          src={hypatia_image}
          alt="Hypatia"
          loading="lazy"
          onClick={updateText}
        />
      </div>

      <p className="text-cyan-100 font-arial mt-10 ml-4  text-3xl hover-translate-y-3 duration-500 text-transparent bg-clip-text bg-gradient-to-l from-slate-400 to-slate-700 hover:brightness-200">
        Reserve your right to think, for even to think <br />
        wrongly is better than not to think at all.
      </p>
    </div>
  );
};

export default Quote;
