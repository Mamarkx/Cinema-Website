import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const pic = [
  { img: "/image/Sm.png" },
  { img: "/image/robinson.png" },
  { img: "/image/Trinoma.png" },
  { img: "/image/fairview.png" },
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };


  const testimonials = [
    {
      id: 1,
 text: "My family and I often watch movies together, and CineFree makes it so convenient to book tickets for everyone. I also appreciate the discounts they offer from time to time!",
      rating: "⭐⭐⭐⭐⭐",
      name: "Mczy",
      role: "Customer",
    },
    {
      id: 2,
      text: "My family and I often watch movies together, and CineFree makes it so convenient to book tickets for everyone. I also appreciate the discounts they offer from time to time!",
      rating: "⭐⭐⭐⭐⭐",
      name: "Mczy",
      role: "Customer",
    },
    {
      id: 3,
      text: "My family and I often watch movies together, and CineFree makes it so convenient to book tickets for everyone. I also appreciate the discounts they offer from time to time!",
      rating: "⭐⭐⭐⭐⭐",
      name: "Mczy",
      role: "Customer",
    },
    {
      id: 4,
       text: "My family and I often watch movies together, and CineFree makes it so convenient to book tickets for everyone. I also appreciate the discounts they offer from time to time!",
      rating: "⭐⭐⭐⭐⭐",
      name: "Sky",
      role: "Customer",
    },
    {
      id: 5,
       text: "My family and I often watch movies together, and CineFree makes it so convenient to book tickets for everyone. I also appreciate the discounts they offer from time to time!",
      rating: "⭐⭐⭐⭐⭐",
      name: "Sky",
      role: "Customer",
    },
        {
      id: 6,
       text: "My family and I often watch movies together, and CineFree makes it so convenient to book tickets for everyone. I also appreciate the discounts they offer from time to time!",
      rating: "⭐⭐⭐⭐⭐",
      name: "Sky",
      role: "Customer",
    },
        {
      id: 7,
       text: "My family and I often watch movies together, and CineFree makes it so convenient to book tickets for everyone. I also appreciate the discounts they offer from time to time!",
      rating: "⭐⭐⭐⭐⭐",
      name: "Kelly",
      role: "Customer",
    },
        {
      id: 8,
       text: "My family and I often watch movies together, and CineFree makes it so convenient to book tickets for everyone. I also appreciate the discounts they offer from time to time!",
      rating: "⭐⭐⭐⭐⭐",
      name: "Kelly",
      role: "Customer",
    },
        {
      id: 9,
       text: "My family and I often watch movies together, and CineFree makes it so convenient to book tickets for everyone. I also appreciate the discounts they offer from time to time!",
      rating: "⭐⭐⭐⭐⭐",
      name: "Kelly",
      role: "Customer",
    },
  ];

  

  return (
    <div className="h-auto bg-[#0A0E1A] text-white">
      {/* Title Section */}
      <div className="text-center py-10 mb-14">
        <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-lato">
          What Our Customers Say About CineFree
        </h3>
      </div>

      {/* Testimonials Slider */}
      <div className="flex justify-center items-center px-4 md:px-10 lg:px-20 relative">
        <Slider {...settings} className="w-full">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#D9D9D9] group hover:bg-blue-400 text-black w-full max-w-[300px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[517px] h-auto p-4 md:p-6 rounded-lg shadow-lg mx-auto flex flex-col justify-between transform transition-all duration-300"
            >
              <p className="text-blue-500 group-hover:text-black mb-4 text-center text-3xl md:text-4xl lg:text-5xl">
                <i className="fa-solid fa-quote-left"></i>
              </p>
              <p className="text-gray-700 mb-4 text-base md:text-lg lg:text-xl px-4 md:px-6 lg:px-10 text-justify font-mono">
                {testimonial.text}
              </p>
              <div className="text-yellow-400 text-lg md:text-xl lg:text-2xl text-center">
                {testimonial.rating}
              </div>
              <p className="font-bold text-[18px] md:text-[24px] lg:text-[28px] mt-2 text-center">
                {testimonial.name}
              </p>
              <p className="text-gray-500 text-center">{testimonial.role}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Logos Section */}
      <div className="flex justify-center items-center mt-16 gap-4 md:gap-6 lg:gap-10 flex-wrap">
        {pic.map((pics) => (
          <img
            src={pics.img}
            width={150}
            height={200}
            key={pics.img}
            alt="Logo"
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
