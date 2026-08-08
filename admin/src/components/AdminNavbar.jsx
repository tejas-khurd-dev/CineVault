import React from 'react'
import { assets } from '../assets/assets'
import {Link} from 'react-router-dom'
import {useUser, useClerk, UserButton} from '@clerk/react'

const AdminNavbar = () => {

  const {user} = useUser()


  return (
    <div className='w-full fixed border-b border-b-gray-400/20 py-5 px-10 flex justify-between items-center bg-black z-100'>
      <Link to='/'>
        <img src={assets.logo} alt="logo" className='w-36 sm:w-48 md:w-72 h-auto'/>
      </Link>
      
      <UserButton
        appearance={{
          elements: {
  
            userButtonAvatarBox: {
              width: '2.8rem',
              height: '2.8rem',
              backgroundImage: `url(${assets.adminPFP})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            },
            userButtonAvatarImage: {
              display: 'none',
            },


            userPreviewAvatarBox: {
              width: '3rem',
              height: '3rem',
              backgroundImage: `url(${assets.adminPFP})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            },
            userPreviewAvatarImage: {
              display: 'none',
            },
          },
        }}
      />
    </div>
  )
}

export default AdminNavbar