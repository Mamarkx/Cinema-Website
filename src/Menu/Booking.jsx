import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Booking = () => {
  
  const totalSeats = 60; // Total number of seats
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selection, setSelection] = useState({ movie: "", time: "" });
  const movieTitles = [
    {  id:1,  title: 'Batman Year One' },
    {  id:2,  title: 'DeadPool' },
    {  id:3,  title: 'Spider-Man No Way Home' },
    {  id:4,  title: 'Captain America' },
    {  id:5,  title: 'Iron Man Season 3' },
    {  id:6,  title: 'The Flash' },
    {  id:7,  title: 'Titanic (1997)' },
    {  id:8,  title: 'Titanic (1997)' },
    {  id:9,  title: 'Rush Hour: Season 3 (2007)' },
    {  id:10,  title: 'Star Wars: The Force Awakens (2015)' },
    {  id:11,  title: 'The Lion King (2019)' },
    {  id:12,  title: 'Avengers: Infinity War (2018)' },
    {  id:13,  title: 'Gladiator (2000)' },
    {  id:14,  title: 'The God Father (1972)' },
    {  id:15,  title: 'Good Will Hunting (1997)' },
    {  id:16,  title: 'To Kill A Mockingbird (1962)' },
    {  id:17,  title: "Breakfast at Tiffany's (1961)" },
    {  id:18,  title: 'The Wizard of OZ (1939)' }
  ];
  const movieTimes = [
    { time: '10:00' },
    { time: '14:00' },
    { time: '18:00' },
  ];
  const handleSelectionChange = (e) => {
    const { name, value } = e.target;
    setSelection((prevSelection) => ({
      ...prevSelection,
      [name]: value,
    }));
  };

  const handleSeatClick = (seatIndex) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatIndex)
        ? prevSelectedSeats.filter((seat) => seat !== seatIndex)
        : [...prevSelectedSeats, seatIndex]
    );
  };

  const getSeatStatus = (seatIndex) => {
    return selectedSeats.includes(seatIndex) ? "selected" : "available";
  };

  const calculateTotal = () => {
    return selectedSeats.length * 350; 
  };

  return (
    <>
    <main className="h-auto w-full  bg-[#0A0E1A] text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto mb-12">
        {/* Movie Information */}
        <div className="mb-8">
          <div className="w-full max-w-2xl p-6 bg-gray-800 rounded-lg shadow-lg mx-auto text-white">
            <h2 className="text-lg font-bold mb-4">Movie Selection</h2>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
              <div>
                <label htmlFor="movie" className="block text-sm font-medium mb-2">Select Movie</label>
                <div className="relative">
                  <select
                    name="movie"
                    id="movie"
                    onChange={handleSelectionChange}
                    className="w-full p-3 bg-[#1a1e29] rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">Select a movie</option>
                    {movieTitles.map((movie, index) => (
                      <option key={index} value={movie.title}>{movie.title}</option>
                    ))}
                  </select>
                  <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-2">Select Time</label>
                <div className="relative">
                  <select
                    name="time"
                    id="time"
                    onChange={handleSelectionChange}
                    className="w-full p-3 bg-[#1a1e29] rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">Select a time</option>
                    {movieTimes.map((time, index) => (
                      <option key={index} value={time.time}>{time.time}</option>
                    ))}
                  </select>
                  <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen */}
        <div className="w-full flex flex-col items-center">
          <div className="w-11/12 h-3 bg-gradient-to-b from-blue-400/20 to-transparent"></div>
          <div className="w-11/12 h-12 bg-gradient-to-b from-white/10 to-transparent rounded-t-[100px] transform -scale-y-100"></div>
        </div>

        {/* Seats */}
        <div className="mt-16 mb-8 m-2">
          <div className="grid grid-cols-10  gap-3 justify-items-center">
            {Array.from({ length: totalSeats }).map((_, index) => {
              const status = getSeatStatus(index);
                return (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-500 ${
                    status === "selected" ? "bg-blue-500 scale-110" : "bg-gray-500"
                  }`}
                  onClick={() => handleSeatClick(index)}
                  aria-label={`Seat ${index + 1} ${status}`}
                ></div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-500 rounded-lg"></div>
            <span className="text-sm">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
            <span className="text-sm">Selected</span>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Movie</h2>
            <span className="text-gray-400">
              {selection.movie} {selection.time}
            </span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Booking Summary</h2>
            <span className="text-gray-400">
              Selected Seats: {selectedSeats.length}
            </span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400">
              Regular Seats ({selectedSeats.length})
            </span>
            <span>₱{calculateTotal()}</span>
          </div>
          <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
            <span className="font-semibold">Total</span>
            <span className="font-semibold text-blue-400">
              ₱{calculateTotal()}
            </span>
          </div>
          <button
            className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors transform hover:scale-105"
            disabled={selectedSeats.length === 0}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
         <Footer />
    </main>
 
     </>  
  );
};

export default Booking;
