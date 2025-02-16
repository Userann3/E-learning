import React from 'react'
import { useState } from 'react';
import NavigationComponent from '../components/NavigationComponent'
import { CiUser, CiClock1, CiViewList, CiBoxes, CiMemoPad, CiMedal } from 'react-icons/ci'
import Footer from '../components/Footer';

export default function CourseDetailes() {

  const [activeTab, setActiveTab] = useState('description'); // State to manage active tab

    return (
        <>
            <NavigationComponent />
            <div className='max-w-[1500px] mx-auto flex justify-between mt-10 gap-10'>

                <div className='flex flex-col gap-5 w-3xl'>
                    <div className=''>
                        <img src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-details.jpg" alt="" className='rounded-xl' />
                    </div>
                    <div>
                        <span className='text-2xl'>Finance & Investment Series: Learn to Budget and Calculate Your Net Worth.</span>
                    </div>

                    <div className='flex justify-between'>
                        <span className='flex items-center gap-2 self-start'>
                            <img src="https://htmldemo.net/edule/eduLe/assets/images/author/author-01.jpg" alt="" className='rounded-full h-15' />
                            <span className='text-gray-600'>Jason Williams</span>
                            <span className='text-gray-600'>||</span>
                            <span className='text-[#309255]'>256 Enrolled Students</span>
                        </span>
                    </div>

                    <div className='bg-[#e7f8ee] rounded-xl py-3 flex justify-center gap-5'>
                        <button
                            onClick={() => setActiveTab('description')}
                            className={`px-5 py-3 rounded-lg text-lg ${activeTab === 'description'
                                    ? 'bg-[#309255] text-white'
                                    : 'bg-white text-[#309255] border border-[#309255]'
                                }`}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setActiveTab('learn')}
                            className={`px-5 py-3 rounded-lg text-lg ${activeTab === 'learn'
                                    ? 'bg-[#309255] text-white'
                                    : 'bg-white text-[#309255] border border-[#309255]'
                                }`}
                        >
                            What you will learn
                        </button>
                        <button
                            onClick={() => setActiveTab('reviews')}
                            className={`px-5 py-3 rounded-lg text-lg ${activeTab === 'reviews'
                                    ? 'bg-[#309255] text-white'
                                    : 'bg-white text-[#309255] border border-[#309255]'
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
                                <p className='text-gray-700'>
                                    This course is designed to provide you with a comprehensive understanding of Data Science and Machine Learning using Python. You will learn how to analyze data, build predictive models, and deploy machine learning solutions. Whether you're a beginner or an experienced professional, this course will help you master the skills needed to excel in the field of data science.
                                </p>
                            </div>
                        )}

                        {activeTab === 'learn' && (
                            <div>
                                <h2 className='text-2xl font-bold mb-4'>What You Will Learn</h2>
                                <ul className='list-disc list-inside text-gray-700'>
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

                <div className='bg-[#e7f8ee] flex flex-col py-5 px-5 rounded-xl w-lg h-fit border border-[#309255]'>
                    <span className='text-3xl text-[#309255] font-bold self-center'>$420.30</span>

                    <div className='mt-10  border-b-2 border-gray-300 pb-2'>
                        <span className='flex justify-between items-center'>
                            <span className='flex gap-2 text-lg text-[#309255] items-center'><CiUser className='text-[#309255] text-3xl' /> Instructor</span>
                            <span className='text-xl text-gray-500'>Pamela Foster</span>
                        </span>
                    </div>

                    <div className='mt-10  border-b-2 border-gray-300 pb-2'>
                        <span className='flex justify-between items-center'>
                            <span className='flex gap-2 text-lg text-[#309255] items-center'><CiClock1 className='text-[#309255] text-3xl' /> Duration</span>
                            <span className='text-xl text-gray-500'>18 hr 32 min</span>
                        </span>
                    </div>

                    <div className='mt-10  border-b-2 border-gray-300 pb-2'>
                        <span className='flex justify-between items-center'>
                            <span className='flex gap-2 text-lg text-[#309255] items-center'><CiViewList className='text-[#309255] text-3xl' /> Lectures</span>
                            <span className='text-xl text-gray-500'>35 Lectures</span>
                        </span>
                    </div>

                    <div className='mt-10  border-b-2 border-gray-300 pb-2'>
                        <span className='flex justify-between items-center'>
                            <span className='flex gap-2 text-lg text-[#309255] items-center'><CiBoxes className='text-[#309255] text-3xl' />Level</span>
                            <span className='text-xl text-gray-500'>Secondary</span>
                        </span>
                    </div>

                    <div className='mt-10  border-b-2 border-gray-300 pb-2'>
                        <span className='flex justify-between items-center'>
                            <span className='flex gap-2 text-lg text-[#309255] items-center'><CiMemoPad className='text-[#309255] text-3xl' />Language</span>
                            <span className='text-xl text-gray-500'>English</span>
                        </span>
                    </div>

                    <div className='mt-10  border-b-2 border-gray-300 pb-2'>
                        <span className='flex justify-between items-center'>
                            <span className='flex gap-2 text-lg text-[#309255] items-center'><CiMedal className='text-[#309255] text-3xl' />Certificate</span>
                            <span className='text-xl text-gray-500'>Yes</span>
                        </span>
                    </div>

                    <div className='mt-10 pb-2'>
                        <span className='flex justify-between items-center'>
                            <span className='w-full text-white bg-[#309255] py-2 sm:py-3 text-center text-xl sm:text-2xl rounded-lg mt-5'>Enrole Now</span>
                        </span>
                    </div>




                </div>
            </div>
            <Footer mt="mt-10"/>
        </>
    )
}
