import React, { useState, useEffect } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'
import dateFormat from '../lib/dateFormat'
import timeFormat from '../lib/timeFormat'
import showTimeFormat from '../lib/showTimeFormat'

const MyBookings = () => {

  const currency = import.meta.env.VITE_CURRENCY
  
  const [bookings, setBookings] = useState([])
  
  const [isLoading, setIsLoading] = useState(true)

  const getMyBookings = () => {
    setBookings(dummyBookingData)
    setIsLoading(false)
  }

  useEffect(()=>{
    getMyBookings()
  },[])

  return !isLoading ? (
    <div className='relative pt-48 px-24 h-screen '>
      <BlurCircle top='50px' left='60px'/>
      <BlurCircle bottom='100px' right='20%'/>
      <h1 className='text-base sm:text-lg md:text-xl font-bold text-gray-300 text-center sm:text-left ml-16'>My Bookings</h1>
      <div className='flex flex-col  h-[80vh] overflow-y-auto no-scrollbar ' >
        {bookings.map((i, index)=>{
          const { day, month, year } = dateFormat(i.show.showDateTime)
          return (
            <div key={index} className='flex justify-center w-full'>
                <div className='flex justify-start gap-4 rounded-lg w-[80%] my-12 bg-primary/10 border border-primary border-rounded-lg px-5 py-5'>
                  <img src={i.show.movie.poster_path} alt="" className='max-w-45 h-auto object-cover rounded'/>
                  <div className='flex justify-between w-full'>
                    <div className='my-5 relative flex flex-col gap-2'>
                      <p className='text-xl'>{i.show.movie.title}</p>
                      <p className='text-md text-gray-400'>{timeFormat(i.show.movie.runtime)}</p>
                      <p className='text-md text-gray-400 absolute bottom-0'>{day}th {month} {year} • {showTimeFormat(i.show.showDateTime)}</p>
                    </div>

                    <div className='my-5 relative flex flex-col gap-2 '>
                      <div className='flex gap-3 items-center'>
                        <p className='text-3xl '>{currency}{i.amount}</p>
                        {!i.isPaid && <button className='border border-primary/40 bg-primary px-3 sm:px-4 py-1.5 sm:py-2 my-1 sm:my-2 rounded-3xl text-sm sm:text-base md:text-xl flex justify-between items-center gap-1 cursor-pointer'>Pay</button>}
                      </div>  
                      
                      <div className=' '>
                        <p className='text-md text-gray-400 bottom-7 right-0 absolute whitespace-nowrap'>Total Tickets <span className='text-white'>{i.bookedSeats.length}</span></p>
                        <p className='text-md text-gray-400 absolute bottom-0 right-0 whitespace-nowrap' >Seats Number: <span className='text-white'>{i.bookedSeats.join(", ")}</span></p>
                      </div>
                    </div>
                </div> 
              </div>
            </div>
          )
        })}
      </div>
    </div>
  ): (
    <Loading/>
  )
}

export default MyBookings