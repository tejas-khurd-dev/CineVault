import React from 'react'
import {ThreeDot} from 'react-loading-indicators'

const Loading = () => {
  return (
    <div className='h-[80vh] flex flex-col justify-center items-center gap-2'>
        <ThreeDot color="#f84565" size="small" text="" textColor="" />
        <p className='text-primary'>Loading</p>
    </div>
  )
}

export default Loading