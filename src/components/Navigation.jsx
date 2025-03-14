import React, { useEffect } from 'react'
import bg from "../assets/layerbg.png"
import { Link, useLocation } from 'react-router-dom'
import Input from './Input'
import {FaFacebookF, FaInstagram, FaPhone, FaSearch, FaSearchLocation, FaTwitter} from "react-icons/fa"
import Logo from './Logo'
import Mobilenav from './Mobilenav'
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md'

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Navigation = () => {
  useEffect(() => {
    AOS.init({duration:1200})
 }) 

    let {pathname} = useLocation()
   let subpage = pathname.split('/')?.[1]

   function Links (type = null){
      let classes = ''
      if(subpage === ''){
        subpage ="home"
      }

      if(type === subpage){
        classes += " bg-white rounded-sm text-green shadow-lg px-4 py-1 "
      }else{
        classes += " py-1 px-4"
      }
      return classes
   }
  return (
    <div className='w-[100%] backdrop-blur-2xl bg-green lg:overflow-hidden md:overflow-visible overflow-visible bg-opacity-55 border-b-2 duration-700 ease-in-out transition-all hover:bg-green hover:bg-opacity-100 border-seagreen lg:py-6 md:py-6 py-4 rounded-b-lg fixed'>
        <img src={bg} className='absolute w-full top-0 opacity-15 lg:flex hidden'/>

        <div className=' text-white flex justify-between relative lg:py-4 md:py-4 py-2 lg:px-20 md:px-20 px-4 lg:mb-0 md:mb-0 mb-2'>
          <div className=' lg:flex md:flex hidden  items-center gap-4 w-[80%]'>
          <FaSearchLocation size={25}/>
          <div>
            <h1 className='font-semibold'>KATDICT Complex</h1>
           <p className='text-sm'>KSTIM, Ring Road, Katsina.</p>
          </div>  
          </div>
           
           <div className='lg:hidden md:hidden flex items-center justify-between w-full'>
            <div className='flex items-center opacity-80 gap-2'><FaPhone className=''/><p className='text-xs '>070-KATDICT</p></div>
             <div className='text-sm opacity-80'>Info@katdict.ng</div>
            </div>

          <div className='lg:flex md:flex hidden gap-4'>
            <FaTwitter size={20} className='cursor-pointer hover:scale-110 duration-700 ease-in-out transition-all'/>
            <FaFacebookF size={20} className='cursor-pointer hover:scale-110 duration-700 ease-in-out transition-all'/>
            <FaInstagram size={20} className='cursor-pointer hover:scale-110 duration-700 ease-in-out transition-all'/>
          </div>
        </div>

        <div className='lg:flex md:flex block lg:justify-around md:justify-start items-center relative lg:px-0 md:px-16 px-4 lg:gap-0 md:gap-0 gap-2
        '>
         <div className='lg:mb-0 md:mb-0 mb-2'><Logo/></div>
        

        <ul className=' gap-2 text-lg hidden md:hidden lg:flex text-white opacity-80'>
            <Link to={"/"} className={Links('home')}><li>Home</li></Link>
            <Link to={"/about"} className={Links('about')}><li>About</li></Link>
            <Link to={"/focus"} className={Links('focus')}><li>Our Focus Areas</li></Link>
            <Link to={"/update"} className={Links('update')}><li>Update</li></Link>
            <Link to={"/contact"} className={Links('contact')}><li >Contact us</li></Link>
        </ul>

        <form action='' className='bg-whitegray px-2 rounded-md lg:flex hidden items-center gap-2'>
            <Input type="text" placeholder=" search..."/>
            <button type='sumbit' className='outline-none'><FaSearch size={20} className='text-green'/></button>
        </form>

        </div>


     {/* mobile hamburger menu */}
      <div className='lg:hidden md:flex flex justify-end lg:px-2 md:px-2 px-0 w-[100%] bg-green overflow-visible absolute'>
          <input type='checkbox' className='peer transition-transform z-40 w-8 h-8 absolute outline-none opacity-0 cursor-pointer lg:top-0 md:-top-8 -top-12 lg:right-0 md:right-6 right-6'/>
          <div data-aos="zoom-in" className='absolute text-[2.2rem] md:text-[3rem] text-white peer-checked:hidden lg:top-0 md:-top-8 -top-12 lg:right-0 md:right-6 right-4'><MdOutlineMenu /></div>
          <div  className='absolute text-[2.2rem] md:text-[3rem] text-white hidden peer-checked:flex lg:top-0 md:-top-8 -top-12 lg:right-0 md:right-6 right-6'><MdOutlineClose/></div>
          <div className='w-[100%] duration-700 ease-in-out transition-all peer-checked:flex hidden bg-opacity-90 reltaive left-0 right-6 top-0'>
           <Mobilenav/>
          </div>
     </div>

    </div>
  )
}

export default Navigation