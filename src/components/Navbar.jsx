import React, { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { MdEvent } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../image/Logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side - Logo */}
      <div className='flex items-center'>
        {!nav && (
          <img src={logo} alt="Logo" className="h-6 sm:h-8 lg:h-10 w-auto ml-2" />
        )}
      </div>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex text-lg font-semibold'>
        <ul className='flex justify-between w-[200px] px-[5rem] sm:w-[400px] lg:w-[500px] '>
          <li><Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">Home</Link></li>
          <li><Link to="/events" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">Events</Link></li>
          <li><Link to="/about" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">About</Link></li>
        </ul>
      </nav>

      <div className='hidden md:block '>
        <button className='bg-gray-800 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-gray-700 transition duration-200 w-full sm:w-auto'>Sign In</button>
      </div>
      
      {/* Mobile Menu Button */}
      <div className='md:hidden cursor-pointer' onClick={() => setNav(!nav)}>
        <AiOutlineMenu size={30} />
      </div>
      
      {/* Mobile Menu Overlay */}
      {nav && <div className='bg-black/80 fixed w-full h-screen top-0 left-0 z-10' onClick={() => setNav(false)}></div>}
      
      {/* Mobile Side Menu */}
      <div className={`${nav ? 'fixed' : 'hidden'} top-0 right-0 w-[300px] h-screen bg-white z-20 shadow-lg`}>
        <div className='flex justify-between items-center p-4'>
          <img src={logo} alt="Logo" className="h-6 sm:h-8 w-auto" />
          <AiOutlineClose size={30} className='cursor-pointer' onClick={() => setNav(false)} />
        </div>
        
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li><Link to="/" className='text-xl py-4 flex items-center' onClick={() => setNav(false)}><IoHome size={25} className='mr-4' />Home</Link></li>
            <li><Link to="/events" className='text-xl py-4 flex items-center' onClick={() => setNav(false)}><MdEvent size={25} className='mr-4' />Events</Link></li>
            <li><Link to="/about" className='text-xl py-4 flex items-center' onClick={() => setNav(false)}><FaInfoCircle size={25} className='mr-4' />About</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
