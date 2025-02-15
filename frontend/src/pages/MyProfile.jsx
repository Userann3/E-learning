import React, { useState } from "react";
import NavigationComponent from "../components/NavigationComponent";
import { CiEdit, CiRead, CiUnread, CiSaveUp2 } from "react-icons/ci";
import Footer from "../components/Footer";
import { CiTrash } from "react-icons/ci";

export default function MyProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEditMode = () => {
    console.log("first")
    setIsEditMode(!isEditMode);
  };

  return (
    <>
      {/* <NavigationComponent
        currentPage="My Profile"
        pageName1="Your profile"
        pageName2="Page"
      /> */}

      {/* my profile */}

      <div
        className={`max-w-[1000px] mx-auto py-6 px-4 md:px-6 bg-[#f4fdf8] mt-5 rounded-xl shadow-lg transition-opacity duration-500 ${isEditMode ? "opacity-0 hidden" : "opacity-100"
          }`}
      >
        {/* Header */}
        <div className="text-2xl md:text-3xl flex justify-between items-center">
          <span>
            My <span className="text-[#309255]">Profile</span>
          </span>
          <button
            className="flex items-center gap-2 bg-[#309255] py-2 px-4 md:px-5 rounded-lg text-white"
            onClick={handleEditMode}
          >
            <CiEdit className="text-xl md:text-2xl" />
            <span className="text-lg md:text-xl">Edit</span>
          </button>
        </div>

        {/* Profile Picture & Name */}
        <div
          className="flex flex-col md:flex-row items-center gap-4 bg-[#e7f8ee] p-4 rounded-lg shadow-md mt-5"
          onClick={handleEditMode}
        >
          <img
            src="https://htmldemo.net/edule/eduLe/assets/images/author/author-03.jpg"
            alt="Profile"
            className="rounded-full w-16 h-16 md:w-20 md:h-20"
          />
          <div className="text-center md:text-left">
            <span className="text-xl" contentEditable>
              Pankaj Tripathi
            </span>
            <p className="text-gray-500">PankajTripathi@gmail.com</p>
          </div>
        </div>

        {/* Personal Details */}
        <h2 className="text-xl md:text-2xl mt-6 border-b-2 border-gray-400 pb-1">
          Personal <span className="text-[#309255]">Details</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-gray-600">First Name</p>
            <p className="text-lg">Pankaj</p>
          </div>
          <div>
            <p className="text-gray-600">Last Name</p>
            <p className="text-lg">Tripathi</p>
          </div>
          <div>
            <p className="text-gray-600">Email</p>
            <p className="text-lg">PankajTripathi@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-600">Phone Number</p>
            <p className="text-lg">(+91) 981045125</p>
          </div>
        </div>

        {/* Password Section */}
        <h2 className="text-xl md:text-2xl mt-6 border-b-2 border-gray-400 pb-1">
          <span className="text-[#309255]">Password</span>
        </h2>

        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <div className="flex items-center bg-white py-3 px-4 md:px-5 rounded-lg shadow-md w-full">
            <p className="text-lg">{showPassword ? "password" : "••••••••"}</p>
            <span
              onClick={togglePasswordVisibility}
              className="cursor-pointer ml-auto"
            >
              {showPassword ? (
                <CiUnread className="text-xl md:text-2xl" />
              ) : (
                <CiRead className="text-xl md:text-2xl" />
              )}
            </span>
          </div>
        </div>
      </div>

      <div className={`max-w-[1000px] mx-auto flex mt-10 shadow-lg py-6 px-6 bg-red-200 rounded-xl gap-10 transition-opacity duration-50 ${isEditMode ? "opacity-0 hidden" : "opacity-100 "}`}>
        <div className="self-center">
          <CiTrash className="text-6xl text-red-500" />
        </div>
        <div>
          <h1 className="text-2xl">Delete Account</h1>
          <p className="">Would you like to delete account?</p>
          <p className="">This account contains Paid Courses. Deleting your account will remove all the contain associated with it.</p>
          <h1 className="text-red-800 cursor-pointer font-semibold">I want to delete my account</h1>
        </div>
      </div>



      {/* update your profile */}
      <div className={`max-w-[1000px] mx-auto py-6 px-6 bg-[#f4fdf8] mt-5 rounded-xl shadow-lg transition-opacity duration-50 ${isEditMode ? "opacity-100" : "opacity-0 hidden "}`}>
        {/* Header */}
        <div className="text-3xl flex justify-between items-center">
          <span>Update your <span className="text-[#309255]">Profile</span></span>
          <button className="flex items-center gap-2 bg-[#309255] py-2 px-5 rounded-lg text-white" onClick={handleEditMode}>
            <CiSaveUp2 className="text-2xl" />
            <span className="text-xl">Save</span>
          </button>
        </div>

        {/* Profile Picture & Name */}
        <div className="flex flex-col items-center bg-[#e7f8ee] p-4 rounded-lg shadow-md mt-5" onClick={handleEditMode}>
          <img src="https://htmldemo.net/edule/eduLe/assets/images/author/author-03.jpg"
            alt="Profile" className="rounded-full w-16 h-16 md:w-20 md:h-20"
          />
          <span
            className="text-xl"
            contentEditable
          >
            Pankaj Tripathi
          </span>
          <p className="text-gray-500">PankajTripathi@gmail.com</p>

          {/* Profile Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="bg-[#309255] text-white px-4 py-2 rounded-md shadow-md  transition-all duration-200">
              Change Profile
            </button>
            <button className=" text-red-500 px-4 py-2  transition-all duration-200">
              Remove Profile
            </button>
          </div>
        </div>

        {/* Personal Details */}
        <h2 className="text-2xl mt-6 border-b-2 border-gray-300 pb-1">
          Personal <span className="text-[#309255]">Details</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          {[
            { label: "First Name", value: "Pankaj" },
            { label: "Last Name", value: "Tripathi" },
            { label: "Email", value: "PankajTripathi@gmail.com" },
            { label: "Phone Number", value: "(+91) 981045125" },
          ].map((item, index) => (
            <div key={index}>
              <p className="text-gray-600">{item.label}</p>
              <span
                className="text-lg px-3 py-1 border border-gray-300 focus-within:border-[#309255] focus-within:ring-1 focus-within:ring-[#309255] rounded-md outline-none transition-all duration-200 block"
                contentEditable
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Password Section */}
        <h2 className="text-2xl mt-6 border-b-2 border-gray-300 pb-1">
          <span className="text-[#309255]">Password</span>
        </h2>

        <div className="mt-4 flex flex-col md:flex-row gap-5">
          {["Current password", "New password"].map((placeholder, index) => (
            <div key={index} className="flex items-center bg-white py-3 px-5 rounded-lg shadow-md w-full border border-gray-300 focus-within:border-[#309255] focus-within:ring-1 focus-within:ring-[#309255] transition-all duration-200">
              <input
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                className="w-full text-lg bg-transparent focus:outline-none"
              />
              <span onClick={togglePasswordVisibility} className="cursor-pointer ml-auto">
                {showPassword ? <CiUnread className="text-2xl" /> : <CiRead className="text-2xl" />}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={`max-w-[1000px] mx-auto flex mt-10 shadow-lg py-6 px-6 bg-red-200 rounded-xl gap-10 transition-opacity duration-50 ${isEditMode ? "opacity-100" : "opacity-0 hidden "}`}>
        <div className="self-center">
          <CiTrash className="text-6xl text-red-500" />
        </div>
        <div>
          <h1 className="text-2xl">Delete Account</h1>
          <p className="">Would you like to delete account?</p>
          <p className="">This account contains Paid Courses. Deleting your account will remove all the contain associated with it.</p>
          <h1 className="text-red-800 cursor-pointer font-semibold">I want to delete my account</h1>
        </div>
      </div>



      {/* <Footer mt="mt-10" /> */}
    </>
  );
}
