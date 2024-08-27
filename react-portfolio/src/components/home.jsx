import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#8a8d8c]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#d9cbb0] sm:text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#d9cbb0]'>
          Edward Tan
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold '>
          I'm a Senior Computer Science Student.
        </h2>
        <p className='text-[#151515] py-4 max-w-[700px]'>
          I’m a Senior Computer Science Student at Univeristy of Rochester, aim to be a Software Engineer. I have a passion for coding and learning new technologies. I have experience in Full Stack Development, Machine Learning, and Data Science. I am always looking for new opportunities to learn and grow.
        </p>
      </div>
    </div>
  );
};

export default Home;
