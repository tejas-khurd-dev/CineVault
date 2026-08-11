import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { LogOutIcon, User, MenuIcon, XIcon } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { adminNavLinks } from '../constants/adminNavLinks.js'

const AdminNavbar = () => {
  const { user, handleLogout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const navigate = useNavigate()

  if (user?.role !== 'admin') return null

  const onLogout = async () => {
    await handleLogout()
    setIsMenuOpen(false)
  }

  return (
    <div className='w-full fixed border-b border-b-gray-400/20 py-4 px-4 sm:px-8 flex justify-between items-center bg-black z-100'>
      <div className='flex items-center gap-3'>
        {/* Mobile menu toggle — sidebar links live here below md */}
        <button
          onClick={() => setIsMobileNavOpen((v) => !v)}
          className='md:hidden p-1 text-gray-300 hover:text-primary cursor-pointer'
          aria-label='Toggle menu'
        >
          {isMobileNavOpen ? <XIcon className='w-6 h-6' /> : <MenuIcon className='w-6 h-6' />}
        </button>

        <Link to='/'>
          <img src={assets.logo} alt="logo" className='w-28 sm:w-40 h-auto' />
        </Link>
      </div>

      <div className='relative'>
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className='flex items-center gap-2 sm:gap-3 rounded-full border border-white/15 bg-white/5 px-2 py-1 cursor-pointer'
        >
          <img
            src={user.profileImage}
            alt={user?.username || 'Admin'}
            className='w-8 h-8 rounded-full object-cover'
          />
          <span className='hidden sm:block text-sm font-medium'>{user.username}</span>
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-3 w-40 rounded-xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-xl overflow-hidden">
            <button
              onClick={() => {
                navigate("/profile")
                scrollTo(0, 0)
                setIsMenuOpen(false)
              }}
              className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-white/5 cursor-pointer"
            >
              <User size={16} />
              Profile
            </button>

            <button
              onClick={onLogout}
              className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-white/5 border-t border-white/10 cursor-pointer"
            >
              <LogOutIcon size={16} />
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Mobile nav — sidebar links, shown below md when hamburger is open */}
      {isMobileNavOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-black border-b border-b-gray-400/20 flex flex-col py-2 z-50'>
          {adminNavLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setIsMobileNavOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 text-sm ${
                  isActive ? 'text-primary bg-primary/10' : 'text-gray-300'
                }`
              }
            >
              <link.icon className='w-4 h-4' />
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminNavbar