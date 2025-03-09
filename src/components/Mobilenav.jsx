import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Input from './Input'
import { FaSearch } from 'react-icons/fa'

const Mobilenav = () => {
      let {pathname} = useLocation()
       let subpage = pathname.split('/')?.[1]
    
       function Links (type = null){
          let classes = ''
          if(subpage === ''){
            subpage ="home"
          }
    
          if(type === subpage){
            classes += " rounded-sm text-white opacity-60 px-4 py-1 w-[100%]"
          }else{
            classes += " py-1 px-40 w-[100%] text-white "
          }
          return classes
       }
  return (
    <div className='w-[80%] min-h-[100vh] px-10 backdrop-blur-sm relative z-50'>
        <ul className='text-lg block space-y-2 text-white opacity-80'>
            <Link to={"/"} className={Links('home')}><li>Home</li></Link>
            <Link to={"/about"} className={Links('about')}><li>About</li></Link>
            <Link className={Links('what we do')}><li>Our focus areas</li></Link>
            <Link className={Links('update')}><li>Update</li></Link>
            <Link to={"/contact"} className={Links('contact')}><li >Contact us</li></Link>
        </ul>

        <div className='bg-white px-2 rounded-md lg:hidden flex md:hidden items-center gap-2'>
            <Input type="text" placeholder=" search..."/>
            <FaSearch size={20} className='text-green'/>
        </div>
</div>
  )
}

export default Mobilenav