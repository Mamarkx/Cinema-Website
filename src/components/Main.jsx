import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Ticket, X } from 'lucide-react';
import movieData from '../movieData.json'

const Main = ({ title, Description, ID , images , currentIndex ,setCurrentIndex }) => {
  const [open, setOpen] = useState(false);
    const movie = movieData.find(movie => movie.id === ID);
  const handleTrailerClick = () => {
    setOpen(true);
  };

  return (
    <div className="mx-4 relative md:mx-20 min-h-screen w-auto text-white ">
    <div className="flex flex-col md:flex-row justify-between">
      {open  && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              aria-label="Close trailer"
            >
              <X size={24} />
            </button>  
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src={movie.Trailer}
                title={`${movie.title} Trailer`}
                allowFullScreen 
              ></iframe>
            </div>
          </div>
        </div>
      )}
      {/* Content Section */}
      <div className="content mt-6 w-full text-center md:mr-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-10 md:mb-20 text-white mt-4 font-spiderman tracking-widest">
          {title}
        </h1>
        {/* Button Genre Section */}
        <div className="side-content w-full mx-auto text-center">
          <div className="btn-genre flex flex-wrap justify-center gap-3 md:gap-5 max-w-[500px] mx-auto">
            <div className="button border-2 border-[#18158B] rounded-xl px-4 py-2">
              Action
            </div>
            <div className="button border-2 border-[#18158B] rounded-xl px-4 py-2">
              Thriller
            </div>
            <div className="button border-2 border-[#18158B] rounded-xl px-4 py-2">
              Revenge
            </div>
          </div>

          {/* Description Section */}
          <div className="description mt-6">
            <p className="max-w-[500px] mx-auto text-justify text-base md:text-xl px-4 md:px-0">
              {Description}
            </p>
          </div>

          {/* Information Section */}
          <div className="info flex flex-wrap justify-center sm:justify-center lg:justify-start gap-4 pt-2 max-w-[500px] mx-auto mt-4 md:mt-2 text-base md:text-lg">
            <div className="flex items-center">
              <i className="fa-regular fa-clock" style={{ color: "#299DCF" }}></i>
              <span className="ml-2 text-white">152 Minutes</span>
            </div>
            <div className="flex items-center">
              <i className="fa-regular fa-star" style={{ color: "#299DCF" }}></i>
              <span className="ml-2 text-white">9.8/10</span>
            </div>
            <div className="flex items-center">
              <i className="fa-regular fa-calendar" style={{ color: "#299DCF" }}></i>
              <span className="ml-2 text-white">Now Showing</span>
            </div>
          </div>

          {/* Trailer and Ticket Buttons Section */}
          <div className="trailer-ticket-buttons flex flex-wrap justify-center gap-2 lg:gap-12 lg:pl-2 4 max-w-[500px] mx-auto mt-5 sm:justify-center lg:justify-start">
            <button
              onClick={handleTrailerClick} // Open the trailer modal
              className="w-[200px] h-[60px] rounded-xl flex items-center justify-center space-x-2 bg-[#18158B] border-2 border-transparent transition-all duration-300 transform hover:bg-transparent hover:border-[#18158B] hover:scale-105"
            >
              <i className="fa-solid fa-circle-play text-white" style={{ fontSize: "20px" }}></i>
              <span className="text-white text-sm md:text-lg">Watch Trailer</span>
            </button>
            <Link to={"/booking"}>
              <button className="w-[200px] h-[60px] rounded-xl flex items-center justify-center space-x-2 border-2 bg-[#18158B] border-transparent transition-all duration-300 transform hover:bg-[#18158B00] hover:border-[#18158B] hover:scale-105">
                <Ticket />
                <span className="text-white text-sm md:text-lg">Get Ticket</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="img w-full mt-2 md:mt-0">
        {/* Add your image or content here */}
      </div>
      
    </div>
   <div className="flex justify-center mt-12 pb-7 lg:mt-48 ">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Main;
