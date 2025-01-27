import React from 'react'
import logoImg from '../assets/logo.webp';

export default function Navbar() {
    return (
        <>
<div className="mx-76 border border-gray-300 rounded-2xl px-7 py-7 bg-none flex justify-between items-center font-[sans-serif]">
  <div>
    <img src={logoImg} alt="Logo" className="h-10" />
  </div>
  <div>
    <ul className="inline-flex text-xl text-[#212832] space-x-8">
      <li className='hover:text-[#309255] transition duration-300'>Home</li>
      <li className='hover:text-[#309255] transition duration-300'>All Courses</li>
      <li className='hover:text-[#309255] transition duration-300'>Pages</li>
      <li className='hover:text-[#309255] transition duration-300'>Blog</li>
      <li className='hover:text-[#309255] transition duration-300'>Contact</li>
    </ul>
  </div>
  <div className=" space-x-4 text-xl">
    <span>Sign In</span>
    <span className='bg-white py-4 px-7 border border-[#309255] rounded-xl hover:text-white hover:bg-[#309255] transition duration-300'>Sign Up</span>
  </div>
</div>

        </>
    )
}
