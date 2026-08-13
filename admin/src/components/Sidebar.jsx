import React from 'react'
import { NavLink } from 'react-router-dom'
import { adminNavLinks } from '../constants/adminNavLinks.js'

const AdminSidebar = () => {
  return (
    <aside className='sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-r-gray-400/20 px-3 py-4 md:block md:top-20 md:h-[calc(100vh-5rem)]'>
      <div className='flex h-full flex-col gap-3 overflow-y-auto pr-1 custom-scrollbar'>
        {adminNavLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) =>
              `relative flex w-full items-center gap-3 rounded-xl py-3 pl-5 text-sm text-gray-400 transition ${
                isActive ? 'bg-primary/15 text-primary' : 'hover:bg-white/5 hover:text-gray-200'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <link.icon className='h-5 w-5 shrink-0' />
                <p>{link.name}</p>
                <span className={`absolute right-0 h-8 w-1.5 rounded-l-xl ${isActive ? 'bg-primary' : ''}`} />
              </>
            )}
          </NavLink>
        ))}
      </div>
    </aside>
  )
}

export default AdminSidebar
