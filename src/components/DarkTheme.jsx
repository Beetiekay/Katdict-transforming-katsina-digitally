import React, { useEffect, useState } from 'react'
import Lighttoggle from './Lighttoggle';
import Darkmode from './Darkmode';
import { FaCloudSun } from 'react-icons/fa';


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
    <div className='fixed z-20 lg:top-36 md:top-36  top-28 px-6 lg:right-4 md:right-4 -right-5'>
      <div>
       <input type='checkbox' className='peer absolute right-16 z-30 opacity-0 cursor-pointer transition-transform w-8 h-6'/>
       <div data-aos="data-zoom-in" className='absolute peer-checked:scale-125 right-16 z-10'><button className='p-2 bg-green rounded-full'><FaCloudSun className='text-white text-sm'/></button></div>
       <div className='hidden h-0 peer-checked:h-14 duration-700 transition-all ease-out peer-checked:flex'><div  className='w-[0.90%] h-14 bg-green absolute right-[4.8rem] top-2'></div></div>
       <div className='absolute hidden peer-checked:flex top-6 lg:right-6 md:right-6 right-10'>
        <button onClick={handleThemeSwitch}  className='p-[2px] rounded-2xl bg-green mt-10 text-white outline-none'>
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