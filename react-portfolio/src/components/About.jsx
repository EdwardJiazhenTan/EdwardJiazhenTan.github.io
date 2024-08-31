import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../photos/edward1.jpeg';
import image2 from '../photos/edward2.jpeg';
import image3 from '../photos/edward3.jpeg';
import image4 from '../photos/edward4.jpeg';
import image5 from '../photos/edward5.jpeg';
import image6 from '../photos/edward6.jpeg';


const About = () => {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // Enables automatic sliding
    autoplaySpeed: 3000,     // Time in milliseconds between slides (3 seconds here)
  };
  

  return (
    <div name = "about" className="flex flex-col items-center py-12 bg-[#8a8d8c]">
      <div className = 'pt-[100px]'>
          <p className='text-4xl font-bold inline border-b-4 border-[#d9cbb0]'>About Me</p>
        </div>
      
      <div className="flex flex-wrap justify-center items-start w-full max-w-5xl">
        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:w-2/3 p-4">
          <div className="text-center md:text-left">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Hi, I'm Edward Tan, a rising senior in computer science. I am currently looking for a software engineering role. I am passionate about coding and learning new technologies.
              </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              When I'm not busy working on research or coding, I enjoy playing video games, listening to classical music, working out, and cooking.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I also have a Scottish Fold cat named Diandian, who adds a bit of playful charm to my daily routine. Speaking of routine, I love having a fixed routine in my life – it makes me feel like I have control over things and keeps me on track.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Whether it's studying or working, I thrive in quiet places where I can be super efficient. Having that peaceful environment helps me focus and get things done.
            </p>
          </div>
        </div>
        
        {/* Image Slider Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="w-full">
            <Slider {...settings}>
              <div>
                <img src={image1} alt="Edward 1" className="w-full h-auto object-cover rounded-lg shadow-lg" />
              </div>
              <div>
                <img src={image2} alt="Edward 2" className="w-full h-auto object-cover rounded-lg shadow-lg" />
              </div>
              <div>
                <img src={image3} alt="Edward 3" className="w-full h-auto object-cover rounded-lg shadow-lg" />
              </div>
              <div>
                <img src={image4} alt="Edward 4" className="w-full h-auto object-cover rounded-lg shadow-lg" />
              </div>
              <div>
                <img src={image5} alt="Edward 5" className="w-full h-auto object-cover rounded-lg shadow-lg" />
              </div>
              <div>
                <img src={image6} alt="Edward 6" className="w-full h-auto object-cover rounded-lg shadow-lg" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
