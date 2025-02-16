import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import Footer from './Footer';
import NavigationComponent from './NavigationComponent';

export default function SingleEnrolledCourse() {
  const [openLesson, setOpenLesson] = useState(null);
  const [activeTab, setActiveTab] = useState('description'); // State to manage active tab

  const lessons = [
    {
      title: "Mindful Growth & the Creative Journey, Find Your Spark & Map Your Future",
      duration: "1 hour 48 minutes",
      subLessons: [
        "The Complete Medicine Masterclass",
        "Standard dummy text ever since the",
        "Printer took a galley of type and scrambled",
        "To make a type specimen book & break",
        "Survived not only five centuries also the leap",
        "Into typesetting remaining essentially",
        "Unchanged. It was popularised in the 1960s",
        "The release of Letraset sheets containing",
      ],
    },
    {
      title: "Science Fiction & Fantasy: Creating Unique and Powerful Worlds",
      duration: "1 hour 48 minutes",
      subLessons: [
        "Introduction to Science Fiction & Fantasy",
        "World Building Techniques",
        "Character Development in Sci-Fi & Fantasy",
        "Themes & Symbolism in Speculative Fiction",
      ],
    },
  ];

  return (
    <>
    <NavigationComponent/>
    <div className='flex flex-col md:flex-row bg-[#1d2733] text-white p-6 rounded-lg shadow-lg gap-6'>
      {/* Video Section */}
      <div className='md:w-2/3 bg-[#e7f8ee] text-black p-6 rounded-lg shadow-md'>
        {/* Video Placeholder */}
        <div className='w-full h-96 bg-[#309255] flex items-center justify-center rounded-lg mb-6 cursor-pointer hover:bg-[#257a43] transition-all'>
          <FaPlay className='text-white text-4xl' />
        </div>

        {/* Course Title */}
        <h2 className='text-2xl font-bold mb-4'>
          Finance & Investment Series: Learn to Budget and Calculate Your Net Worth.
        </h2>
        <p className='text-lg text-gray-700 mb-6'>
          <span className='text-red-500 font-semibold'>8,350</span> Students are watching
        </p>

        {/* Tabs */}
        <div className='bg-[#e7f8ee] rounded-xl py-3 flex justify-center gap-5 mb-6'>
          <button
            onClick={() => setActiveTab('description')}
            className={`px-5 py-3 rounded-lg text-lg font-medium transition-all ${
              activeTab === 'description'
                ? 'bg-[#309255] text-white shadow-md'
                : 'bg-white text-[#309255] border border-[#309255] hover:bg-[#309255] hover:text-white'
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('learn')}
            className={`px-5 py-3 rounded-lg text-lg font-medium transition-all ${
              activeTab === 'learn'
                ? 'bg-[#309255] text-white shadow-md'
                : 'bg-white text-[#309255] border border-[#309255] hover:bg-[#309255] hover:text-white'
            }`}
          >
            What You Will Learn
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-5 py-3 rounded-lg text-lg font-medium transition-all ${
              activeTab === 'reviews'
                ? 'bg-[#309255] text-white shadow-md'
                : 'bg-white text-[#309255] border border-[#309255] hover:bg-[#309255] hover:text-white'
            }`}
          >
            Reviews
          </button>
        </div>

        {/* Tab Content */}
        <div className='mt-8 p-6 bg-white rounded-xl shadow-md'>
          {activeTab === 'description' && (
            <div>
              <h2 className='text-2xl font-bold mb-4'>Course Description</h2>
              <p className='text-gray-700 leading-relaxed'>
                This course is designed to provide you with a comprehensive understanding of Data Science and Machine Learning using Python. You will learn how to analyze data, build predictive models, and deploy machine learning solutions. Whether you're a beginner or an experienced professional, this course will help you master the skills needed to excel in the field of data science.
              </p>
            </div>
          )}

          {activeTab === 'learn' && (
            <div>
              <h2 className='text-2xl font-bold mb-4'>What You Will Learn</h2>
              <ul className='list-disc list-inside text-gray-700 space-y-2'>
                <li>Understand the fundamentals of Python programming for data science.</li>
                <li>Learn how to clean, preprocess, and analyze data using Pandas and NumPy.</li>
                <li>Build and evaluate machine learning models using Scikit-Learn.</li>
                <li>Explore advanced topics like deep learning and neural networks.</li>
                <li>Deploy machine learning models using Flask and Docker.</li>
              </ul>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h2 className='text-2xl font-bold mb-4'>Student Reviews</h2>
              <div className='space-y-4'>
                <div className='bg-[#f9f9f9] p-4 rounded-lg'>
                  <h3 className='font-semibold'>John Doe</h3>
                  <p className='text-gray-700'>
                    "This course is amazing! The instructor explains complex concepts in a simple and easy-to-understand way. Highly recommended for anyone interested in data science."
                  </p>
                </div>
                <div className='bg-[#f9f9f9] p-4 rounded-lg'>
                  <h3 className='font-semibold'>Jane Smith</h3>
                  <p className='text-gray-700'>
                    "I learned so much from this course. The hands-on projects were especially helpful in solidifying my understanding of machine learning."
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Course Details Section */}
      <div className='md:w-1/3 bg-[#309255] text-white p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold mb-4'>Course Content</h2>
        <p className='text-sm text-gray-200 mb-6'>80 Lessons (8h 15m)</p>
        <div className='h-[600px] overflow-y-auto scrollbar-custom'>
          {lessons.map((lesson, index) => (
            <div key={index} className='mb-4'>
              <button
                className='w-full text-left text-lg font-semibold flex justify-between items-center bg-[#e7f8ee] text-black p-3 rounded-lg hover:bg-[#d4f0e0] transition-all'
                onClick={() => setOpenLesson(openLesson === index ? null : index)}
              >
                {lesson.title}
                <span className='text-lg'>{openLesson === index ? '▲' : '▼'}</span>
              </button>
              {openLesson === index && (
                <ul className='list-none pl-5 mt-2 bg-[#e7f8ee] text-black p-3 rounded-lg space-y-2'>
                  {lesson.subLessons.map((subLesson, subIndex) => (
                    <li key={subIndex} className='py-1 border-b border-gray-300 last:border-b-0'>
                      {subLesson}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}