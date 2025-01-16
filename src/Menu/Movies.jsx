import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import Footer  from '../components/Footer'; 
const Movies = () => {

  const Firstmovie = [
    { id: 1, alt: 'Batman Year One', image: '/movie-card/batmanPoster.jpg', title: 'Batman Year One' },
    { id: 2, alt: 'DeadPool', image: '/movie-card/Deadpool.jpg', title: 'DeadPool' },
    { id: 3, alt: 'SpiderMan', image: '/movie-card/spida.jpg', title: 'Spider-Man No way Home' },
    { id: 4, alt: 'Captain America', image: '/movie-card/capt.jpg', title: 'Captain America' },
    { id: 5, alt: 'Iron Man', image: '/movie-card/iron.jpg', title: 'Iron Man Season 3' },
    { id: 6, alt: 'Flash', image: '/movie-card/flash.jpg', title: 'The Flash' }
  ];

  const Secondmovie = [
    { id: 7, alt: 'Titanic', image: '/movie-card/ticati.jpg', title: 'Titanic (1997)' },
    { id: 8, alt: 'Avatar', image: '/movie-card/avatar.jpg', title: 'Avatar (2009)' },
    { id: 9, alt: 'Rush Hour: Season 3', image: '/movie-card/rush-hour.jpg', title: 'Rush Hour: Season 3 (2007)' },
    { id: 10, alt: 'Star Wars: The Force Awakens', image: '/movie-card/tsar.jpg', title: 'Star Wars: The Force Awakens (2015)' },
    { id: 11, alt: 'The Lion King', image: '/movie-card/lion.jpg', title: 'The Lion King (2019)' },
    { id: 12, alt: 'Avengers: Infinity War', image: '/movie-card/avenger.jpg', title: 'Avengers: Infinity War (2018)' }
  ];
  
  const Classic = [
    { id: 13, alt: 'Gladiator', image: '/movie-card/gladiator.jpg', title: 'Gladiator (2000)' },
    { id: 14, alt: 'GodFather', image: '/movie-card/godfather.jpg', title: 'The God Father (1972)' },
    { id: 15, alt: 'Good Will Hunting', image: '/movie-card/good.jpg', title: 'Good Will Hunting (1997)' },
    { id: 16, alt: 'To Kill A Mockingbird', image: '/movie-card/mocking.jpg', title: 'To Kill A Mockingbird(1962)' },
    { id: 17, alt: "Breakfast at Tiffany's", image: '/movie-card/breakfast.jpg', title: "Breakfast at Tiffany's(1961)" },
    { id: 18, alt: 'The Wizard of OZ', image: '/movie-card/wizard.jpg', title: 'The Wizard of OZ(1939)' }
  ];

  return (
    <>
    <div className=' relative bg-[#0A0E1A] h-auto'>
      <Navbar />
      {/* First Set Card */}
      <div className="px-4 sm:px-6 md:px-10 relative">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">Now Showing</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Firstmovie.map((item) => (
            <div key={item.id}>
              <Link to={`/movie/${item.id}`}>
                <div className="bg-white w-full max-w-[272px] h-[200px] sm:h-[260px] md:h-[345px] overflow-hidden mx-auto">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
                  />
                </div>
                <div className="text-white mt-2 text-center text-sm sm:text-base">{item.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Second Set Card */}
      <div className="px-4 py-6 sm:px-6 md:px-10">
        <div className="flex  items-center mb-5">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">Most Popular</h2>
   
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Secondmovie.map((items) => (
            <div key={items.id}>
              <Link to={`/movie/${items.id}`}>
                <div className="bg-white w-full max-w-[272px] h-[200px] sm:h-[260px] md:h-[345px] overflow-hidden mx-auto">
                  <img
                    src={items.image}
                    alt={items.alt}
                    className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
                  />
                </div>
                <div className="text-white mt-2 text-center text-sm sm:text-base">{items.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
       <div className="px-4 py-6 sm:px-6 md:px-10">
        <div className="flex  items-center mb-5">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">Top Picks Classic</h2>
 
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Classic.map((Classics) => (
            <div key={Classics.id}>
              <Link to={`/movie/${Classics.id}`}>
                <div className="bg-white w-full max-w-[272px] h-[200px] sm:h-[260px] md:h-[345px] overflow-hidden mx-auto">
                  <img
                    src={Classics.image}
                    alt={Classics.alt}
                    className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
                  />
                </div>
                <div className="text-white mt-2 text-center text-sm sm:text-base">{Classics.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
     
    </div>
     <Footer />
     </>
    
  )
}

export default Movies;
