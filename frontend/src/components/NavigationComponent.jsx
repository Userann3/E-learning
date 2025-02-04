import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import { CiMedal, CiRead, CiUnread } from 'react-icons/ci';
import Footer from './Footer';

export default function NavigationComponent({ currentPage }) {
    const [selectedRole, setSelectedRole] = useState("student");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <div className='bg-[#e7f8ee] h-[40vh] relative'>
                <Navbar />
                <img src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-8.png" alt="" className='absolute left-5 top-20 hidden md:block' />
                <img src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-23.png" alt="" className='absolute bottom-0 left-0 hidden md:block' />
                <img src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-24.png" alt="" className='absolute right-0 bottom-0 hidden md:block' />
                <div className='max-w-[1500px] mx-auto sm:px-8 md:px-8 lg:px-0 flex justify-between items-center h-full'>
                    <div className='flex flex-col gap-2 sm:gap-5'>
                        <span className='text-lg sm:text-xl text-[#1d2733]'>Home // <span className='text-[#309255]'>{currentPage ? currentPage : 'Login'}</span></span>
                        <span className='text-3xl sm:text-5xl'>Login <span className='text-[#309255]'>Form</span></span>
                    </div>
                </div>
            </div>


            {/* <Footer /> */}
        </>
    );
}