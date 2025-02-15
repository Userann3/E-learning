import React from 'react';
import NavigationComponent from '../components/NavigationComponent';
import { CiSearch } from 'react-icons/ci';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';

export default function CoursesOfEdule() {
    return (
        <>
            <NavigationComponent />

            <div className='max-w-[1500px] mx-auto mt-10'>
                <span className='text-4xl'>Courses to get you <span className='text-[#309255]'>started</span></span>
                <div className='max-w-[1500px] mx-auto flex flex-wrap justify-center gap-8 mt-10 px-4 md:px-0'>
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className='flex flex-col justify-between items-center gap-5 p-5 rounded-xl border border-gray-600 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[350px]'>
                            <span><img src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-01.jpg" alt="" className='rounded-xl w-full' /></span>
                            <span className='flex items-center gap-2 self-start'>
                                <img src="https://htmldemo.net/edule/eduLe/assets/images/author/author-01.jpg" alt="" className='rounded-full h-15' />
                                <span className='text-gray-600'>Jason Williams</span>
                            </span>
                            <span className='text-xl text-center md:text-left'>Data Science and Machine Learning with Python - Hands On!</span>
                            <span className='text-gray-600 self-start flex items-center gap-2'>
                                <span>4.5</span>
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" className='h-4' />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" className='h-4' />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" className='h-4' />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" className='h-4' />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png" alt="" className='h-4' />
                                <span>Rating</span>
                            </span>
                            <span className='self-start text-[#309255] text-xl'>Rs.1200</span>
                            {/* <span className='w-full h-1 bg-gray-200 flex'><span className='bg-[#309255] h-1 w-32'></span></span> */}

                        </div>
                    ))}
                </div>
            </div>

            <div className='max-w-[1500px] mx-auto mt-10'>
                <span className='text-4xl'>Trending courses in <span className='text-[#309255]'>Python</span></span>
                <div className='max-w-[1500px] mx-auto flex flex-wrap justify-center gap-8 mt-10 px-4 md:px-0'>
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className='flex flex-col justify-between items-center gap-5 p-5 rounded-xl border border-gray-600 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[350px]'>
                            <span><img src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-01.jpg" alt="" className='rounded-xl w-full' /></span>
                            <span className='flex items-center gap-2 self-start'>
                                <img src="https://htmldemo.net/edule/eduLe/assets/images/author/author-01.jpg" alt="" className='rounded-full h-15' />
                                <span className='text-gray-600'>Jason Williams</span>
                            </span>
                            <span className='text-xl text-center md:text-left'>Data Science and Machine Learning with Python - Hands On!</span>
                            <span className='text-gray-600 self-start flex items-center gap-2'>
                                <span>4.5</span>
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" className='h-4' />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" className='h-4' />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" className='h-4' />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" className='h-4' />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png" alt="" className='h-4' />
                                <span>Rating</span>
                            </span>
                            <span className='self-start text-[#309255] text-xl'>Rs.1200</span>
                            {/* <span className='w-full h-1 bg-gray-200 flex'><span className='bg-[#309255] h-1 w-32'></span></span> */}

                        </div>
                    ))}
                </div>
            </div>

            <div className='max-w-[1500px] mx-auto mt-10'>
                <span className='text-4xl'>Frequently brought <span className='text-[#309255]'>together</span></span>
                <div className='max-w-[1500px] mx-auto flex flex-wrap justify-center gap-8 mt-10 px-4 md:px-0'>
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className='flex flex-col justify-between items-center gap-5 p-5 rounded-xl border border-gray-600 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[350px]'>
                            <span><img src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-01.jpg" alt="" className='rounded-xl w-full' /></span>
                            <span className='flex items-center gap-2 self-start'>
                                <img src="https://htmldemo.net/edule/eduLe/assets/images/author/author-01.jpg" alt="" className='rounded-full h-15' />
                                <span className='text-gray-600'>Jason Williams</span>
                            </span>
                            <span className='text-xl text-center md:text-left'>Data Science and Machine Learning with Python - Hands On!</span>
                            <span className='text-gray-600 self-start flex items-center gap-2'>
                                <span>4.5</span>
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" className='h-4' />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" className='h-4' />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" className='h-4' />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" className='h-4' />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png" alt="" className='h-4' />
                                <span>Rating</span>
                            </span>
                            <span className='self-start text-[#309255] text-xl'>Rs.1200</span>
                            {/* <span className='w-full h-1 bg-gray-200 flex'><span className='bg-[#309255] h-1 w-32'></span></span> */}

                        </div>
                    ))}
                </div>
            </div>





            <DownloadApp />
            <Footer mt="" />
        </>
    );
}