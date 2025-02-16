import React, { useRef } from 'react';
import Hero from '../components/Hero';
import { CiSearch } from "react-icons/ci";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons for buttons
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import NavigationComponent from '../components/NavigationComponent';
import EnrolledCourses from '../components/EnrolledCourses';



export default function Home() {
  const filterContainerRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (filterContainerRef.current) {
      filterContainerRef.current.scrollBy({
        left: -200, // Adjust scroll distance
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (filterContainerRef.current) {
      filterContainerRef.current.scrollBy({
        left: 200, // Adjust scroll distance
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Hero />

      {/* All courses */}
      <div className='max-w-[1500px] mx-auto flex flex-col mt-20 px-4'>
        {/* heading and search box */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <span className='text-[#1d2733] text-3xl md:text-4xl text-center md:text-left mb-4 md:mb-0'>
            All <span className='text-[#309255]'>Courses</span> of Edule
          </span>
          <div className='w-full md:w-auto border border-gray-400 rounded-lg px-4 py-2 md:px-10 md:py-4 flex justify-between items-center'>
            <input
              type="text"
              placeholder='Search your courses'
              className='focus:outline-none text-lg w-full md:w-auto'
            />
            <span className='text-3xl ml-2'><CiSearch /></span>
          </div>
        </div>

        {/* filter */}
        <div className='mt-7 relative px-5 bg-[#eefbf3] rounded-lg'>
          {/* Left scroll button */}
          <button
            onClick={scrollLeft}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors'
          >
            <CiCircleChevLeft className='text-2xl text-[#309255]' />
          </button>

          {/* Right scroll button */}
          <button
            onClick={scrollRight}
            className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors'
          >
            <CiCircleChevRight className='text-2xl text-[#309255]' />
          </button>

          {/* Filter items container */}
          <div
            ref={filterContainerRef}
            className='w-full flex space-x-7 py-7 px-7 bg-[#eefbf3] rounded-lg overflow-x-auto scrollbar-hide'
          >
            {['Development', 'Data Science', 'Business', 'Financial', 'Marketing', 'UI/UX Design', 'Python', 'C++', 'Java', 'Alyx star'].map((item, index) => (
              <span
                key={index}
                className='bg-[#309255] py-3 px-6 rounded-lg text-xl text-white hover:bg-[#257a43] transition-colors whitespace-nowrap'
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* cards */}
        <div className='w-full flex flex-col justify-between gap-6 rounded-lg mt-10 px-4 sm:px-0'>
          {/* First Row */}
          <div className='w-full flex flex-col xl:flex-row gap-6'>
            {/* Machine Learning Card */}
            <div className='w-full flex flex-col xl:flex-row gap-5 p-5 border border-gray-400 rounded-lg'>
              <div className='w-full xl:w-1/2'>
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-02.jpg"
                  alt="Machine Learning"
                  className='rounded-lg w-full h-48 xl:h-64 object-cover'
                />
              </div>
              <div className='w-full flex flex-col'>
                <span className='text-2xl xl:text-3xl text-[#309255]'>Machine Learning</span>
                <span className='text-base xl:text-lg mt-3'>Data Science and Machine Learning with Python - Hands On!</span>
                <div className='flex flex-col xl:flex-row items-center mt-3 xl:gap-0'>
                  <span className='flex items-center gap-2'>
                    <CiClock2 className='text-2xl text-[#309255]' />
                    <span className='text-gray-600'>18 hr 15 mins</span>
                  </span>
                  <span className='flex items-center gap-2 ms-5'>
                    <CiViewList className='text-2xl text-[#309255]' />
                    <span className='text-gray-600'>29 Lectures</span>
                  </span>
                </div>
                  <span className=' text-[#309255] rounded-lg text-xl xl:text-md mt-3'>Rating 4.5</span>
                  <span className='bg-[#eefbf3] mt-5 text-[#309255] py-3 px-5 rounded-lg text-xl xl:text-md text-center'>Buy now $350</span>
              </div>
            </div>

            {/* UI/UX Card */}
            <div className='w-full flex flex-col xl:flex-row gap-5 p-5 border border-gray-400 rounded-lg'>
              <div className='w-full xl:w-1/2'>
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-02.jpg"
                  alt="Machine Learning"
                  className='rounded-lg w-full h-48 xl:h-64 object-cover'
                />
              </div>
              <div className='w-full flex flex-col'>
                <span className='text-2xl xl:text-3xl text-[#309255]'>Machine Learning</span>
                <span className='text-base xl:text-lg mt-3'>Data Science and Machine Learning with Python - Hands On!</span>
                <div className='flex flex-col xl:flex-row items-center mt-3 xl:gap-0'>
                  <span className='flex items-center gap-2'>
                    <CiClock2 className='text-2xl text-[#309255]' />
                    <span className='text-gray-600'>18 hr 15 mins</span>
                  </span>
                  <span className='flex items-center gap-2 ms-5'>
                    <CiViewList className='text-2xl text-[#309255]' />
                    <span className='text-gray-600'>29 Lectures</span>
                  </span>
                </div>
                  <span className=' text-[#309255] rounded-lg text-xl xl:text-md mt-3'>Rating 4.5</span>
                  <span className='bg-[#eefbf3] mt-5 text-[#309255] py-3 px-5 rounded-lg text-xl xl:text-md text-center'>Buy now $350</span>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className='w-full flex flex-col xl:flex-row gap-6'>
            {/* Business Card */}
            <div className='w-full flex flex-col xl:flex-row gap-5 p-5 border border-gray-400 rounded-lg'>
              <div className='w-full xl:w-1/2'>
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-02.jpg"
                  alt="Machine Learning"
                  className='rounded-lg w-full h-48 xl:h-64 object-cover'
                />
              </div>
              <div className='w-full flex flex-col'>
                <span className='text-2xl xl:text-3xl text-[#309255]'>Machine Learning</span>
                <span className='text-base xl:text-lg mt-3'>Data Science and Machine Learning with Python - Hands On!</span>
                <div className='flex flex-col xl:flex-row items-center mt-3 xl:gap-0'>
                  <span className='flex items-center gap-2'>
                    <CiClock2 className='text-2xl text-[#309255]' />
                    <span className='text-gray-600'>18 hr 15 mins</span>
                  </span>
                  <span className='flex items-center gap-2 ms-5'>
                    <CiViewList className='text-2xl text-[#309255]' />
                    <span className='text-gray-600'>29 Lectures</span>
                  </span>
                </div>
                  <span className=' text-[#309255] rounded-lg text-xl xl:text-md mt-3'>Rating 4.5</span>
                  <span className='bg-[#eefbf3] mt-5 text-[#309255] py-3 px-5 rounded-lg text-xl xl:text-md text-center'>Buy now $350</span>
              </div>
            </div>

            {/* Finance Card */}
            <div className='w-full flex flex-col xl:flex-row gap-5 p-5 border border-gray-400 rounded-lg'>
              <div className='w-full xl:w-1/2'>
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-02.jpg"
                  alt="Machine Learning"
                  className='rounded-lg w-full h-48 xl:h-64 object-cover'
                />
              </div>
              <div className='w-full flex flex-col'>
                <span className='text-2xl xl:text-3xl text-[#309255]'>Machine Learning</span>
                <span className='text-base xl:text-lg mt-3'>Data Science and Machine Learning with Python - Hands On!</span>
                <div className='flex flex-col xl:flex-row items-center mt-3 xl:gap-0'>
                  <span className='flex items-center gap-2'>
                    <CiClock2 className='text-2xl text-[#309255]' />
                    <span className='text-gray-600'>18 hr 15 mins</span>
                  </span>
                  <span className='flex items-center gap-2 ms-5'>
                    <CiViewList className='text-2xl text-[#309255]' />
                    <span className='text-gray-600'>29 Lectures</span>
                  </span>
                </div>
                  <span className=' text-[#309255] rounded-lg text-xl xl:text-md mt-3'>Rating 4.5</span>
                  <span className='bg-[#eefbf3] mt-5 text-[#309255] py-3 px-5 rounded-lg text-xl xl:text-md text-center'>Buy now $350</span>
              </div>
            </div>
          </div>

          {/* Other Courses Button */}
          <div className='w-full flex justify-center mt-6'>
            <button className='bg-[#eefbf3] py-3 px-8 text-lg xl:text-xl text-[#257a43] rounded-lg border border-[#257a43] transition-all duration-300 hover:bg-[#257a43] hover:text-white'>
              Other Courses
            </button>
          </div>
        </div>

        {/* become a instructor */}
        <div className='w-full bg-[#e7f8ee] flex flex-col md:flex-row justify-between items-center px-5 md:px-10 py-8 md:py-15 rounded-lg mt-20'>
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

        {/* how it works */}

        <div className='w-full mt-20 px-4 md:px-0'>

          {/* Heading Section */}
          <div className='w-full flex flex-col gap-2 justify-center items-center text-center'>
            <span className='text-2xl text-[#257a43]'>Over 1,235+ Courses</span>
            <span className='text-4xl md:text-5xl text-[#1d2733]'>
              How it <span className='text-[#257a43]'>works?</span>
            </span>
          </div>

          {/* Cards Section */}
          <div className='w-full flex flex-col md:flex-row items-center justify-between mt-10 gap-8 md:gap-4'>

            {/* Card 1: Find Your Course */}
            <div className='w-full md:w-1/3 flex flex-col bg-[#e7f8ee] py-5 rounded-lg px-8 relative'>
              <img
                src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-15.png"
                alt=""
                className='absolute right-0 w-16 h-16 md:w-20 md:h-20'
              />
              <span><CiSearch className='text-4xl text-[#257a43]' /></span>
              <span className='text-2xl md:text-3xl mt-5 text-[#1d2733]'>Find Your Course</span>
              <span className='text-gray-600 text-base md:text-lg mt-5'>It has survived not only centuries</span>
              <span className='text-gray-600 text-base md:text-lg'>also leap into electronic.</span>
            </div>

            {/* Arrow Image 1 */}
            <div className='hidden md:block'>
              <img
                src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-17.png"
                alt=""
                className='w-15 h-5'
              />
            </div>

            {/* Card 2: Book a Seat */}
            <div className='w-full md:w-1/3 flex flex-col bg-[#e7f8ee] py-5 rounded-lg px-8 relative'>
              <img
                src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-15.png"
                alt=""
                className='absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20'
              />
              <span><CiViewList className='text-4xl text-[#257a43]' /></span>
              <span className='text-2xl md:text-3xl mt-5 text-[#1d2733]'>Book a Seat</span>
              <span className='text-gray-600 text-base md:text-lg mt-5'>It has survived not only centuries</span>
              <span className='text-gray-600 text-base md:text-lg'>also leap into electronic.</span>
            </div>

            {/* Arrow Image 2 */}
            <div className='hidden md:block'>
              <img
                src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-17.png"
                alt=""
                className='w-15 h-5'
              />
            </div>

            {/* Card 3: Get Certificate */}
            <div className='w-full md:w-1/3 flex flex-col bg-[#e7f8ee] py-5 rounded-lg px-8 relative'>
              <img
                src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-15.png"
                alt=""
                className='absolute right-0 w-16 h-16 md:w-20 md:h-20'
              />
              <span><CiMedal className='text-4xl text-[#257a43]' /></span>
              <span className='text-2xl md:text-3xl mt-5 text-[#1d2733]'>Get Certificate</span>
              <span className='text-gray-600 text-base md:text-lg mt-5'>It has survived not only centuries</span>
              <span className='text-gray-600 text-base md:text-lg'>also leap into electronic.</span>
            </div>

          </div>
        </div>

      </div>

      {/* download app */}

      <div className='w-full bg-[#309255] mt-20 py-10'>
        <div className='max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between px-4'>
          <div className='flex flex-col gap-3 justify-center text-center md:text-left mb-8 md:mb-0'>
            <span className='text-white text-2xl'>
              Ready to start?
            </span>
            <span className='text-white text-3xl md:text-4xl'>
              Download our mobile app.
            </span>
            <span className='text-white text-3xl md:text-4xl'>
              for easy to start your course.
            </span>
          </div>

          <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
            <img
              src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-14.png"
              alt=""
              className='hidden md:block w-32 h-24'
            />
            <div className='bg-white h-fit py-3 px-5 rounded-2xl shadow-xl border-4 border-gray-300'>
              <img
                src="https://htmldemo.net/edule/eduLe/assets/images/google-play.png"
                alt=""
                className='h-9 w-32'
              />
            </div>
            <div className='bg-white h-fit py-3 px-5 rounded-2xl shadow-xl border-4 border-gray-300'>
              <img
                src="https://htmldemo.net/edule/eduLe/assets/images/app-store.png"
                alt=""
                className='h-9 w-32'
              />
            </div>
          </div>
        </div>
      </div>

      {/* testimonial */}

      {/* <div className='max-w-[1500px] mx-auto mt-10 '>

        <div className='flex flex-col justify-center items-center'>
          <span className='text-[#257a43] text-2xl'>Student Testimonial</span>
          <span className='text-5xl mt-3'>Feedback From <span className='text-[#257a43]'>Student</span></span>
        </div>

        <div className='flex mt-5 gap-5 overflow-x-hidden'>

          <div className='flex flex-col justify-center items-center py-3 px-3 rounded-lg border border-gray-300 relative '>
            <img src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-13.svg" alt="" className='absolute left-0 top-0 rotate-20 w-52'/>
            <div className='rounded-full p-2 border border-[#257a43]'>
              <img src="https://htmldemo.net/edule/eduLe/assets/images/author/author-06.jpg" alt="" className='rounded-full' />
            </div>
            <div className='text-center mt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, accusantium. Quam earum nemo excepturi omnis aliquid at deserunt quasi dolore dolorum. Voluptatem iure, illum totam ipsam excepturi numquam optio dicta, doloremque, similique tempore quidem maiores facere placeat minima mollitia nisi. Iusto velit temporibus excepturi dolores repellat neque quos nemo natus!
            </div>
            <div className='flex flex-col items-center mt-5'>
              <span className='text-3xl text-[#257a43]'>Mick Alexander</span>
              <span>Product Designer,USA</span>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center py-3 px-3 rounded-lg border border-gray-300 relative'>
          <img src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-13.svg" alt="" className='absolute left-0 top-0 rotate-20 w-52'/>
            <div className='rounded-full p-2 border border-[#257a43]'>
              <img src="https://htmldemo.net/edule/eduLe/assets/images/author/author-07.jpg" alt="" className='rounded-full' />
            </div>
            <div className='text-center mt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, praesentium facere dicta nihil doloribus laudantium vitae! Adipisci, aspernatur non quos impedit, sed sint, fugit ad ab odio minus velit nobis laudantium nam. Ex dolores, veniam non repellendus saepe veritatis pariatur ipsa quaerat perspiciatis, repudiandae dicta impedit harum vero error quidem.
            </div>
            <div className='flex flex-col items-center mt-5'>
              <span className='text-3xl text-[#257a43]'>Mick Alexander</span>
              <span>Product Designer,USA</span>

            </div>
          </div>

        </div>

      </div> */}

      <Testimonials />
      <Footer mt="mt-10" />



    </>
  );
}