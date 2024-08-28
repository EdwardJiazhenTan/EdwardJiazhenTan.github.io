import React from 'react';

const workItems = [
  {
    title: 'NeRF Web Demo Development',
    date: 'Summer 2024',
    description: 'Created a webpage using React and open-source packages to deploy a NeRF model. Also maintained and reconstructed parts of the backend using Django.',
  },
  {
    title: 'Research Assistant at Peking University',
    date: '2023',
    description: 'Optimized GPU performance and used PyTorch in a computer vision project called Mobile NeRF.',
  },
  {
    title: 'Technical Assistant Interview Prep',
    date: 'June 2024',
    description: 'Prepared for a Technical Assistant role focusing on wafer-scale data and predictive models.',
  },
  {
    title: 'Research in Dental Microbiology',
    date: '2024',
    description: 'Joined a lab investigating the virulence and structure of oral and peri-implant multispecies biofilms.',
  },
];

const Work = () => {
  return (
    <div className="flex justify-center py-6 bg-[#8a8d8c]">
      <div className="w-2/3">
        <h2 className="text-4xl justify-center items-center font-bold ">My Work</h2>
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
