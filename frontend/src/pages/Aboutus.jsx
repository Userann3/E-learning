import React from 'react';
import NavigationComponent from '../components/NavigationComponent';
import { CiUser } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { CiTrophy } from "react-icons/ci";
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
export default function Aboutus() {
    return (
        <>
            <NavigationComponent currentPage="About us" pageName1={"About"} pageName2={"Edule"}/>
            <div className='max-w-[1500px] mx-auto sm:px-0 md:px-4 lg:px-0 flex flex-col lg:flex-row gap-10 mt-10'>
                <div className='w-full lg:w-1/2'>
                    <div className='relative'>
                        <img
                            src="https://htmldemo.net/edule/eduLe/assets/images/about.jpg"
                            alt="About Us"
                            className='rounded-xl w-full'
                        />
                        <div className='absolute right-4 sm:right-10 top-4 sm:top-5'>
                            <span className='bg-[#309255] rounded-xl flex flex-col items-center px-4 sm:px-5 py-2 sm:py-3'>
                                <span className='bg-white w-fit py-2 sm:py-3 px-4 sm:px-5 rounded-xl'>
                                    <img
                                        src="https://htmldemo.net/edule/eduLe/assets/images/logo-icon.png"
                                        alt="Logo"
                                        className='w-8 h-8 sm:w-10 sm:h-10'
                                    />
                                </span>
                                <span className='text-white text-sm sm:text-base mt-2'>28+ years</span>
                                <span className='text-white text-sm sm:text-base'>of experience</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                    <span className='text-lg sm:text-xl text-[#309255]'>Welcome to Edule.</span>
                    <span className='text-3xl sm:text-4xl lg:text-5xl mt-3 sm:mt-5'>You can join with Edule</span>
                    <span className='text-3xl sm:text-4xl lg:text-5xl mt-3'>and upgrade your skill for</span>
                    <span className='text-3xl sm:text-4xl lg:text-5xl mt-3'>
                        your <span className='text-[#309255]'>bright future.</span>
                    </span>
                    <button className='mt-5 bg-[#309255] text-white py-2 sm:py-3 px-6 sm:px-9 text-lg sm:text-xl rounded-xl w-fit hover:bg-[#2a7f4a] transition-colors duration-200'>
                        Start a course
                    </button>
                </div>
            </div>

            <div className='max-w-[1500px] mx-auto mt-10'>
                <div className='flex flex-col lg:flex-row justify-between gap-6 lg:gap-8'>

                    {/* Card 1: Top Instructor */}
                    <div className='border rounded-xl border-gray-500 px-4 sm:px-5 py-3 w-full lg:w-1/3 text-gray-600'>
                        <div className='flex gap-4 sm:gap-5 items-center'>
                            <span className='rounded-full border-gray-500 border p-3 sm:p-4 bg-[#e7f8ee]'>
                                <CiUser className='text-4xl sm:text-5xl text-[#309255]' />
                            </span>
                            <span className='text-2xl sm:text-3xl'>Top Instructor</span>
                        </div>
                        <div className='mt-4 sm:mt-5 flex flex-col justify-center'>
                            <p className='text-sm sm:text-base'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci ipsam reiciendis tempora molestias labore amet, dolor provident ut libero?
                            </p>
                            <p className='mt-2 sm:mt-3 text-sm sm:text-base'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque! Doloribus distinctio fugiat perspiciatis adipisci quas illum sunt earum. Aspernatur?
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Portable Program */}
                    <div className='border rounded-xl border-gray-500 px-4 sm:px-5 py-3 w-full lg:w-1/3 text-gray-600'>
                        <div className='flex gap-4 sm:gap-5 items-center'>
                            <span className='rounded-full border-gray-500 border p-3 sm:p-4 bg-[#e7f8ee]'>
                                <CiViewList className='text-4xl sm:text-5xl text-[#309255]' />
                            </span>
                            <span className='text-2xl sm:text-3xl'>Portable Program</span>
                        </div>
                        <div className='mt-4 sm:mt-5 flex flex-col justify-center'>
                            <p className='text-sm sm:text-base'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci ipsam reiciendis tempora molestias labore amet, dolor provident ut libero?
                            </p>
                            <p className='mt-2 sm:mt-3 text-sm sm:text-base'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque! Doloribus distinctio fugiat perspiciatis adipisci quas illum sunt earum. Aspernatur?
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Improve Quickly */}
                    <div className='border rounded-xl border-gray-500 px-4 sm:px-5 py-3 w-full lg:w-1/3 text-gray-600'>
                        <div className='flex gap-4 sm:gap-5 items-center'>
                            <span className='rounded-full border-gray-500 border p-3 sm:p-4 bg-[#e7f8ee]'>
                                <CiTrophy className='text-4xl sm:text-5xl text-[#309255]' />
                            </span>
                            <span className='text-2xl sm:text-3xl'>Improve Quickly</span>
                        </div>
                        <div className='mt-4 sm:mt-5 flex flex-col justify-center'>
                            <p className='text-sm sm:text-base'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci ipsam reiciendis tempora molestias labore amet, dolor provident ut libero?
                            </p>
                            <p className='mt-2 sm:mt-3 text-sm sm:text-base'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque! Doloribus distinctio fugiat perspiciatis adipisci quas illum sunt earum. Aspernatur?
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='max-w-[1500px] mx-auto bg-[#e7f8ee] flex flex-col md:flex-row justify-between items-center px-5 md:px-10 py-8 md:py-15 rounded-lg mt-20'>
                {/* Left Image - Hidden on smaller screens */}
                <div className='hidden md:block'>
                    <img src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-12.png" alt="" />
                </div>

                {/* Middle Content */}
                <div className='flex flex-col gap-2 text-center md:text-left'>
                    <span className='text-[#309255] text-xl md:text-2xl'>Become An Instructor</span>
                    <span className='text-[#1d2733] text-3xl md:text-5xl'>You can join with</span>
                    <span className='text-[#1d2733] text-3xl md:text-5xl'>
                        Edule as a <span className='text-[#309255]'>instructor?</span>
                    </span>
                </div>

                {/* Rotated Image - Hidden on smaller screens */}
                <div className='hidden md:block'>
                    <img
                        src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-13.svg"
                        alt=""
                        className='transform rotate-10'
                    />
                </div>

                {/* Button */}
                <div className='mt-6 md:mt-0'>
                    <span className='text-white py-3 px-6 md:py-4 md:px-3 bg-[#309255] text-lg md:text-xl rounded-lg'>
                        Drop Information
                    </span>
                </div>

                {/* Right Image - Hidden on smaller screens */}
                <div className='hidden md:block'>
                    <img src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-12.png" alt="" />
                </div>
            </div>

            <div className='max-w-[1500px] mx-auto mt-10 px-4 sm:px-6 lg:px-8'>
                <div className='w-full text-center'>
                    <h2 className='text-lg sm:text-xl text-[#309255]'>Team Members</h2>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl mt-3 sm:mt-5'>
                        Edule Skilled <span className='text-[#309255]'>Instructor</span>
                    </h2>
                </div>

                <div className='mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8'>
                    <div className='p-2 sm:p-3 border border-gray-600 rounded-full'>
                        <img
                            src="https://htmldemo.net/edule/eduLe/assets/images/author/author-01.jpg"
                            alt="Instructor 1"
                            className='rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24'
                        />
                    </div>
                    <div className='p-2 sm:p-3 border border-gray-600 rounded-full'>
                        <img
                            src="https://htmldemo.net/edule/eduLe/assets/images/author/author-02.jpg"
                            alt="Instructor 2"
                            className='rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24'
                        />
                    </div>
                    <div className='p-2 sm:p-3 border border-gray-600 rounded-full'>
                        <img
                            src="https://htmldemo.net/edule/eduLe/assets/images/author/author-03.jpg"
                            alt="Instructor 3"
                            className='rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24'
                        />
                    </div>
                    <div className='p-2 sm:p-3 border border-gray-600 rounded-full'>
                        <img
                            src="https://htmldemo.net/edule/eduLe/assets/images/author/author-04.jpg"
                            alt="Instructor 4"
                            className='rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24'
                        />
                    </div>
                    <div className='p-2 sm:p-3 border border-gray-600 rounded-full'>
                        <img
                            src="https://htmldemo.net/edule/eduLe/assets/images/author/author-05.jpg"
                            alt="Instructor 5"
                            className='rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24'
                        />
                    </div>
                </div>
            </div>

            <Testimonials />
            <Footer mt="mt-10" />
        </>
    );
}