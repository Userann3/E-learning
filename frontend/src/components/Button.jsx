import React from 'react'

export default function Button({ text }) {
  return (
    <>
      <button className='bg-[#309255] text-white text-lg sm:text-xl lg:text-2xl py-3 sm:py-4 lg:py-5 rounded-xl mt-5 hover:bg-[#257a43] transition-colors'>
        {text}
      </button>
    </>
  )
}
