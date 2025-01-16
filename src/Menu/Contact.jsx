import React from 'react';
import Navbar from '../components/Navbar.jsx';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Clapperboard,
  Send
} from "lucide-react";

const Contact = () => {
  return (
    <div className='relative w-full min-h-screen bg-[#0A0E1A]'>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3')] opacity-30 bg-fixed bg-center bg-cover"></div>
      <div className="relative z-10">
        <Navbar />
        <main className="text-white">
          <div className="flex flex-col items-center">
            <Clapperboard className='w-16 h-16 text-red-500 mb-4' />
            <h1 className='text-5xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent pb-4'>Contact Us</h1>
            <p className='text-gray-400 text-center max-w-2xl'>
              Have questions about movies, showtimes, or special events? We're here to help make your
              cinema experience extraordinary.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-4">
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="bg-red-500 w-2 h-8 rounded mr-3"></span>
                  Send us a Message
                </h2>
                <form className='w-full'>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="name">
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                      <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" required placeholder="Your Name" aria-label="Name" />
                    </div>
                    <div className="email">
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                      <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" required placeholder="Your Email" aria-label="Email" />
                    </div>
                  </div>
                  <div className="subject pt-6">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                    <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" required placeholder="Subject" aria-label="Subject" />
                  </div>
                  <div className="message pt-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                    <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" required placeholder="Your message" aria-label="Message"></textarea>
                  </div>
                  <div className="flex justify-center px-4 pt-4">
                    <button type='submit' className='inline-flex justify-center w-52 bg-gradient-to-r from-red-500 to-red-700 p-4 rounded-lg transition-transform transform hover:scale-105'>
                      Send Message <Send className='ml-2' />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="bg-red-500 w-2 h-8 rounded mr-3"></span>
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                    <Phone className="h-6 w-6 text-red-500" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                    <Mail className="h-6 w-6 text-red-500" />
                    <span>contact@cinemaname.com</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                    <MapPin className="h-6 w-6 text-red-500" />
                    <span>123 Movie Street, Cinema City, CC 12345</span>
                  </div>
                  <div className="flex space-x-6 pt-4 justify-center">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110"
                    >
                      <Facebook className="h-7 w-7" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110"
                    >
                      <Twitter className="h-7 w-7" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110"
                    >
                      <Instagram className="h-7 w-7" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Contact;