import React from 'react'

const BlurCircle = ({top="auto", bottom="auto", left="auto", right="auto"}) => {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none absolute -z-10 h-56 w-56 rounded-full aspect-square bg-primary/25 blur-3xl sm:h-64 sm:w-64'
      style={{ top, left, right, bottom }}
    />
  )
}

export default BlurCircle
