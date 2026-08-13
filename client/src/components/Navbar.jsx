import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, Search, Ticket, XIcon, LogOutIcon, User } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  const { user, handleLogout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
    setIsUserMenuOpen(false)
  }, [location.pathname])

  const goTo = (path) => {
    navigate(path)
    scrollTo(0, 0)
  }

  return (
    <div className='fixed inset-x-0 top-0 z-[100] px-4 sm:px-6 md:px-16 lg:px-36 pt-4'>
      <div className='mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 md:border-gray-600/20 bg-black/70 md:bg-black/10 px-4 sm:px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl'>
        <Link to='/' className='shrink-0'>
          <img src={assets.logo} alt='logo' className='h-auto w-28 sm:w-36 md:w-44 lg:w-52' />
        </Link>

        <nav className='hidden lg:flex items-center gap-6 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-base xl:text-lg'>
          <button onClick={() => goTo('/')}>Home</button>
          <button onClick={() => goTo('/movies')}>Movies</button>
          <button onClick={() => goTo('/')}>About</button>
          <button onClick={() => goTo('/favourite')}>Favourite</button>
          <button onClick={() => goTo('/')}>Releases</button>
        </nav>

        <div className='relative flex items-center gap-3 sm:gap-4'>

          {!user ? (
            <button
              onClick={() => goTo('/login')}
              className='rounded-2xl bg-primary px-4 py-2 text-sm font-medium sm:px-5 sm:text-base'
            >
              Login
            </button>
          ) : (
            <div className='relative'>
              <button
                onClick={() => setIsUserMenuOpen((value) => !value)}
                className='flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-2.5 py-1.5'
              >
                {user.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt={user.username}
                    className='h-8 w-8 rounded-full object-cover'
                  />
                ) : (
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold'>
                    {user.username?.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className='hidden max-w-28 truncate text-sm sm:block'>{user.username}</span>
              </button>

              {isUserMenuOpen && (
                <div className='absolute right-0 mt-3 w-48 overflow-hidden rounded-xl border border-white/10 bg-black/95 shadow-xl backdrop-blur-xl'>
                  <button
                    onClick={() => {
                      goTo('/profile')
                      setIsUserMenuOpen(false)
                    }}
                    className='flex w-full items-center gap-2 px-4 py-3 text-left hover:bg-white/5'
                  >
                    <User size={16} />
                    Profile
                  </button>

                  <button
                    onClick={() => {
                      goTo('/my-bookings')
                      setIsUserMenuOpen(false)
                    }}
                    className='flex w-full items-center gap-2 border-t border-white/10 px-4 py-3 text-left hover:bg-white/5'
                  >
                    <Ticket size={16} />
                    My Bookings
                  </button>

                  <button
                    onClick={async () => {
                      await handleLogout()
                      setIsUserMenuOpen(false)
                      goTo('/')
                    }}
                    className='flex w-full items-center gap-2 border-t border-white/10 px-4 py-3 text-left hover:bg-white/5'
                  >
                    <LogOutIcon size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          <MenuIcon
            className='ml-1 h-8 w-8 cursor-pointer md:hidden'
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {isOpen && (
        <>
          <button
            aria-label='Close menu'
            className='fixed inset-0 z-[90] bg-black/55 backdrop-blur-sm'
            onClick={() => setIsOpen(false)}
          />
          <div className='fixed left-0 top-0 z-[95] h-full w-[82%] max-w-xs border-r border-white/10 bg-black/95 px-5 py-6 shadow-2xl'>
            <div className='flex items-center justify-between'>
              <img src={assets.logo} alt='logo' className='w-28 h-auto' />
              <XIcon className='h-6 w-6 cursor-pointer rounded-full' onClick={() => setIsOpen(false)} />
            </div>

            <div className='mt-10 flex flex-col items-start gap-6 text-lg'>
              <Link to='/' onClick={() => setIsOpen(false)}>Home</Link>
              <Link to='/movies' onClick={() => setIsOpen(false)}>Movies</Link>
              <Link to='/' onClick={() => setIsOpen(false)}>About</Link>
              <Link to='/favourite' onClick={() => setIsOpen(false)}>Favourite</Link>
              <Link to='/' onClick={() => setIsOpen(false)}>Releases</Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar
