import React, { useState, useEffect } from 'react';
import '../styles/soon.css';

const Projects = () => {
  const [state, setstate] = useState('');

  const ClickTigger = () => {
    setstate('This website was built using React and TailwindCSS.');
  }

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="h-screen scroll-smooth"  id = "projects">
      <h1 className="text-8xl font-bold text-center mx-auto relative z-10 text-cyan-100 title-soon duration-500">
        <span className="inline-block transform rotate-[-2deg] hover:rotate-[-6deg] duration-500 ">Pro</span>
        <span className="inline-block relative top-2 j-letter duration-500">j</span>
        <span className="inline-block transform rotate-[2deg] hover:rotate-[6deg] duration-500">ects</span>
      </h1>

      <div className="text-center pt-60 ">
        <h1 className="text-5xl font-bold mb-4 mx-auto relative z-10 text-cyan-50  ml-5 hover: brightness-200 hover:tracking-widest duration-500 ">Coming Soon</h1>
        <p className="mb-8 text-cyan-50 font-arial blur-sm hover:blur-none duration-500  text-3xl ">We are working on something awesome. Stay tuned!</p>
        <div 
        className="rounded-full w-12 h-12  bg-purple-600 mx-auto glow glowing_event hover:bg-blue-700 duration-500 ball-to-down" 
        onClick={ClickTigger}></div>
      </div>

      <p className="text-cyan-100 font-arial blur-sm hover:blur-none duration-500  text-center mt-5 text-2xl ">{state}</p>

      
    </div>
  )
}

export default Projects;
