import React from 'react'
import {ThreeDot} from 'react-loading-indicators'

const Loading = () => {
  return (
    <div className='flex min-h-[50vh] flex-col items-center justify-center gap-2 py-10'>
        <ThreeDot color="#f84565" size="small" text="" textColor="" />
        <p className='text-primary'>Loading</p>
    </div>
  )
}

export default Loading
