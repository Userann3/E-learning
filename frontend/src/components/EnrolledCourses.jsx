import React, { useEffect, useState } from 'react'

export default function EnrolledCourses({ home }) {

    const [cardHome, setCradHome] = useState(false);

    let handelHomeCard = () => {
        if (home) {
            setCradHome(!cardHome);
        }
    }

    useEffect(()=>{
        handelHomeCard()
    },[])

    return (
        <>
            <div className='max-w-[1500px] mx-auto flex flex-wrap justify-center gap-8 mt-10 px-4 md:px-0'>
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div key={index} className='flex flex-col justify-between items-center gap-5 p-5 rounded-xl border border-gray-600 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[350px]'>
                        <span><img src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-01.jpg" alt="" className='rounded-xl w-full' /></span>
                        <span className='flex items-center gap-2 self-start'>
                            <img src="https://htmldemo.net/edule/eduLe/assets/images/author/author-01.jpg" alt="" className='rounded-full h-15' />
                            <span className='text-gray-600'>Jason Williams</span>
                        </span>
                        <span className='text-xl text-center md:text-left'>Data Science and Machine Learning with Python - Hands On!</span>

                        {
                            cardHome ? (
                                <span>helo</span>
                            ) : (
                                <>
                                    <span className='text-gray-600 self-start'>40% Completed</span>
                                    <span className='w-full h-1 bg-gray-200 flex'>
                                        <span className='bg-[#309255] h-1 w-32'></span>
                                    </span>
                                </>
                            )
                        }


                    </div>
                ))}
            </div>
        </>
    )
}
