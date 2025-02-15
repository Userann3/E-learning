import React from 'react';
import NavigationComponent from '../components/NavigationComponent';
import { CiPhone, CiMail, CiLocationOn } from "react-icons/ci";
import Footer from '../components/Footer';
import DownloadApp from '../components/DownloadApp';

export default function Contactus() {
    return (
        <>
            <NavigationComponent currentPage={"Contact us"} pageName1={"contact"} pageName2={"Us"} />
            <div className='max-w-[1500px] mx-auto border border-gray-400 rounded-xl py-6 sm:py-10 px-4 sm:px-10 mt-10 flex flex-col lg:flex-row justify-around gap-6 lg:gap-10'>
                {/* Contact Information Section */}
                <div className='w-full lg:w-1/2 bg-[#e7f8ee] px-5 sm:px-7 py-6 sm:py-8 rounded-xl'>
                    <div style={{ borderBottom: '1px solid gray' }} className='py-4 sm:py-5'>
                        <span className='flex items-center'>
                            <span className='bg-white rounded-full p-3 sm:p-4 border border-gray-600'>
                                <CiPhone className='text-[#309255] text-4xl sm:text-5xl' />
                            </span>
                            <span className='ms-4 sm:ms-5'>
                                <h2 className='text-[#309255] text-lg sm:text-xl'>Phone no.</h2>
                                <h2 className='text-xl sm:text-2xl'>+91 981042456</h2>
                            </span>
                        </span>
                    </div>

                    <div style={{ borderBottom: '1px solid gray' }} className='py-4 sm:py-5'>
                        <span className='flex items-center mt-6 sm:mt-10'>
                            <span className='bg-white rounded-full p-3 sm:p-4 border border-gray-600'>
                                <CiMail className='text-[#309255] text-4xl sm:text-5xl' />
                            </span>
                            <span className='ms-4 sm:ms-5'>
                                <h2 className='text-[#309255] text-lg sm:text-xl'>Email</h2>
                                <h2 className='text-xl sm:text-2xl'>example@gmail.com</h2>
                            </span>
                        </span>
                    </div>

                    <div style={{ borderBottom: '1px solid gray' }} className='py-4 sm:py-5'>
                        <span className='flex items-center mt-6 sm:mt-10'>
                            <span className='bg-white rounded-full p-3 sm:p-4 border border-gray-600'>
                                <CiLocationOn className='text-[#309255] text-4xl sm:text-5xl' />
                            </span>
                            <span className='ms-4 sm:ms-5'>
                                <h2 className='text-[#309255] text-lg sm:text-xl'>Location</h2>
                                <h2 className='text-xl sm:text-2xl'>Teesrsa road , dusri gali ,</h2>
                                <h2 className='text-xl sm:text-2xl'>pehla makan , Dholak pur</h2>
                            </span>
                        </span>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-3xl sm:text-4xl'>Get in Touch <span className='text-[#309255]'>with Us</span></h1>
                    <div className='flex flex-col mt-4 sm:mt-6'>
                        <span className='border border-gray-300 rounded-xl py-2 sm:py-3 px-3 sm:px-4 mt-3 sm:mt-4'>
                            <input type="text" placeholder='Name' className='focus:outline-none w-full text-sm sm:text-base' />
                        </span>
                        <span className='border border-gray-300 rounded-xl py-2 sm:py-3 px-3 sm:px-4 mt-3 sm:mt-4'>
                            <input type="text" placeholder='Email' className='focus:outline-none w-full text-sm sm:text-base' />
                        </span>
                        <span className='border border-gray-300 rounded-xl py-2 sm:py-3 px-3 sm:px-4 mt-3 sm:mt-4'>
                            <input type="text" placeholder='Subject' className='focus:outline-none w-full text-sm sm:text-base' />
                        </span>
                        <span className='border border-gray-300 rounded-xl py-2 sm:py-3 px-3 sm:px-4 mt-3 sm:mt-4 h-24 sm:h-36'>
                            <textarea placeholder='Message' className='focus:outline-none w-full h-full text-sm sm:text-base'></textarea>
                        </span>
                        <button className='w-full text-white bg-[#309255] py-2 sm:py-3 text-center text-lg sm:text-xl rounded-lg mt-4 sm:mt-5 hover:bg-[#2a7f4a] transition-colors duration-200'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <DownloadApp/>
            <Footer mt="" />
        </>
    );
}