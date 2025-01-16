import React, { useState } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import bgpic1 from "../assets/batman.jpg";
import bgpic2 from "../assets/123.jpg";
import bgpic3 from "../assets/captain.png";

const images = [bgpic1, bgpic2, bgpic3];

const CarouselBG = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
const titles = [
  [ "The Batman", <br key="1" />, "Year One"],
  ["The", <br key="2" />, "Dead Pool"], 
  ["Captain America", <br key="3" />, <h5 className="text-2xl" key="4">The First Avenger</h5>]
];

const description = [
  "Bruce Wayne begins his crusade as Batman, determined to fight the crime and corruption consuming Gotham City. Meanwhile, James Gordon navigates a corrupt police force, seeking justice in a city on the brink of chaos.",
  "Deadpool follows Wade Wilson, a former mercenary who undergoes an experimental treatment to cure his cancer, resulting in accelerated healing powers and disfigurement. As he adopts the persona of Deadpool, he seeks revenge on the man responsible for his transformation",
  "The First Avenger follows Steve Rogers, a weak but determined young man transformed into the super-soldier Captain America during World War II. He battles the Red Skull, who controls the powerful Tesseract, while learning the responsibilities of his new role, ultimately becoming a symbol of hope and bravery."

]

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative  bg-cover bg-no-repeat  bg-center transition-all duration-500" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      {/* Navbar */}
      <Navbar />
<div className="absolute flex  z-40 justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 left-0 right-0 top-60 sm:top-40 md:top-1/2 transform -translate-y-1/2 lg:top-1/2">
  <i 
    onClick={handlePrev} 
    className="fas fa-chevron-left text-white cursor-pointer text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
  ></i>
  <i 
    onClick={handleNext} 
    className="fas fa-chevron-right text-white cursor-pointer text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
  ></i>
</div>


 {/* Main Content */}
      <Main
        title={titles[currentIndex]}
        Description={description[currentIndex]}
        ID={currentIndex + 1}
        
      />
  


      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400 "
            }`}
          ></button>
        ))}
      </div>

 
    

 
   
    </div>
  );
};

export default CarouselBG;
