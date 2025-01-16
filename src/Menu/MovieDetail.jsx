import React, { useState } from "react";
import { Play, Clock, Calendar, Star, X , Ticket} from "lucide-react";
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from 'react-router-dom';
import movieData from '../movieData.json'

const MovieDetail = () => {
  const { movieId } = useParams();

   const [showTrailer, setShowTrailer] = useState(false);

  const movie = movieData.find(movie => movie.id === parseInt(movieId));

  if (!movie) return <div>Movie not found!</div>;

  return (
   <div className="w-full min-h-screen bg-[#0A0E1A] text-white">
   <Navbar/>
      {showTrailer && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              aria-label="Close trailer"
            >
              <X size={24} />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src={movie.Trailer}
                title="Inception Trailer"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <div className="relative w-full h-[90vh] bg-black">
        <img
          src={movie.image}
          alt="Movie poster"
          className="w-full h-full object-cover bg-center opacity-50"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-900">
          <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
          <div className="flex space-x-4">
                    <button
            onClick={() => setShowTrailer(true)}
             className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition ">
            <Play size={20} />
            Play Trailer
          </button>
           <Link to={`/booking`}>
              <button
                className="flex items-center gap-2 bg-white text-black px-3 py-3 rounded-lg hover:bg-gray-200 transition"
              >
                <Ticket size={20} />
                Get Ticket
              </button>
            </Link>
          
          </div>

          
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 py-8 pb-12">
        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              {movie.description}
            </p>     
               <div className="flex flex-wrap gap-4 mb-8">         
               <div className="flex items-center gap-2">
                <Clock size={20} className="text-blue-600" />
                <span>{movie.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-blue-600" />
                <span>{movie.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={20} className="text-yellow-500" />
                <span>{movie.rating}</span>
              </div>
              </div>          
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cast</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {movie.actors.map((actor, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={actor.image}
                      alt={actor.name}
                      className="w-full aspect-square object-cover rounded-lg mb-2"
                    />
                    <h3 className="font-medium">{actor.name}</h3>
                    <p className="text-sm text-gray-400">{actor.character}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Genre</h3>
              <div className="flex flex-wrap gap-2">
                {["Action", "Sci-Fi", "Thriller"].map((genre, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Director</h3>
              <p>{movie.Director}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Writers</h3>
              <p>{movie.Writer}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MovieDetail;
