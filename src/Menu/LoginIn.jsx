import React from 'react';
import Navbar from '../components/Navbar';

const LoginIn = () => {
  return (
    <div className='min-h-screen w-full bg-[#0A0E1A] flex flex-col relative'>
      <div className="absolute inset-0 bg-[url('https://i.postimg.cc/W1Vypv7F/back.jpg')] opacity-10 bg-fixed bg-center bg-cover"></div>
      <Navbar />
      <main className='flex flex-grow items-center  relative z-10 justify-center'>
        <div className="max-w-md w-full bg-white border border-gray-600 p-8 rounded-lg shadow-md">
          <h2 className='text-black text-center text-4xl font-bold mb-6'>Sign In</h2>
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className='text-black mb-2'>Email</label>
              <input 
                type='email' 
                id="email" 
                name="email" 
                className='block border-2 border-black rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                placeholder="Enter your email" 
                required
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="password" className='text-black mb-2'>Password</label>
              <input 
                type='password' 
                id="password" 
                name="password" 
                className='block border-2 border-black rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                placeholder="Enter your password" 
                required
              />
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="rememberMe" 
                  className="mr-2" 
                />
                <label htmlFor="rememberMe" className="text-sm text-gray-600">Remember me</label>
              </div>
              <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-2 text-gray-500">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
           
             <div className="flex justify-center gap-6 items-center">
             <i class="fa-brands fa-google text-xl hover:text-orange-500  transform hover:scale-110"></i>
              <i class="fa-brands fa-facebook-f text-xl  hover:text-blue-700  transform hover:scale-110"></i>
              <i class="fa-brands fa-twitter text-xl hover:text-blue-400  transform hover:scale-110"></i>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginIn;