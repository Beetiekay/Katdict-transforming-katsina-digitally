import React, { useEffect, useState } from 'react'
import Home from '../pages/Home/Home'
import Divider from './Divider'

const Pageload = () => {
      const [open, setOpen] = useState(false);
     
         useEffect(() => {
         setOpen(true)
     
         setTimeout(() => {
         setOpen(false)
     
         }, 4000);
       },[])
  return (
    <div >
      <div>
      {
         open &&(
            <div className='w-full h-full flex justify-center transition-all dark:bg-black dark:bg-opacity-35 fixed peer-checked:hidden items-center backdrop-blur-sm top-0 z-50 bg-green bg-opacity-50'>
            <Divider/>
            </div>
         )
         }
      </div>
    </div>
  )
}

export default Pageload