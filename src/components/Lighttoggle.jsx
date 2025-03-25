import React from 'react'
import { FaCloudMoon } from 'react-icons/fa'

const Lighttoggle = () => {
  return (
    <div className='flex items-center gap-1'>
        <FaCloudMoon/>
        <p className='text-xs'>LightMode</p>
    </div>
  )
}

export default Lighttoggle