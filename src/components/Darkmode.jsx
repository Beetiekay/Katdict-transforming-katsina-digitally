import React from 'react'
import { FaSun } from 'react-icons/fa'

const Darkmode = () => {
  return (
    <div className='flex items-center gap-1'>
        <FaSun/>
        <p className='text-xs'>DarkMode</p>
    </div>
  )
}

export default Darkmode