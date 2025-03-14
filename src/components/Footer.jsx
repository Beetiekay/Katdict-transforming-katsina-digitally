import React, { useEffect } from 'react'
import Logo from './Logo'
import katdict from '../assets/kat2.png'
import { FaFacebook, FaInstagram,FaLinkedin, FaTwitter } from 'react-icons/fa'
import bg from "../assets/layerbg.png"
import image from "../assets/kat.png";

//aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'

const Footer = () => {
    useEffect(() => {
      AOS.init({duration:1200})
   }) 
  return (
    <div className='bg-green w-[100%]  relative lg:overflow-hidden md:overflow-hidden overflow-visible'>
       <img src={bg} className='absolute w-full h-[100vh] top-0 opacity-15'/>
      <div className='w-full relative'>
        <img src={katdict} data-aos="zoom-out" className='w-full absolute lg:top-0 md:top-0 -top-[0.1rem] lg:object-fill md:object-fill object-cover'/>
        <div className='grid lg:grid-cols-2 grid-cols-1 relative lg:px-28 md:px-16 px-5 py-10 gap-10'>  
            <div className='lg:mt-24 md:mt-24 mt-8'>
               <div className='flex justify-between flex-wrap mb-4 py-2'>
                <div data-aos="zoom-in"><Logo/></div>
                  <div >
                    <h1 data-aos="zoom-in" className='text-lg font-semibold text-white opacity-80 mb-2'>Follow Us</h1>
                    <div className='flex gap-2 text-white opacity-80'>
                        <FaInstagram size={25} data-aos="zoom-in"  className='hover:scale-110 duration-700 cursor-pointer'/>
                        <FaFacebook size={25} data-aos="zoom-in" className='hover:scale-110 duration-700 cursor-pointer'/>
                        <FaLinkedin size={25} data-aos="zoom-in" className='hover:scale-110 duration-700 cursor-pointer'/>
                        <FaTwitter size={25} data-aos="zoom-in" className='hover:scale-110 duration-700 cursor-pointer'/>
                    </div>
                    </div>
                </div>
                <div className='flex lg:justify-start md:justify-center justify-center'><img src={image} data-aos="slide-right" className='lg:w-72 md:w-96 w-full'/></div>
                <p className='lg:text-lg md:text-lg text-sm lg:flex gap-2 hidden  text-white'>Copyright@ 2025 <span className='text-black font-semibold'>KATDICT</span> AllRights Reserved</p>
            </div>

            <div className='lg:mt-24 md:mt-8 mt-0'>
               {/* usefull Links */}
               <div className='flex justify-between flex-wrap  mb-4 py-2 lg:px-16 md:px-8 px-2'>
                 <div data-aos="zoom-in" className='lg:mb-0 md:mb-0 mb-2 grid grid-cols-1 space-y-2'>
                   <h1 className='text-2xl text-white mb-2'>Support Links</h1>

                   <Link className='text-white font-mono hover:translate-x-5 duration-700 cursor-pointer'>Get Support</Link>
                   <Link className='text-white hover:translate-x-5 duration-700 cursor-pointer'>Help & FAQ</Link>
                   <Link className='text-white hover:translate-x-5 duration-700 cursor-pointer'>Solutions</Link>
                   <Link className='text-white hover:translate-x-5 duration-700 cursor-pointer'>Privacy Policy</Link>
                   <Link className='text-white hover:translate-x-5 duration-700 cursor-pointer'>Contact Us</Link>
                   <Link className='text-white hover:translate-x-5 duration-700 cursor-pointer'>Terms & Service</Link>
                 </div>

                 <div data-aos="zoom-in" className='lg:mb-0 md:mb-0 mb-2 lg:mt-0 md:mt-0 mt-4 grid grid-cols-1 space-y-2'>
                   <h1 className='text-2xl font-semibold text-white mb-2'>Katdict Services</h1>

                     <Link className='text-white hover:translate-x-5 duration-700 cursor-pointer'>ICT Governance & Strategy</Link>
                     <Link className='text-white hover:translate-x-5 duration-700 cursor-pointer'>Needs Assessment & Procurement</Link>
                     <Link className='text-white  hover:translate-x-5 duration-700 cursor-pointer'>Capacity Building & Training</Link>
                     <Link className='text-white hover:translate-x-5 duration-700 cursor-pointer'>Infrastructure Management & Oversight</Link>
                     <Link className='text-white hover:translate-x-5 duration-700 cursor-pointer'>Innovation & Collaboration</Link>
                     <Link className='text-white hover:translate-x-5 duration-700 cursor-pointer'>Reporting & Advocacy</Link>
                 </div>
               </div>
               <p className='lg:text-lg md:text-lg text-sm lg:hidden md:hidden flex gap-2 text-white'>Copyright@ 2025 <span className='text-black font-semibold'>KATDICT</span> AllRights Reserved</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer