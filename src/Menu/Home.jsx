import React from 'react'
import Movies  from "../components/Movies.jsx" 
import CarouselBG from "../components/CarouselBG.jsx"
import Reviews from '../components/Reviews.jsx'
import Branches from "../components/Branches.jsx";
import Footer from "../components/Footer.jsx"
const Home = () => {
  return (
     <div className="overflow-hidden">
     <CarouselBG />
          <Movies />
          <Reviews />
          <Branches />
          <Footer />
    
    
    </div>
  )
}

export default Home