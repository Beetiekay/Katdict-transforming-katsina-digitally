import React from 'react'
import logo from "../assets/katdict.png"
import bg from "../assets/bg.jpg"
import { Link, useLocation } from 'react-router-dom'
import Input from './Input'
import {FaSearch} from "react-icons/fa"

const Navigation = () => {
    let {pathname} = useLocation()
   let subpage = pathname.split('/')?.[1]

   function Links (type = null){
      let classes = ''
      if(subpage === ''){
        subpage ="home"
      }

      if(type === subpage){
        classes += " bg-gray rounded-sm bg-opacity-45 shadow-lg px-4 py-1 "
      }else{
        classes += " py-1 px-4"
      }
      return classes
   }
  return (
    <div className='w-full bg-green  py-6  overflow-hidden rounded-b-lg fixed'>
        <img src={bg} className='absolute w-full top-0 opacity-35'/>
        <div className='flex justify-around items-center relative'>
        <div className='flex gap-2'>
            <img src={logo} className='w-12'/>
            <div>
                <h1 className='text-xl text-white font-serif font-bold'>KATDICT</h1>
            </div>
        </div>

        <ul className='flex gap-2 text-lg text-white opacity-80'>
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