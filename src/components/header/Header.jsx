import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { Toggle } from '../../context/MenuToggleProvider';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const {isMenuToggleOpen, setIsMenuToggleOpen} = useContext(Toggle)
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setIsMenuToggleOpen(!isMenuToggleOpen)
  };

  return (
    <>
      <div className='h-20 border main flex justify-between items-center px-16 bg-lime-400 relative'>

        {/* Hamburger menu button for small screens */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu}>
            <svg
              className='w-8 h-8 text-gray-700 cursor-pointer'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          {isMenuOpen && (
            <div className='absolute top-full left-0 w-full bg-black text-center rounded-md shadow-lg'>
              <a to='/' className='block px-4 py-2 text-white hover:bg-gray-800'>
                Home
              </a>
              <a href='#about' className='block px-4 py-2 text-white hover:bg-gray-800'>
                About
              </a>
              <a href='#skills' className='block px-4 py-2 text-white hover:bg-gray-800'>
                Skills
              </a>
              <a href='#projects' className='block px-4 py-2 text-white hover:bg-gray-800'>
                Projects
              </a>
              <a href='#contact-me' className='block px-4 py-2 text-white hover:bg-gray-800'>
                Contact
              </a>
            </div>
          )}
        </div>

        {/* Display text and navigation links on larger screens */}
        <div className={`hidden lg:flex items-center space-x-4 ${isMenuOpen ? 'mt-20' : ''}`}>
          <div className='text-3xl font-bold'>Saurav Bharti</div>
          
        </div>
        <div className={`hidden lg:flex items-center space-x-4 ${isMenuOpen ? 'mt-20' : ''}`}>

            <a href='' className='hover:text-blue-500'>
              Home
            </a>
            <a href='#about' className='hover:text-blue-500'>
              About
            </a>
            <a href='#skills'  className='hover:text-blue-500'>
              Skills
            </a>
            <a  href='#projects' className='hover:text-blue-500'>
              Projects
            </a>
            <a href='#contact-me' className='hover:text-blue-500'>
              Contact
            </a>
          </div>

        {/* Download CV button */}
        <div>
            <Link to='https://drive.google.com/file/d/1mUNDI1zKoKk8mwoax_ehj0HGznFfk7Lu/view' className='px-5 py-2 bg-orange-600 rounded-full shadow'>Download CV</Link>
        </div>
      </div>

      {/* Your other content below the header */}
      {/* <div className={`${isMenuOpen ? 'mt-52' : '0'} px-2`}> */}
        {/* Your content goes here */}
        {/* <div>Saurav</div> */}
      {/* </div> */}
    </>
  );
}


