import React from 'react'
import { Routes,  Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import NotFound from './pages/NotFound'

const App = () => {

  return (
    <>

      <Toaster
        position="top-center"
        containerStyle={{
          top: 88,
          transform: "translateX(60px)",
        }}
        toastOptions={{
          style: {
            background: "#1f2937",
            color: "#fff",
            border: "1px solid #ef4444",
          },
        }}
      />
      
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/moviedetails/:id' element={<MovieDetails />} />
        <Route path='/seatlayout/:id/:date' element={<SeatLayout />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App