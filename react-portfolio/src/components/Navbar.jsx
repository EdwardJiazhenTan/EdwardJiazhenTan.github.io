import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#8a8d8c] text-[#d9cbb0]'>
      {/* Menu */}
      <div>
        <ul className='hidden md:flex'>
          <li>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to='projects' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Social icons */}
      <div className='flex space-x-4'>
        <a
          className='flex justify-between items-center text-gray-300'
          href='https://www.linkedin.com/in/edward-j-tan/'
        >
          <FaLinkedin size={30} />
        </a>
        <a
          className='flex justify-between items-center text-gray-300'
          href='https://github.com/EdwardJiazhenTan'
        >
          <FaGithub size={30} />
        </a>
        <a
          className='flex justify-between items-center text-gray-300'
          href="mailto:etan7@u.rochester.edu"
        >
          <HiOutlineMail size={30} />
        </a>
        <a
          className='flex justify-between items-center text-gray-300'
          href='/'
        >
          <BsFillPersonLinesFill size={30} />
        </a>
      </div>
    </div>
  )
}

export default Navbar
