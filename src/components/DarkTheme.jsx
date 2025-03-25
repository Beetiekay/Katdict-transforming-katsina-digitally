import React, { useEffect, useState } from 'react'
import { FaLaptop } from 'react-icons/fa';
import Lighttoggle from './Lighttoggle';
import Darkmode from './Darkmode';
import arrow from "../assets/arrow.png"
import darkarrow from "../assets/blackarrow.png"

const DarkTheme = () => {

const [theme, setTheme] = useState('light');

// useeffect down here 
 useEffect(() =>{
   if (localStorage.getItem('theme') === null) {
     localStorage.setItem('theme', 'light');
   }
}, [])

useEffect (() => {
  const html = document.querySelector('html');
   if (localStorage.getItem('theme') === 'dark') {
     html.classList.add('dark');
     setTheme('dark'); 
   } else {
     html.classList.remove('dark');
     setTheme('light');
   }
}, [theme]);

// handle theme
const handleThemeSwitch = ()=> {
    if (localStorage.getItem('theme') === 'light') {
     setTheme('dark');
     localStorage.setItem('theme', 'dark');

    } else {
       setTheme('light');
       localStorage.setItem('theme', 'light');
    }
};

  return (
    <div className='fixed z-20 lg:top-36 md:top-36  top-28 px-6 lg:right-4 md:right-4 -right-10'>
      <div>
       <input type='checkbox' className='peer absolute right-16 z-30 opacity-0 cursor-pointer transition-transform w-8 h-6'/>
       <div data-aos="data-zoom-in" className='absolute peer-checked:scale-125 right-16 z-10'><button className='p-2 bg-green rounded-full'><FaLaptop className='text-white text-sm'/></button></div>
       <div className='peer-checked:opacity-85 hidden dark:flex  dark:opacity-0'><img src={arrow} className='w-16 relative top-5 right-10'/></div>
       <div className='peer-checked:opacity-85 hidden peer-checked:flex'><img src={darkarrow} className='w-16 dark:opacity-0 relative top-5 right-10'/></div>
       <div className='absolute hidden peer-checked:flex top-2 right-32'>
        <button onClick={handleThemeSwitch}  className='p-2 rounded-2xl bg-green mt-10 text-white bg-opacity-75 outline-none'>
            {
                theme === 'light' ? <Darkmode /> : <Lighttoggle/>
            }
        </button>
       </div>
        </div>
    </div>
  )
}

export default DarkTheme