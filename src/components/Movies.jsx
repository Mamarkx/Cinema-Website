import React from 'react'
import {Link} from 'react-router-dom';


const Movies = () => {

const Firstmovie = [{ id: 1 ,alt: 'Batman Year One', image: '/movie-card/batmanPoster.jpg' , title: 'Batman Year One' },
{  id: 2 , alt: 'DeadPool', image: '/movie-card/Deadpool.jpg' , title: 'DeadPool'  },
{  id: 3 , alt: 'SpiderMan', image: '/movie-card/spida.jpg' , title: 'Spider-Man No way Home'  },
{  id: 4 , alt: 'Captain America', image: '/movie-card/capt.jpg' , title: 'Captain America'  },
{  id: 5 , alt: 'Iron Man', image: '/movie-card/iron.jpg' , title: 'Iron Man Season 3' },
{  id: 6 , alt: 'Flash', image: '/movie-card/flash.jpg' , title: 'The Flash' }
]

const Secondmovie = [{  id: 7 ,alt: 'Titanic', image: '/movie-card/ticati.jpg' , title: 'Titanic (1997)' },
{   id: 8 ,  alt: 'Avatar', image: '/movie-card/avatar.jpg' , title: 'Avatar (2009)'  },
{  id: 9 , alt: 'Rush Hour: Season 3', image: '/movie-card/rush-hour.jpg' , title: 'Rush Hour: Season 3 (2007)'  },
{  id: 10 , alt: 'Star Wars: The Force Awakens', image: '/movie-card/tsar.jpg' , title: 'Star Wars: The Force Awakens (2015)'  },
{   id: 11 ,alt: 'The Lion King', image: '/movie-card/lion.jpg' , title: 'The Lion King (2019)' },
{   id: 12 ,  alt: 'Avengers: Infinity War', image: '/movie-card/avenger.jpg' , title: 'Avengers: Infinity War (2018)' }
]

return (
  <div className="h-auto bg-[#0A0E1A] py-8">
    {/* First Set Card */}
    <div className="px-4 sm:px-6 md:px-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">Now Showing</h2>
        <Link to="/movies" href="#" className="text-blue-400 text-sm sm:text-base">See all →</Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Firstmovie.map((item) => (
            <Link to={`/movie/${item.id}`}>
          <div key={item.id}>
            <div className="bg-white w-full max-w-[272px] h-[200px] sm:h-[260px] md:h-[345px] overflow-hidden mx-auto">
              <img
                src={item.image} 
                alt={item.alt}
                className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
              />
            </div>
            <div className="text-white mt-2 text-center text-sm sm:text-base">{item.title}</div>
          </div>
           </Link>
        ))}
      </div>
    </div>
    {/* Second Set Card */}
    <div className="px-4 py-6 sm:px-6 md:px-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">Most Popular</h2>
        <Link to="/movies" href="#" className="text-blue-400 text-sm sm:text-base">See all →</Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Secondmovie.map((items) => (
            <Link to={`/movie/${items.id}`}>
          <div key={items.id}>
            <div className="bg-white w-full max-w-[272px] h-[200px] sm:h-[260px] md:h-[345px] overflow-hidden mx-auto">
              <img
                src={items.image}
                alt={items.alt}
                className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
              />
            </div>
            <div className="text-white mt-2 text-center text-sm sm:text-base">{items.title}</div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

}

export default Movies; 