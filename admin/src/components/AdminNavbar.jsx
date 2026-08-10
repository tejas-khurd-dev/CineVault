import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { LogOutIcon, User } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

const AdminNavbar = () => {
  const { user, handleLogout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate()

  if (user?.role !== 'admin') return null

  const onLogout = async () => {
    await handleLogout()
    setIsMenuOpen(false)
  }

  return (
    <div className='w-full fixed border-b border-b-gray-400/20 py-4 px-5 sm:px-8 flex justify-between items-center bg-black z-100'>
      <Link to='/'>
        <img src={assets.logo} alt="logo" className='w-32 sm:w-40 h-auto' />
      </Link>

      <div className='relative'>
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className='flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-2 py-1'
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
            
            {/* Profile */}
            <button
              onClick={() => {
                navigate("/profile")
                scrollTo(0, 0)
                setIsMenuOpen(false)
              }}
              className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-white/5"
            >
              <User size={16} />
              Profile
            </button>

            {/* Logout */}
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-white/5 border-t border-white/10"
            >
              <LogOutIcon size={16} />
              Logout
            </button>

          </div>
        )}
      </div>
    </div>
  )
}

export default AdminNavbar