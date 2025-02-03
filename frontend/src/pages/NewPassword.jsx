import React from 'react'
import NavigationComponent from '../components/NavigationComponent'
import { CiTurnL1 , CiRead , CiUnread } from "react-icons/ci";
import Footer from '../components/Footer';
import { useState } from 'react';

export default function NewPassword() {
        const [showPassword, setShowPassword] = useState(false);
        // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    
  return (
    <>
    <NavigationComponent/>
    <div className='flex w-full justify-center mt-20'>
    <div className='w-full  lg:w-lg'>
                        <form action="" className='flex flex-col'>
                            <span className='flex justify-between w-full'>
                                <span className='text-3xl sm:text-4xl'>Choose new <span className='text-[#309255]'>Password</span></span>
                            </span>
                            <span className='text-lg'>
                            Almost done. Enter your new password and youre all set.                            </span>
                            {/* <span className='border border-gray-300 rounded-xl py-3 sm:py-4 px-4 sm:px-5 mt-5'><input type="text" placeholder='Name' className='focus:outline-none w-full' /></span> */}
                            {/* <span className='border border-gray-300 rounded-xl py-3 sm:py-4 px-4 sm:px-5 mt-5'><input type="text" placeholder='Last Name' className='focus:outline-none w-full' /></span> */}
                        <span className='border border-gray-300 rounded-xl py-3 sm:py-4 px-4 sm:px-5 mt-5 flex items-center'>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder='New Password'
                                className='focus:outline-none w-full'
                            />
                            <span
                                className='text-2xl cursor-pointer'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <CiRead /> : <CiUnread />}
                            </span>
                        </span>
                        <span className='border border-gray-300 rounded-xl py-3 sm:py-4 px-4 sm:px-5 mt-5 flex items-center'>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder='Confirm Password'
                                className='focus:outline-none w-full'
                            />
                            <span
                                className='text-2xl cursor-pointer'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <CiRead /> : <CiUnread />}
                            </span>
                        </span>
                            <span className='w-full text-white bg-[#309255] py-2 sm:py-3 text-center text-xl sm:text-2xl rounded-lg mt-5'>Reset Password</span>
                            <span className='mt-5 flex gap-3'><CiTurnL1 className='text-xl'/>Back to login</span>
                        </form>
                    </div>
    </div>
    <Footer/>

    </>
  )
}
