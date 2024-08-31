import React from 'react';

const workItems = [
  {
    title: 'Research Assistant at Peking University',
    date: '05-2024',
    description: 'Develop render tools for 3d gaussian splat cloud rendering. Designed front-end interface of web demo.',
  },
  {
    title: 'Web Developer at University of Rochester',
    date: '01-2024',
    description: 'Designed a website for the University of Rochester’s Painting club.',
  },
  {
    title: 'Teaching Assistant at University of Rochester',
    date: '01-2023',
    description: 'Helped students in CSC 172: Data Structures and Algorithms with Java programming assignments.',
  },
  {
    title: 'Starbucks Barista',
    date: '06-2022',
    description: 'Collaborated with team members to provide excellent customer service. Maintained a clean and organized work environment.',
  }
];

const Work = () => {
  return (
    <div name = "work" className="w-full h-screen flex justify-center py-6 bg-[#8a8d8c]">
      <div className="w-2/3 pt-[100px]">
      <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#d9cbb0] pt-[100px] '>My work</p>
        </div>
        <br/>
        <div className="relative border-l-2 border-gray-300">
          {workItems.map((item, index) => (
            <div className="mb-12 ml-6 max-w-[1000px] grid sm:grid-cols-2" key={index}>
              <div className="absolute -left-3 top-0 w-6 h-6 bg-[#d9cbb0] rounded-full border-2 border-white"></div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-[#282112]">{item.date}</p>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
