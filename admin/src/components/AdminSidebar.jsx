import React, { useState } from 'react'
import {LayoutDashboardIcon, PlusSquareIcon, ListIcon, ListCollapseIcon} from 'lucide-react'
import {NavLink} from 'react-router-dom'

const AdminSidebar = () => {
  
  const adminNavlinks = [
    {name:'Dashboard', path:'/', icon: LayoutDashboardIcon},
    {name:'Add Shows', path:'/add-shows', icon: PlusSquareIcon},
    {name:'List Shows', path:'/list-shows', icon: ListIcon},
    {name:'List Bookings', path:'/list-bookings', icon: ListCollapseIcon},
  ]

  const [isActive, setIsActive] = useState('Dashboard')

  return (
    <div className='w-60 border-r-2 border-r-gray-400/20 px-2 pb-5 h-[calc(100vh-85px)]'>
      <div className=' flex flex-col gap-4'>
        {adminNavlinks.map((link, index) => (
          <NavLink key={index} onClick={()=>setIsActive(link.name)} to={link.path} className={`relative flex items-center max-md:justify-center gap-3 w-full py-2.5 md:pl-10 first:mt-6 text-gray-400 ${isActive == link.name ? "bg-primary/15 text-primary rounded-xl": ""}`}>
                <link.icon className="w-5 h-5" />

                <p className="max-md:hidden">{link.name}</p>

                <span className={`w-1.5 h-8 rounded-l-xl right-0 absolute ${isActive == link.name ? " bg-primary ": ""}`}/>
          </NavLink>
        ))}
      </div>
      
    </div>
  )
}

export default AdminSidebar