import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import AddShows from './pages/AddShows'
import ListShows from './pages/ListShows'
import ListBookings from './pages/ListBookings'
import Login from './pages/Login'
import AdminGuard from './components/AdminGuard'
import { Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
      <Toaster
          position="top-center"
          containerStyle={{
            top: 88
          }}
          toastOptions={{
            style: {
              background: "#1f2937",
              color: "#fff",
              border: "1px solid #ef4444",
            },
          }}
        />
        
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<Navigate to="/login" replace />} />

        <Route path="/*" element={<AdminGuard><Layout /></AdminGuard>}>
          <Route index element={<Dashboard />} />
          <Route path="add-shows" element={<AddShows />} />
          <Route path="list-shows" element={<ListShows />} />
          <Route path="list-bookings" element={<ListBookings />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
