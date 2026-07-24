import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, Search, Ticket, XIcon } from 'lucide-react'
import { useState } from 'react'
import { useClerk, UserButton, useUser } from '@clerk/react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const {user} = useUser()
    const {openSignIn} = useClerk()

    const navigate = useNavigate()

  return (
    <div className='fixed top-0 left-0 z-100 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-6'>
        
        <Link to='/'>
            <img src={assets.logo} alt="logo" className='w-72 h-auto'/>
        </Link>
        

        <div className='md:flex items-center justify-between space-x-6 text-lg rounded-4xl px-6 py-3 bg-white/10 border border-white/20 hidden mr-6'>
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/favourite'>Favourite</Link>
            <Link to='/'>Releases</Link>
        </div>

        
        <div className='flex items-center justify-between space-x-6'>
            <Search className='w-5 h-5 md:w-8 md:h-8 cursor-pointer'/>
            
            {
                !user ? (
                    <button onClick={openSignIn} className='rounded-2xl bg-primary px-4 md:px-5 py-1 text-lg'>Login</button>
                ): (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label='My Bookings' labelIcon={<Ticket size={16} />} onClick={()=>navigate('/mybookings')}/>
                        </UserButton.MenuItems>
                    </UserButton>
                )
            }
        </div>


        <MenuIcon 
            className='w-8 h-8 mx-4 md:hidden cursor-pointer' 
            onClick={()=> setIsOpen(true)}

        />
        {isOpen && <div className='w-1/2 h-screen bg-black/90 absolute left-0 top-0 border-r border-white/10'>
            <XIcon className='w-6 h-6 bg-white/30 rounded-full mx-4 my-10 cursor-pointer' onClick={()=> setIsOpen(false)}/>
            <div className='flex flex-col items-center justify-between space-y-8 absolute left-10'>
                <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>
                <Link to='/favourite'>Favourite</Link>
                <Link to='/'>Releases</Link>
            </div>
        </div>}
        
    </div>
  )
}

export default Navbar