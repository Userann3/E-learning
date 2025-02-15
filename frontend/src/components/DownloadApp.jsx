import React from 'react'

export default function DownloadApp() {
  return (
    <>
          <div className='w-full bg-[#309255] mt-20 py-10'>
        <div className='max-w-[1500px] mx-auto flex flex-col md:flex-row px-4 justify-between'>
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

    </>
  )
}
