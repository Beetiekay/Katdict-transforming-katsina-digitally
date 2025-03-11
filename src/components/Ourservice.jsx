import React from 'react'
import Servicec from '../pages/Home/Servicec'
import image1 from "../assets/ana1.jpg"
import image2 from "../assets/ana2.jpg"
import image3 from "../assets/ana3.jpg"
import Works from '../pages/Home/Works'
import Upadate from '../pages/Home/Upadate'

const Ourservice = () => {
   
  return (
    <div className='w-full'>
      <div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:px-24 md:px-8 px-2 mb-4'>
        <Servicec 
         image={image1}
         tittle="ICT Government & Strategy"
         paragh="Coordinate state ICT activities, implement strategic policy frameworks, and drive automation initiatives to streamline government processes."
         />
        <Servicec 
         image={image2}
         tittle="Infrastructure Management & Oversight"
         paragh="Maintain state-owned technology platforms, oversee technology providers, and ensure efficient infrastructure for all ICT needs."
         />
        <Servicec 
         image={image3}
         tittle="Needs Assessment & Procurement"
         paragh="Conduct assessments, recommend innovative solutions, procure ICT resources, and champion efficient procurement practices."
         />
      </div>
      <Works/>
      <Upadate/>
      </div>
    </div>
  )
}

export default Ourservice