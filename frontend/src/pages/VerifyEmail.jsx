import React from 'react'
import NavigationComponent from '../components/NavigationComponent'
import { CiTurnL1 } from "react-icons/ci";
import Footer from '../components/Footer';
import { CiUndo } from "react-icons/ci";
import OTPInput from '../components/OTPInput';

export default function VerifyEmail() {
    return (
        <>
            <NavigationComponent />
            <div className='flex w-full justify-center mt-20'>
                <div className='w-full  lg:w-lg'>
                    <form action="" className='flex flex-col'>
                        <span className='flex justify-between w-full'>
                            <span className='text-3xl sm:text-4xl'>Verify <span className='text-[#309255]'>Email</span></span>
                        </span>
                        <span className='text-lg mt-5'>
                        A verification code has been sent to you. Enter the code below                        
                        </span>
                        <OTPInput/>
                        <span className='w-full text-white bg-[#309255] py-2 sm:py-3 text-center text-xl sm:text-2xl rounded-lg mt-5'>Verify Email</span>
                        <span className='w-full flex justify-between mt-5'>
                        <span className=' flex gap-3'><CiTurnL1 className='text-xl' />Back to login</span>
                        <span className='flex gap-2'><CiUndo className='text-xl'/>Resend Code</span>
                        </span>
                    </form>
                </div>
            </div>
            <Footer />

        </>
    )
}
