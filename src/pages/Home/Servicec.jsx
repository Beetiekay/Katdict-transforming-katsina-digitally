import React from 'react'
import Button from '../../components/Button'
import { useEffect } from 'react'

//aos
import AOS from 'aos'
import "aos/dist/aos.css"

const Servicec = (props) => {
  useEffect
  (() => {
        AOS.init({duration:1200})
     })
  return (
    <div data-aos="fade-up" className='bg-white dark:bg-opacity-40 dark:bg-green shadow-md hover:translate-y-3 duration-500 hover:border hover:border-green rounded-2xl p-4'>
      <img src={props.image} className='mb-4 rounded-t-2xl'/>
      <h1 className='text-2xl font-semibold text-green mb-2'>{props.tittle}</h1>
      <p className='opacity-80 mb-4 dark:text-white'>{props.paragh}</p>
      <Button label={"Read More"}/>
    </div>
  )
}

export default Servicec