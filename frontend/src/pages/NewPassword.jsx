import React, { useState } from 'react';
import NavigationComponent from '../components/NavigationComponent';
import { CiTurnL1, CiRead, CiUnread } from "react-icons/ci";
import Footer from '../components/Footer';

export default function NewPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <NavigationComponent />
            <div className='flex w-full justify-center mt-10 sm:mt-20 px-4 sm:px-6 lg:px-8'>
                <div className='w-full max-w-[600px]'>
                    <form action="" className='flex flex-col'>
                        <span className='flex justify-between w-full'>
                            <span className='text-3xl sm:text-4xl'>Choose new <span className='text-[#309255]'>Password</span></span>
                        </span>
                        <span className='text-base sm:text-lg mt-3 sm:mt-5'>
                            Almost done. Enter your new password and you're all set.
                        </span>
                        <span className='border border-gray-300 rounded-xl py-3 sm:py-4 px-4 sm:px-5 mt-5 flex items-center'>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder='New Password'
                                className='focus:outline-none w-full'
                            />
                            <span
                                className='text-2xl cursor-pointer ml-2'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <CiRead /> : <CiUnread />}
                            </span>
                        </span>
                        <span className='border border-gray-300 rounded-xl py-3 sm:py-4 px-4 sm:px-5 mt-5 flex items-center'>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder='Confirm Password'
                                className='focus:outline-none w-full'
                            />
                            <span
                                className='text-2xl cursor-pointer ml-2'
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <CiRead /> : <CiUnread />}
                            </span>
                        </span>
                        <button type="submit" className='w-full text-white bg-[#309255] py-2 sm:py-3 text-center text-xl sm:text-2xl rounded-lg mt-5 cursor-pointer hover:bg-[#2a7f4a] transition-colors duration-200'>
                            Reset Password
                        </button>
                        <span className='mt-5 flex gap-3 items-center text-[#309255] cursor-pointer hover:text-[#2a7f4a] transition-colors duration-200'>
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