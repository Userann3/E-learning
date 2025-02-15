import React, { useState } from 'react';
import NavigationComponent from '../components/NavigationComponent';
import { CiSearch } from 'react-icons/ci';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import MyProfile from './MyProfile';
import EnrolledCourses from '../components/EnrolledCourses';
// import PurchaseHistory from '../components/PurchaseHistory';
import PurchaseHistory from '../components/ PurchaseHistory';

export default function StudentDashbord() {
    const [activeComponent, setActiveComponent] = useState('MyProfile');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'MyProfile':
                return <MyProfile />;
            case 'EnrolledCourses':
                return <EnrolledCourses />;
            case 'PurchaseHistory':
                return <PurchaseHistory />;
            default:
                return <MyProfile />;
        }
    };

    return (
        <>
            <NavigationComponent currentPage="Dashbord" pageName1="My" pageName2="Dashbord" />

            <div className='max-w-[1500px] mx-auto bg-[#e7f8ee] rounded-xl mt-20 py-7 px-4 flex justify-between'>
                <div className='flex justify-evenly items-center gap-5'>
                    <span onClick={() => setActiveComponent('MyProfile')} className={`rounded-xl py-3 px-4 md:py-3 md:px-5 text-lg md:text-xl cursor-pointer ${activeComponent === 'MyProfile' ? 'bg-[#309255] text-white' : 'bg-white text-gray-600'}`}>My Profile</span>
                    <span onClick={() => setActiveComponent('EnrolledCourses')} className={`rounded-xl py-3 px-4 md:py-4 md:px-5 text-lg md:text-xl cursor-pointer ${activeComponent === 'EnrolledCourses' ? 'bg-[#309255] text-white' : 'bg-white text-gray-600'}`}>Enrolled Courses</span>
                    <span onClick={() => setActiveComponent('PurchaseHistory')} className={`rounded-xl py-3 px-4 md:py-4 md:px-5 text-lg md:text-xl cursor-pointer ${activeComponent === 'PurchaseHistory' ? 'bg-[#309255] text-white' : 'bg-white text-gray-600'}`}>Purchase History</span>
                    <span onClick={() => setActiveComponent('OtherCourses')} className={`rounded-xl py-3 px-4 md:py-4 md:px-5 text-lg md:text-xl cursor-pointer ${activeComponent === 'OtherCourses' ? 'bg-[#309255] text-white' : 'bg-white text-gray-600'}`}>Other Courses</span>
                </div>
            </div>
            
            {(activeComponent === 'EnrolledCourses' || activeComponent === 'PurchaseHistory') && (
                <div className='max-w-[1500px] mx-auto border border-gray-400 rounded-lg px-4 py-2 md:px-10 md:py-4 flex justify-between items-center mt-4'>
                    <input
                        type="text"
                        placeholder='Search your courses'
                        className='focus:outline-none text-lg w-full md:w-auto'
                    />
                    <span className='text-3xl ml-2'><CiSearch /></span>
                </div>
            )}
            
            <div className='max-w-[1500px] mx-auto mt-10'>
                {renderComponent()}
            </div>

            <DownloadApp />
            <Footer mt="" />
        </>
    );
}
