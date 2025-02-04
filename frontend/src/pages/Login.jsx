import React from 'react'
import { useState } from 'react';
import { CiMedal, CiRead, CiUnread } from 'react-icons/ci';
import NavigationComponent from '../components/NavigationComponent';
import Footer from '../components/Footer';


export default function Login() {
    const [selectedRole, setSelectedRole] = useState("student");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
        <NavigationComponent/>
        <div className='max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 border border-gray-400 py-10 rounded-xl flex flex-col lg:flex-row justify-around mt-10 gap-10'>
                <div className='bg-[#e7f8ee] p-5 rounded-xl flex justify-center'>
                    <img src="https://htmldemo.net/edule/eduLe/assets/images/register-login.png" alt="" className='w-full max-w-[400px]' />
                </div>

                <div className='w-full lg:w-lg flex flex-col justify-center'>
                    <form action="" className='flex flex-col '>
                        <span className='flex justify-between w-full'>
                            <span className='text-3xl sm:text-4xl'>Welcome <span className='text-[#309255]'>Back</span></span>
                        </span>
                        {/* <span className='flex gap-5 rounded-xl mt-5'>
                            <span
                                className={`py-2 px-4 sm:px-7 text-lg sm:text-xl rounded-lg cursor-pointer transition-all inline-flex ${selectedRole === "student"
                                    ? "bg-[#309255] text-white"
                                    : "bg-[#e7f8ee] text-[#309255]"
                                    }`}
                                onClick={() => setSelectedRole("student")}
                            >
                                Student
                            </span>

                            <span
                                className={`py-2 px-4 sm:px-7 text-lg sm:text-xl rounded-lg cursor-pointer transition-all inline-flex ${selectedRole === "instructor"
                                    ? "bg-[#309255] text-white"
                                    : "bg-[#e7f8ee] text-[#309255]"
                                    }`}
                                onClick={() => setSelectedRole("instructor")}
                            >
                                Instructor
                            </span>
                        </span> */}
                        {/* <span className='border border-gray-300 rounded-xl py-3 sm:py-4 px-4 sm:px-5 mt-5'><input type="text" placeholder='Name' className='focus:outline-none w-full' /></span> */}
                        {/* <span className='border border-gray-300 rounded-xl py-3 sm:py-4 px-4 sm:px-5 mt-5'><input type="text" placeholder='Last Name' className='focus:outline-none w-full' /></span> */}
                        <span className='border border-gray-300 rounded-xl py-3 sm:py-4 px-4 sm:px-5 mt-5'><input type="text" placeholder='Email' className='focus:outline-none w-full' /></span>
                        <span className='border border-gray-300 rounded-xl py-3 sm:py-4 px-4 sm:px-5 mt-5 flex items-center'>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder='Password'
                                className='focus:outline-none w-full'
                            />
                            <span
                                className='text-2xl cursor-pointer'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <CiRead /> : <CiUnread />}
                            </span>
                        </span>

                        {/* Confirm Password Input */}
                        {/* <span className='border border-gray-300 rounded-xl py-3 sm:py-4 px-4 sm:px-5 mt-5 flex items-center'>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder='Confirm Password'
                                className='focus:outline-none w-full'
                            />
                            <span
                                className='text-2xl cursor-pointer'
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <CiRead /> : <CiUnread />}
                            </span>
                        </span>                       
                        */}
                         <span className='w-full text-white bg-[#309255] py-2 sm:py-3 text-center text-xl sm:text-2xl rounded-lg mt-5'>Login</span> 
                        <span className='w-full text-[#309255] bg-[#e7f8ee] border border-gray-300 py-2 sm:py-3 text-center text-xl sm:text-2xl rounded-lg mt-5'>Login with Google</span>
                        <span className='text-center w-full mt-5 text-[#1d2733]'>Don't have an account? <span className='text-[#309255]'>Signup Here</span></span>

                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}
