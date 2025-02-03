import React from 'react';
import NavigationComponent from '../components/NavigationComponent';
import { CiTurnL1 } from "react-icons/ci";
import Footer from '../components/Footer';

export default function ResetPassword() {
  return (
    <>
      <NavigationComponent />
      <div className='flex w-full justify-center mt-10 sm:mt-20 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-[600px]'>
          <form action="" className='flex flex-col'>
            <span className='flex justify-between w-full'>
              <span className='text-3xl sm:text-4xl'>Reset <span className='text-[#309255]'>Password</span></span>
            </span>
            <span className='text-base sm:text-lg mt-3 sm:mt-5'>
              Have no fear. We’ll email you instructions to reset your password. If you don't have access to your email, we can try account recovery.
            </span>
            <span className='border border-gray-300 rounded-xl py-3 sm:py-4 px-4 sm:px-5 mt-5'>
              <input type="text" placeholder='Email' className='focus:outline-none w-full' />
            </span>
            <span className='w-full text-white bg-[#309255] py-2 sm:py-3 text-center text-xl sm:text-2xl rounded-lg mt-5 cursor-pointer'>
              Reset Password
            </span>
            <span className='mt-5 flex gap-3 items-center text-[#309255] cursor-pointer'>
              <CiTurnL1 className='text-xl' />
              <span className='text-base sm:text-lg'>Back to login</span>
            </span>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}