import React from 'react'
import Button from '../../components/Button'


const Cardw = (props) => {
  return (
    <div className='bg-white dark:bg-green dark:bg-opacity-40 shadow-md py-4 rounded-xl px-4 hover:translate-y-4 duration-700'>
       <img src={props.image} className='rounded-2xl object-cover'/>
       <h1 className='lg:text-2xl dark:text-white md:text-2xl text-lg font-semibold mb-1'>{props.tittle}</h1>
       <h4 className='lg:text-lg md:text-lg text-sm dark:text-white dark:opacity-70 text-green mb-2'>{props.desc}</h4>
       <p className='opacity-70 mb-6 dark:text-white lg:text-start md:text-start text-xs'>{props.paragh}</p>
       <Button label={"View Case Study >"}/>
    </div>
  )
}

export default Cardw