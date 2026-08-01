import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import AddShows from './pages/AddShows'
import ListShows from './pages/ListShows'
import ListBookings from './pages/ListBookings'

const App = () => {
  return (
    <>
      <Routes>
        <Route  path="/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-shows" element={<AddShows />} />
          <Route path="list-shows" element={<ListShows />} />
          <Route path="list-bookings" element={<ListBookings />} />
        </Route>
      </Routes>
    </>
  )
}

export default App