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
    <div className='relative overflow-x-hidden pt-24 sm:pt-32 md:pt-40 lg:pt-48 px-4 sm:px-8 md:px-16 lg:px-24 min-h-screen pb-8'>
      <BlurCircle top='50px' left='60px'/>
      <BlurCircle bottom='100px' right='20%'/>
      <h1 className='text-base sm:text-lg md:text-xl font-bold text-gray-300 text-center sm:text-left'>My Bookings</h1>
      <div className='flex flex-col gap-4 sm:gap-0 h-[75vh] sm:h-[80vh] overflow-y-auto no-scrollbar mt-2 sm:mt-0' >
        {bookings.map((i, index)=>{
          const { day, month, year } = dateFormat(i.show.showDateTime)
          return (
            <div key={index} className='flex justify-center w-full'>
                <div className='flex flex-col sm:flex-row w-full sm:w-[90%] md:w-[85%] lg:w-[80%] my-4 sm:my-8 md:my-10 lg:my-12 gap-4 sm:gap-5 rounded-lg bg-primary/10 border border-primary px-4 sm:px-5 py-4 sm:py-5'>
                  <img src={i.show.movie.poster_path} alt="" className='w-28 sm:w-36 md:w-45 h-auto object-cover rounded mx-auto sm:mx-0 shrink-0'/>
                  <div className='flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-between gap-4 sm:gap-2 w-full'>
                    <div className='flex flex-col gap-1.5 sm:gap-2 text-center sm:text-left'>
                      <p className='text-lg sm:text-xl'>{i.show.movie.title}</p>
                      <p className='text-sm sm:text-md text-gray-400'>{timeFormat(i.show.movie.runtime)}</p>
                      <p className='text-sm sm:text-md text-gray-400'>{day}th {month} {year} • {showTimeFormat(i.show.showDateTime)}</p>
                    </div>

                    <div className='flex flex-col gap-2 sm:gap-2 items-center sm:items-end text-center sm:text-right'>
                      <div className='flex gap-3 items-center'>
                        <p className='text-2xl sm:text-3xl'>{currency}{i.amount}</p>
                        {!i.isPaid && <button className='border border-primary/40 bg-primary px-3 sm:px-4 py-1.5 sm:py-2 my-1 sm:my-2 rounded-3xl text-sm sm:text-base md:text-xl flex justify-between items-center gap-1 cursor-pointer'>Pay</button>}
                      </div>  
                      
                      <div className='flex flex-col gap-1 sm:gap-1.5'>
                        <p className='text-sm sm:text-md text-gray-400 whitespace-nowrap'>Total Tickets <span className='text-white'>{i.bookedSeats.length}</span></p>
                        <p className='text-sm sm:text-md text-gray-400 whitespace-nowrap' >Seats Number: <span className='text-white'>{i.bookedSeats.join(", ")}</span></p>
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