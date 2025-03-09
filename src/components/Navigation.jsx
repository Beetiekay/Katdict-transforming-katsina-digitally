import React, { useEffect } from 'react'
import bg from "../assets/layerbg.png"
import { Link, useLocation } from 'react-router-dom'
import Input from './Input'
import {FaFacebookF, FaInstagram, FaSearch, FaSearchLocation, FaTwitter} from "react-icons/fa"
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
    <div className='w-full backdrop-blur-2xl bg-green lg:overflow-hidden md:overflow-visible overflow-visible bg-opacity-55 border-b-2 duration-700 ease-in-out transition-all hover:bg-green hover:bg-opacity-100 border-seagreen py-6 rounded-b-lg fixed'>
        <img src={bg} className='absolute w-full top-0 opacity-35 z-20 lg:flex hidden'/>

        <div className=' text-white lg:flex md:flex hidden justify-between relative py-4 px-20'>
          <div className=' flex  items-center gap-4 w-[80%]'>
          <FaSearchLocation size={25}/>
          <div>
            <h1 className='font-semibold'>KATDICT Complex</h1>
           <p className='text-sm'>KSTIM, Ring Road, Katsina.</p>
          </div>  
          </div>

          <div className='flex gap-4'>
            <FaTwitter size={20} className='cursor-pointer hover:scale-110 duration-700 ease-in-out transition-all'/>
            <FaFacebookF size={20} className='cursor-pointer hover:scale-110 duration-700 ease-in-out transition-all'/>
            <FaInstagram size={20} className='cursor-pointer hover:scale-110 duration-700 ease-in-out transition-all'/>
          </div>
        </div>

        <div className='lg:flex md:flex block lg:justify-around md:justify-start items-center relative lg:px-0 md:px-16 px-2 lg:gap-0 md:gap-0 gap-2
        '>
         <div className='lg:mb-0 md:mb-0 mb-2'><Logo/></div>
        

        <ul className=' gap-2 text-lg hidden md:hidden lg:flex text-white opacity-80'>
            <Link to={"/"} className={Links('home')}><li>Home</li></Link>
            <Link to={"/about"} className={Links('about')}><li>About</li></Link>
            <Link className={Links('what we do')}><li>Our focus areas</li></Link>
            <Link className={Links('update')}><li>Update</li></Link>
            <Link to={"/contact"} className={Links('contact')}><li >Contact us</li></Link>
        </ul>

        <div className='bg-white px-2 rounded-md lg:flex hidden items-center gap-2'>
            <Input type="text" placeholder=" search..."/>
            <FaSearch size={20} className='text-green'/>
        </div>

        </div>


     {/* mobile hamburger menu */}
      <div  className='lg:hidden md:flex flex justify-end lg:px-2 md:px-2 px-0 w-full bg-green overflow-visible absolute'>
          <input type='checkbox' className='peer transition-transform z-40 w-10 h-10 absolute outline-none opacity-0 cursor-pointer lg:top-0 md:-top-8 -top-12 lg:right-0 md:right-6 right-4'/>
          <div data-aos="zoom-in" className='absolute text-[2.2rem] md:text-[3rem] text-white peer-checked:hidden lg:top-0 md:-top-8 -top-12 lg:right-0 md:right-6 right-4'><MdOutlineMenu /></div>
          <div  className='absolute text-[2.2rem] md:text-[3rem] text-white hidden peer-checked:flex lg:top-0 md:-top-8 -top-12 lg:right-0 md:right-6 right-4'><MdOutlineClose/></div>
          <div  className='w-[100%] duration-700 ease-in-out transition-all peer-checked:flex hidden bg-opacity-90 reltaive left-0 right-0 top-0'>
          <Mobilenav/>
          </div>
     </div>

    </div>
  )
}

export default Navigation