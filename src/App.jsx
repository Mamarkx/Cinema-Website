
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Menu/Home.jsx';  
import Movies from './Menu/Movies.jsx';  
import Booking from './Menu/Booking.jsx';
import Contact from './Menu/Contact.jsx';
import MovieDetail from './Menu/MovieDetail.jsx';
import LoginIn from './Menu/LoginIn.jsx';
function App() {


  return (
    <>
    <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/login" element={<LoginIn />} />
        </Routes>
    </Router>
    
    </>
   
   
        
   

  );
}

export default App
