import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <div className="flex pt-22">
        <Sidebar />

        <div className='flex-1 overflow-y-auto my-5 mx-5 no-scrollbar'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout