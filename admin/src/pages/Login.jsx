import React from 'react'
import { SignIn } from '@clerk/react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-black'>
      <SignIn />
    </div>
  )
}

export default Login