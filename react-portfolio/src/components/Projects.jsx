import React from 'react';

import image1 from '../assets/coding.jpeg';
import image2 from '../assets/thinking.jpeg';
import image3 from '../assets/thinking2.jpeg';

const projects = [
  {
    title: "rfviser",
    description: "An library for interactive 3D visualization in Python.",
    image: image1,
    link: "https://github.com/EdwardJiazhenTan/rfviser",
  },
  {
    title: "Gaussian splat rendeer",
    description: "A web-based tool for rendering 3D Gaussian splats in react.",
    image: image2,
    link: "https://github.com/EdwardJiazhenTan/react-gaussian-splat",
  },
  {
    title: "Portfolio",
    description: "This portfolio website, that was built using React and Tailwind CSS.",
    image: image3,
    link: "https://github.com/EdwardJiazhenTan/EdwardJiazhenTan.github.io",
  },
];

const Project = () => {
  return (
    <div name="projects" className="bg-[#8a8d8c] w-full h-screen py-12">
      {/* Add top padding to offset the navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[100px]">
        <div>
          <p className='text-4xl font-bold text-center inline border-b-4 border-[#d9cbb0] '>Projects</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border-[#d9cbb0] shadow-lg rounded-lg overflow-hidden">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
              </a>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
