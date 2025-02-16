import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import NavigationComponent from './components/NavigationComponent'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import CheckEmail from './pages/CheckEmail'
import NewPassword from './pages/NewPassword'
import Resetcomplete from './pages/ResetComplete'
import VerifyEmail from './pages/VerifyEmail'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import AllCourses from './pages/StudentDashbord'
import CourseDetailes from './pages/CourseDetailes'
import NavbarAfterSignup from './components/NavbarAfterSignup'
import CoursesOfEdule from './pages/CoursesOfEdule'
import MyProfile from './pages/MyProfile'
import Layout from './pages/Layout'
import StudentDashbord from './pages/StudentDashbord'
import SingleEnrolledCourse from './components/SingleEnrolledCourse'
import AddCourse from './components/AddCourse'
// import AddCo

export default function App() {
  return (
    <>
      {/* <Home/> */}
      {/* <NavigationComponent/> */}
      {/* <Signup/>
    <Login/>
    <ResetPassword/>
    <CheckEmail/>
    <NewPassword/ >
    <Resetcomplete/>
    <VerifyEmail/>
    <Aboutus/>
    <Contactus/>
    <CourseDetailes/> */}
      {/* <NavbarAfterSignup/> */}
      {/* <AllCourses/> */}
      {/* <CoursesOfEdule/> */}
      {/* <MyProfile/> */}
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/resetpassword" element={<ResetPassword/>} />
          <Route path="/checkemail" element={<CheckEmail/>} />
          <Route path="/newpassword" element={<NewPassword/>} />
          <Route path="/resetcomplete" element={<Resetcomplete/>} />
          <Route path="/verifyemail" element={<VerifyEmail/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/studentdashbord" element={<StudentDashbord/>} />
          <Route path="/coursedetailes" element={<CourseDetailes/>} />
          <Route path="/navbaraftersignup" element={<NavbarAfterSignup/>} />
          <Route path="/coursesofedule" element={<CoursesOfEdule/>} />
          <Route path="/myprofile" element={<MyProfile/>} />
          <Route path='/singleEnrolledCourse' element={<SingleEnrolledCourse/>}/>
          <Route path='/addcourse' element={<AddCourse/>}/>

        </Routes> 
      </BrowserRouter>
    </>
  )
}
