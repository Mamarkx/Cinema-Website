import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import profile from "../assets/pic.png";
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-[#1B212E]  bg-opacity-30 relative text-white w-full mb-8">
      <div className="container px-4 mx-auto">
        {/* Top bar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center">
           <Link to="/" ><img src={logo} alt="CineFree logo" className="w-22 h-12" /></Link>
            <Link to="/" className="hover:text-gray-300 text-4xl">CineFree</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-20 font-rocknroll">
            <Link to="/" className="relative text-xl w-auto mx-auto hover:text-gray-300 group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full md:group-hover:w-20 md:group-hover:left-1/2 md:group-hover:-translate-x-1/2"></span>
            </Link>
            <Link to="/movies" className="relative text-xl w-auto mx-auto hover:text-gray-300 group">
              Movies
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full md:group-hover:w-20 md:group-hover:left-1/2 md:group-hover:-translate-x-1/2"></span>
            </Link>
            <Link to="/booking" className="relative text-xl w-auto mx-auto hover:text-gray-300 group">
              Booking
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full md:group-hover:w-20 md:group-hover:left-1/2 md:group-hover:-translate-x-1/2"></span>
            </Link>
            <Link to="/contact" className="relative text-xl w-auto mx-auto hover:text-gray-300 group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full md:group-hover:w-20 md:group-hover:left-1/2 md:group-hover:-translate-x-1/2"></span>
            </Link>
          </div>

          {/* Desktop Search and Profile */}
          <div className="hidden md:flex items-center space-x-4">
               <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-200 text-black rounded-full pl-6 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <i className="fa-solid fa-search text-black  w-5 h-5"></i>
          </span>
        </div>
        <Link to="/login">
          <img src={profile} alt="User profile" className="w-11  h-10 rounded-full cursor-pointer" />
        </Link>

          </div>

          {/* Mobile Profile and Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
        <Link to="/login">
          <img src={profile} alt="User profile" className="w-11  h-10 rounded-full cursor-pointer" />
        </Link>
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden w-auto bg-gray-800 text-white p-4 m-2 rounded-lg mt-2 z-50 absolute top-14 left-0 right-0 transition-transform transform duration-300 ease-in-out">
            {/* Navigation Links */}
    <div className="flex flex-col text-center space-y-4">
      <Link to="/" className="relative text-xl w-auto mx-auto hover:text-gray-300 group">
        Home
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full md:group-hover:w-20 md:group-hover:left-1/2 md:group-hover:-translate-x-1/2"></span>
      </Link>
      <Link to="/movies" className="relative text-xl w-auto mx-auto hover:text-gray-300 group">
        Movies
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full md:group-hover:w-20 md:group-hover:left-1/2 md:group-hover:-translate-x-1/2"></span>
      </Link>
      <Link to="/booking" className="relative text-xl w-auto mx-auto hover:text-gray-300 group">
        Booking
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full md:group-hover:w-20 md:group-hover:left-1/2 md:group-hover:-translate-x-1/2"></span>
      </Link>
      <Link to="/contact" className="relative text-xl w-auto mx-auto hover:text-gray-300 group">
        Contact Us
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full md:group-hover:w-20 md:group-hover:left-1/2 md:group-hover:-translate-x-1/2"></span>
      </Link>
    </div>

    {/* Mobile Search */}
    <div className="relative mt-4 w-full">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-gray-200 text-black rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
      </span>
    </div>
  </div>
)}


      </div>
    </nav>
  );
};

export default Navbar;
