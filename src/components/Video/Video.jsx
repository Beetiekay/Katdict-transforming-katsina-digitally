import React, { useState } from 'react'
import { FaPlayCircle } from 'react-icons/fa';
import Alert from './Alert';

const Video = () => {
  const [ShowAlert, setShowAlert] = useState(false);

  const handleOnClose = () => setShowAlert(false);

  return (
    <div>
         <button onClick={() => setShowAlert(true)}  className='outline-none p-2 rounded-full border-2 border-green '><FaPlayCircle className='text-green hover:scale-110 transition-all ease-out duration-700 text-7xl animate-pulse'/></button>
        <Alert onClose={handleOnClose} Visible={ShowAlert}/>
    </div>
   
  )
}

export default Video;