import React from 'react'

const Button = ({label}) => {
  return (
    <button className='w-full py-4 border-2 border-green text-green rounded-xl duration-700 ease-out transition-all hover:bg-green hover:text-white'>{label}</button>
  )
}

export default Button