import React from 'react'

const Input = ({...props}) => {
  return (
    <div>
        <input {...props} className='w-[100%] outline-none py-2'/>
    </div>
  )
}

export default Input