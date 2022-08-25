import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Ronnie, nice to meet you. Please take a look around.</p>
          </div>
          
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400 ">Who Am I?</p>
            <p className="pt-4">
              My name is Ronnie Martin, and I graduated from Bulacan State
              University with a degree of Bachelor of Science in Information
              Technology. I began creating websites in 2018 by learning some
              basic HTML and CSS. I was quickly won over by the digital world.
              Since then, I've developed user-friendly websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
