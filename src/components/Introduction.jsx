
import React from 'react';
import '../styles/quotes.css';
import dogu from '../images/dou.jpg';
import Members from './Members';

const Introduction = () => {
  return (
    <div className="min-h-screen scroll-smooth mb-70" id='introduction'>
      <h3
        className="text-cyan-100 text-7xl text-center mb-6 font-arial tracking-wide brightness-100 hover:brightness-200 hover:-translate-y-3 duration-500 hover:tracking-widest">
        MEMBERS
      </h3>

      {/* MEMBERS */}
        <Members/>

      {/* LEADER */}
      <div>
        <h3
          className="text-cyan-100 text-7xl text-center  mt-5 font-arial tracking-wide brightness-100 hover:brightness-200 hover:-translate-y-3 duration-500 hover:tracking-widest">
          Leader
        </h3>

        <img
          className="rounded-3xl mt-15 mx-auto hover-translate-y-3 duration-500"
          src={dogu}
          alt="Doguhan Ilter"
        />
        <h3
          className="font-arial text-center  text-slate-100 font-normal text-5xl from-slate-400 to-slate-700 bg-gradient-to-r bg-clip-text text-transparent hover:brightness-200 transition duration-500">
          Doguhan Ilter
        </h3>
        <p
          className="font-arial  text-slate-100 font-normal text-2xl text-center mt-5 pb-20 from-slate-400 to-slate-700 bg-gradient-to-r bg-clip-text text-transparent hover:brightness-200 transition duration-500">
          Junior Full Stack Developer and leader of Hypatia Group
        </p>
      </div>
    </div>
  );
};
export default Introduction;