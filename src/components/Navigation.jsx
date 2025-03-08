import React from 'react'
import bg from "../assets/layerbg.png"
import { Link, useLocation } from 'react-router-dom'
import Input from './Input'
import {FaFacebookF, FaInstagram, FaSearch, FaSearchLocation, FaTwitter} from "react-icons/fa"
import Logo from './Logo'

const Navigation = () => {
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
    <div className='w-full backdrop-blur-2xl bg-green bg-opacity-55 border-b-2 duration-700 ease-in-out transition-all hover:bg-green hover:bg-opacity-95 border-seagreen py-6  overflow-hidden rounded-b-lg fixed'>
        <img src={bg} className='absolute w-full top-0 opacity-35'/>

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

        <div className='flex justify-around items-center relative lg:px-0 md:px-0 px-2 lg:gap-0 md:gap-0 gap-2
        '>
         <div><Logo/></div>
        

        <ul className=' gap-2 text-lg hidden md:hidden lg:flex text-white opacity-80'>
            <Link to={"/"} className={Links('home')}><li>Home</li></Link>
            <Link to={"/about"} className={Links('about')}><li>About</li></Link>
            <Link className={Links('what we do')}><li>Our focus areas</li></Link>
            <Link className={Links('update')}><li>Update</li></Link>
            <Link to={"/contact"} className={Links('contact')}><li >Contact us</li></Link>
        </ul>
        <div className='bg-white px-2 rounded-md flex items-center gap-2'>
            <Input type="text" placeholder=" search..."/>
            <FaSearch size={20} className='text-green'/>
        </div>
        </div>
    </div>
  )
}

export default Navigation