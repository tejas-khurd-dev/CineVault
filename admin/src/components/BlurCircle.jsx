import React from 'react'

const BlurCircle = ({top="auto", bottom="auto", left="auto", right="auto"}) => {
  return (
    <div className='absolute -z-10 h-58 w-58 rounded-full aspect-square bg-primary/30 blur-3xl' style={{top:top, left:left, right:right, bottom:bottom}}>
        
    </div>
  )
}

export default BlurCircle