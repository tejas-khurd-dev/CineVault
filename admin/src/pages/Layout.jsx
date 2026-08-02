import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import AdminSidebar from '../components/AdminSidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <AdminNavbar/>
      <div className="flex">
        <AdminSidebar />

        <div className='h-[cacl(100vh - 85px)]'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout