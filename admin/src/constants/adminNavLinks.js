import { LayoutDashboardIcon, PlusSquareIcon, ListIcon, ListCollapseIcon } from 'lucide-react'

export const adminNavLinks = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboardIcon },
  { name: 'Add Movies', path: '/add-movies', icon: PlusSquareIcon },
  { name: 'List Shows', path: '/list-shows', icon: ListIcon },
  { name: 'List Bookings', path: '/list-bookings', icon: ListCollapseIcon },
]