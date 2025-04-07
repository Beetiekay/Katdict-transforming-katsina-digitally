import React, { useEffect, useState } from 'react'
import Home from '../pages/Home/Home'
import Divider from './Divider'

const Pageload = () => {
      const [loading, setloading] = useState(false)
         useEffect(() => {
         setloading(true)
         setTimeout(() => {
          setloading(false)
         }, 4000)
    
         },[])
  return (
    <div className='w-[100%] h-[100vh] absolute z-50 bg-white dark:bg-black'>
      <div>
         {
            loading ?
            <div className='w-full'>
            <Divider/>
            </div>
             :
           <Home/>
         }
      </div>
    </div>
  )
}

export default Pageload