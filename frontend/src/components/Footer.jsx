import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiFacebook ,CiTwitter,CiInstagram,CiLinkedin } from "react-icons/ci";
export default function Footer() {
  return (
    <>
<div className='w-full bg-[#e7f8ee] mt-20'>
  <div className='max-w-[1500px] mx-auto px-4 py-7 flex flex-col md:flex-row justify-between gap-8 md:gap-4'>
    {/* Logo and Contact Info */}
    <div className='flex flex-col gap-5'>
      <img 
        src="https://htmldemo.net/edule/eduLe/assets/images/logo.png" 
        alt="Logo" 
        className='w-32 h-auto'
      />
      <span className='text-2xl'>Caribbean Ct</span>
      <span className='text-[#257a43]'>Haymarket, Virginia (VA).</span>
      <span className='flex gap-2 items-center'>
        <CiMail className='text-2xl text-[#257a43]' />
        example@gmail.com
      </span>
      <span className='flex gap-2 items-center'>
        <CiPhone className='text-2xl text-[#257a43]' />
        +91 658462358
      </span>
      <span className='flex gap-4 text-2xl text-[#257a43]'>
        <CiFacebook />
        <CiTwitter />
        <CiInstagram />
        <CiLinkedin />
      </span>
    </div>

    {/* Category Section */}
    <div className='flex flex-col gap-5'>
      <span className='text-2xl md:text-3xl'>Category</span>
      <span className='text-lg text-gray-500'>Creative Writing</span>
      <span className='text-lg text-gray-500'>Film & Video</span>
      <span className='text-lg text-gray-500'>Graphic Design</span>
      <span className='text-lg text-gray-500'>UI/UX Design</span>
      <span className='text-lg text-gray-500'>Business Analytics</span>
    </div>

    {/* Quick Links Section */}
    <div className='flex flex-col gap-5'>
      <span className='text-2xl md:text-3xl'>Quick Links</span>
      <span className='text-lg text-gray-500'>Creative Writing</span>
      <span className='text-lg text-gray-500'>Film & Video</span>
      <span className='text-lg text-gray-500'>Graphic Design</span>
      <span className='text-lg text-gray-500'>UI/UX Design</span>
      <span className='text-lg text-gray-500'>Business Analytics</span>
    </div>

    {/* Subscribe Section */}
    <div className='flex flex-col gap-5'>
      <span className='text-2xl md:text-3xl'>Subscribe</span>
      <div className='py-3 px-5 bg-white rounded-lg'>
        <input 
          type="text" 
          placeholder='Email' 
          className='w-full focus:outline-none'
        />
      </div>
      <button className='bg-[#257a43] py-3 px-5 text-white text-center text-lg rounded hover:bg-[#1d5c36] transition-colors'>
        Subscribe Now
      </button>
    </div>
  </div>
</div>
    </>
  )
}
