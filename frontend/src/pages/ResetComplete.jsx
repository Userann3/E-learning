import React from 'react'
import NavigationComponent from '../components/NavigationComponent'
import { CiTurnL1 } from "react-icons/ci";
import Footer from '../components/Footer';

export default function Resetcomplete() {
    return (
        <>
            <NavigationComponent />
            <div className='flex w-full justify-center mt-20'>
                <div className='w-full  lg:w-lg'>
                    <form action="" className='flex flex-col'>
                        <span className='flex justify-between w-full'>
                            <span className='text-3xl sm:text-4xl'>Reset <span className='text-[#309255]'>Complete</span></span>
                        </span>
                        <span className='text-lg mt-5'>
                        All done! We have sent an email to m***********@gmail.com to confirm                         </span>
                        <span className='w-full text-white bg-[#309255] py-2 sm:py-3 text-center text-xl sm:text-2xl rounded-lg mt-5'>Return to login</span>
                        {/* <span className='mt-5 flex gap-3'><CiTurnL1 className='text-xl' />Back to login</span> */}
                    </form>
                </div>
            </div>
            <Footer />

        </>
    )
}
