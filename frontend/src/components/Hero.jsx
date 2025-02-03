import React from 'react';
import Navbar from './Navbar';
import heroImg2 from '../assets/heroImg2.png';

export default function Hero() {
  return (
    <>
      <div className='min-h-screen bg-[#eefbf3] flex flex-col'>
        <Navbar />
        <div className='max-w-[1600px] gap-35 mx-auto flex-grow flex flex-col lg:flex-row px-4 sm:px-6 lg:px-10'>
          {/* Text Content */}
          <div className='w-full lg:w-[35%] flex flex-col justify-center gap-2 text-center lg:text-left'>
            <span className='font-[sans-serif] text-lg sm:text-xl text-[#309255]'>
              Start your favourite course
            </span>
            <span className='font-[sans-serif] text-3xl sm:text-4xl lg:text-5xl text-[#1d2733]'>
              Now learning from
            </span>
            <span className='font-[sans-serif] text-3xl sm:text-4xl lg:text-5xl text-[#1d2733]'>
              anywhere, and
            </span>
            <span className='font-[sans-serif] text-3xl sm:text-4xl lg:text-5xl text-[#1d2733]'>
              build your <span className='text-[#309255]'>bright</span>
            </span>
            <span className='font-[sans-serif] text-3xl sm:text-4xl lg:text-5xl text-[#309255]'>
              career
            </span>
            <span className='text-base sm:text-lg lg:text-xl text-gray-500 mt-5'>
              It has survived not only five centuries but also
            </span>
            <span className='text-base sm:text-lg lg:text-xl text-gray-500'>
              the leap into electronic typesetting.
            </span>
            <button className='bg-[#309255] text-white text-lg sm:text-xl lg:text-2xl py-3 sm:py-4 lg:py-5 rounded-xl mt-5 hover:bg-[#257a43] transition-colors'>
              Start your journey now
            </button>
          </div>

          {/* Image */}
          <div className='w-full lg:w-[65%] flex items-end mt-8 lg:mt-0'>
            <img
              src={heroImg2}
              alt='Hero'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </div>
    </>
  );
}