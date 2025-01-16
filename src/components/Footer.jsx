import React from 'react';
import Plane from '../assets/paper-plane.png';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='bg-[#1B212E] h-auto w-full py-8'>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          <div className="footer-menu">
            <h2 className='text-white text-2xl mb-4'>About us</h2>
            <p className='text-[#61696C] text-lg'>
              CineFree is your one-stop destination for booking movie tickets with ease. Explore the latest blockbusters, enjoy premium cinema experiences, and book tickets anytime, anywhere.
            </p>
          </div>
          <div className="footer-menu">
            <h2 className='text-white text-2xl mb-4'>Cinema Policies</h2>
            <ul className='text-[#61696C] text-lg space-y-2'>
              <li className='hover:text-[#a6aeb1]'>Booking Policy</li>
              <li className='hover:text-[#a6aeb1]'>Cancellation & Refund Policy</li>
              <li className='hover:text-[#a6aeb1]'>Seating Policy</li>
              <li className='hover:text-[#a6aeb1]'>Ticketing Terms</li>
            </ul>
          </div>
          <div className="footer-menu">
            <h2 className='text-white text-2xl mb-4'>Legal Information</h2>
            <ul className='text-[#61696C] text-lg space-y-2'>
              <li className='hover:text-[#a6aeb1]'>Copyright Notice</li>
              <li className='hover:text-[#a6aeb1]'>Terms of Service</li>
              <li className='hover:text-[#a6aeb1]'>Disclaimers</li>
              <li className='hover:text-[#a6aeb1]'>FAQs</li>
              <li className='hover:text-[#a6aeb1]'>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-menu">
            <h2 className='text-white text-2xl mb-4'>Newsletter</h2>
            <p className='text-[#61696C] text-lg mb-4'>
              Sign up for our newsletter to get updates on the latest movies, exclusive deals, and more!
            </p>
            <div className='flex items-center w-full bg-white text-black h-[50px] rounded-full'>
              <input
                type='text'
                placeholder='Email Address'
                className='flex-grow ml-4 outline-none bg-transparent'
                aria-label='Email for newsletter'
              />
              <img src={Plane} className='w-[30px] h-[30px] mr-4 cursor-pointer' alt='Send' />
            </div>
          </div>
        </div>
        <hr class="h-[2px] my-2 mx-8 bg-gray-200 border-0 dark:bg-gray-700 "></hr>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-8">
          <div className="flex items-center mb-4 lg:mb-0">
            <img src={Logo} alt="logo" className="w-20 h-10" />
            <a href="#" className="hover:text-gray-300 text-2xl text-white ml-2">CineFree</a>
          </div>
          <div className="text-[#61696C] text-lg">&copy; {new Date().getFullYear()} CineFree. All Rights Reserved.</div>
          <div className="social-media flex space-x-4 mt-4 lg:mt-0">
            <i className="fa-brands fa-facebook-f" style={{color: '#ffffff'}}></i>
            <i className="fa-brands fa-instagram" style={{color: '#ffffff'}}></i>
            <i className="fa-brands fa-twitter" style={{color: '#ffffff'}}></i>
            <i className="fa-brands fa-youtube" style={{color: '#ffffff'}}></i>
          </div>
        </div>
        <h2 className='text-center text-[#61696C]'>Created By Mamark</h2>
      </div>
    </div>
  );
}

export default Footer;
