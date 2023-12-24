import React from 'react';
import { introduction_array } from '../constants/introduction';
import '../styles/quotes.css';

const Imageshover = {
  hover: ['rounded-4xl', 'rotate-[-2deg]', 'skew-y-2', 'brightness-140']
};

const Members = () => {
  return (
    <div>
      {/* IMAGE */}
      <div className="grid grid-cols-5 gap-5 ml-20 pl-40 ">
        {introduction_array.map((map) => (
          <div key={map.id} className="flex items-center justify-center">
            <img
              className={`w-26 h-25 object-cover img-container hover-translate-y-3 duration-500 rounded-xl hover:${Imageshover.hover.join(' ')}`}
              src={map.img}
              alt={`Image for ${map.name}`}
            />
          </div>
        ))}
      </div>

      {/* NAME */}
      <div className="grid grid-cols-5 gap-4 ml-20 pl-40">
        {introduction_array.map((map) => (
          <div key={map.id} className="flex items-center justify-center">
            <p
              className="font-arial text-slate-100 font-normal text-3xl from-slate-400 to-slate-700 bg-gradient-to-r bg-clip-text text-transparent hover:brightness-200 transition duration-500"
            >
              {map.name}
            </p>
          </div>
        ))}
      </div>

      {/* DESCRIPTION */}
      <div className="grid grid-cols-5 gap-4 ml-20 pl-40">
        {introduction_array.map((map) => (
          <div key={map.id} className="flex items-center justify-center">
            <p
              className="font-arial text-slate-100 font-normal text-2xl text-center mt-3 from-slate-200 to-slate-800 bg-gradient-to-l bg-clip-text text-transparent hover:brightness-200 transition duration-500"
            >
              {map.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
