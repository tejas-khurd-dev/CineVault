import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, Search, Ticket, XIcon, LogOutIcon } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

    const {user, handleLogout} = useAuth()

    const navigate = useNavigate()

  return (
    <div className='fixed top-0 left-0 z-100 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 pt-5'>
        
        <Link to='/'>
            <img src={assets.logo} alt="logo" className='w-36 sm:w-48 md:w-72 h-auto'/>
        </Link>
        

        <div className='md:flex items-center justify-between space-x-6 text-lg rounded-4xl px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 hidden lg:mr-20'>
            <button onClick={() => { navigate("/"); scrollTo(0, 0);}}>Home</button>
            <button onClick={() => { navigate("/movies"); scrollTo(0, 0);}}>Movies</button>
            <button onClick={() => { navigate("/"); scrollTo(0, 0);}}>About</button>
            <button onClick={() => { navigate("/favourite"); scrollTo(0, 0);}}>Favourite</button>
            <button onClick={() => { navigate("/"); scrollTo(0, 0);}}>Releases</button>
        </div>

        
        <div className='relative flex items-center justify-between space-x-6'>
            <Search className='w-5 h-5 md:w-8 md:h-8 cursor-pointer'/>
            
            {
                !user ? (
                    <button onClick={() => navigate("/login")} className='rounded-2xl bg-primary px-4 md:px-5 py-1 text-lg'>Login</button>
                ): (
                    <div className='relative'>
                      <button
                        onClick={() => setIsUserMenuOpen((value) => !value)}
                        className='flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-2.5 py-1.5'
                      >
                        {user.profileImage ? (
                          <img
                            src={user.profileImage}
                            alt={user.username}
                            className='w-8 h-8 rounded-full object-cover'
                          />
                        ) : (
                          <div className='w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-semibold'>
                            {user.username?.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <span className='hidden sm:block text-sm max-w-28 truncate'>{user.username}</span>
                      </button>

                      {isUserMenuOpen && (
                        <div className='absolute right-0 mt-3 w-48 rounded-xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-xl overflow-hidden'>
                          <button
                            onClick={() => {
                              navigate('/my-bookings')
                              scrollTo(0, 0)
                              setIsUserMenuOpen(false)
                            }}
                            className='w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-white/5'
                          >
                            <Ticket size={16} />
                            My Bookings
                          </button>
                          <button
                            onClick={async () => {
                              await handleLogout()
                              setIsUserMenuOpen(false)
                              navigate('/')
                            }}
                            className='w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-white/5 border-t border-white/10'
                          >
                            <LogOutIcon size={16} />
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                )
            }
        </div>


        <MenuIcon 
            className='w-8 h-8 mx-4 md:hidden cursor-pointer' 
            onClick={()=> setIsOpen(true)}

        />
        {isOpen && <div className='w-2/3 max-w-xs h-screen bg-black/90 fixed left-0 top-0 border-r border-white/10 z-50'>
            <XIcon className='w-6 h-6 bg-white/30 rounded-full mx-4 my-10 cursor-pointer' onClick={()=> setIsOpen(false)}/>
            <div className='flex flex-col items-start gap-8 px-10'>
                <Link to='/' onClick={()=>setIsOpen(false)}>Home</Link>
                <Link to='/movies' onClick={()=>setIsOpen(false)}>Movies</Link>
                <Link to='/' onClick={()=>setIsOpen(false)}>About</Link>
                <Link to='/favourite' onClick={()=>setIsOpen(false)}>Favourite</Link>
                <Link to='/' onClick={()=>setIsOpen(false)}>Releases</Link>
            </div>
        </div>}
        
    </div>
  )
}

export default Navbar