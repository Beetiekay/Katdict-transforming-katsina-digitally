import React from 'react'
import logo from "../assets/katdict.png"


const Logo = () => {
  return (
    <div className='flex gap-2'>
        <div><img src={logo} className='w-16'/></div>
        <div className='flex items-center'>
        <div>
         <h1 className='text-[16px] text-white font-serif font-semibold'>KATDICT</h1>
         <div className='w-20 h-3 gap-1 flex'>
            <div className='w-6 h-1 bg-white rounded-lg'></div>
            <div className='w-14 h-1  bg-white rounded-lg'></div>
         </div>
         </div>
        </div>
  </div>
  )
}

export default Logo