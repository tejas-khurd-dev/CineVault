import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { LogOutIcon, User, MenuIcon, XIcon } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { adminNavLinks } from '../constants/adminNavLinks.js'

const Navbar = () => {
  const { user, handleLogout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const navigate = useNavigate()

  if (user?.role !== 'admin') return null

  const onLogout = async () => {
    await handleLogout()
    setIsMenuOpen(false)
    setIsMobileNavOpen(false)
  }

  return (
    <div className='fixed inset-x-0 top-0 z-[100] h-16 border-b border-b-gray-400/20 bg-black/95 backdrop-blur-xl md:h-20'>
      <div className='mx-auto flex h-full w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-3'>
        <button
          onClick={() => setIsMobileNavOpen((v) => !v)}
          className='rounded-full p-2 text-gray-300 transition hover:bg-white/5 hover:text-primary cursor-pointer md:hidden'
          aria-label='Toggle menu'
        >
          {isMobileNavOpen ? <XIcon className='w-6 h-6' /> : <MenuIcon className='w-6 h-6' />}
        </button>

        <Link to='/'>
          <img src={assets.logo} alt='logo' className='h-auto w-28 sm:w-36 md:w-40' />
        </Link>
        </div>

        <div className='relative'>
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className='flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5 cursor-pointer transition hover:border-primary/40 hover:bg-white/10 sm:gap-3'
          >
            <img
              src={user.profileImage}
              alt={user?.username || 'Admin'}
              className='h-8 w-8 rounded-full object-cover ring-1 ring-white/10'
            />
            <span className='hidden text-sm font-medium sm:block'>{user.username}</span>
          </button>

          {isMenuOpen && (
            <div className='absolute right-0 mt-3 w-40 overflow-hidden rounded-xl border border-white/10 bg-black/95 shadow-xl backdrop-blur-xl'>
              <button
                onClick={() => {
                  navigate('/profile')
                  window.scrollTo(0, 0)
                  setIsMenuOpen(false)
                  setIsMobileNavOpen(false)
                }}
                className='flex w-full items-center gap-2 px-4 py-3 text-left cursor-pointer hover:bg-white/5'
              >
                <User size={16} />
                Profile
              </button>

              <button
                onClick={onLogout}
                className='flex w-full items-center gap-2 border-t border-white/10 px-4 py-3 text-left cursor-pointer hover:bg-white/5'
              >
                <LogOutIcon size={16} />
                Logout
              </button>
            </div>
          )}
        </div>

        {isMobileNavOpen && (
          <>
            <button
              aria-label='Close menu'
              className='fixed inset-0 z-[90] bg-black/55 backdrop-blur-sm md:hidden'
              onClick={() => setIsMobileNavOpen(false)}
            />
            <div className='fixed left-0 top-0 z-[95] h-full w-[82%] h-screen max-w-xs border-r border-white/10 bg-black/95 px-5 py-6 shadow-2xl md:hidden'>
              <div className='flex items-center justify-between'>
                <img src={assets.logo} alt='logo' className='w-28 h-auto' />
                <XIcon
                  className='h-6 w-6 cursor-pointer rounded-full'
                  onClick={() => setIsMobileNavOpen(false)}
                />
              </div>

              <div className='mt-10 flex flex-col items-start gap-2 text-lg'>
                {adminNavLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => {
                      setIsMobileNavOpen(false)
                      setIsMenuOpen(false)
                    }}
                    className={({ isActive }) =>
                      `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition ${
                        isActive ? 'bg-primary/10 text-primary' : 'text-gray-300 hover:bg-white/5'
                      }`
                    }
                  >
                    <link.icon className='h-4 w-4 shrink-0' />
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar