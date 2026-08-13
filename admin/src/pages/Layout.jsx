import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <div className='flex min-h-screen pt-16 md:pt-20'>
        <Sidebar />

        <main className='flex-1 overflow-x-hidden px-4 py-4 sm:px-6 sm:py-6 lg:px-8'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Layout
