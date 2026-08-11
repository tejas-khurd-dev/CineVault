import React from 'react'
import { NavLink } from 'react-router-dom'
import { adminNavLinks } from '../constants/adminNavLinks.js'

const AdminSidebar = () => {
  return (
    <div className='hidden md:block w-60 border-r-2 border-r-gray-400/20 px-2 pb-5'>
      <div className='flex flex-col gap-4'>
        {adminNavLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) =>
              `relative flex items-center gap-3 w-full py-2.5 pl-10 first:mt-6 text-gray-400 transition ${
                isActive ? 'bg-primary/15 text-primary rounded-xl' : 'hover:text-gray-200'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <link.icon className='w-5 h-5' />
                <p>{link.name}</p>
                <span className={`w-1.5 h-8 rounded-l-xl right-0 absolute ${isActive ? 'bg-primary' : ''}`} />
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default AdminSidebar