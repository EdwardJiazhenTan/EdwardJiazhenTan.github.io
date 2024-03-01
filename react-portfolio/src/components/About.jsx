import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Edward Tan, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm a Computer Science junior at the University of Rochester with a passion for software development, especially in areas like software architecture, machine learning, and cybersecurity. My journey is marked by a strong foundation in organizational, time-management, and communication skills, allowing me to adapt and learn swiftly. Through my coursework and projects, I've honed my abilities in software engineering, algorithm design, and data structures. I'm eager to explore innovative solutions and contribute to the tech industry's future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
