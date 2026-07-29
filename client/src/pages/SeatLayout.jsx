import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import Loading from '../components/Loading'
import { Clock } from 'lucide-react'
import showTimeFormat from '../lib/showTimeFormat'
import BlurCircle from '../components/BlurCircle'

const SeatLayout = () => {

  const {id, date} = useParams()

  const [selectedDate, setSelectedDate] = useState(null)

  const [selectedShow, setSelectedShow] = useState(null)

  const [selectedSeats, setSelectedSeats] = useState([])

  const [selectedTime, setSelectedTime] = useState(null)

  const navigate = useNavigate()

  useEffect(()=>{
    setSelectedShow(dummyShowsData.find(i=>i.id===Number(id)))
    setSelectedDate(dummyDateTimeData.find(i=>i.date===date))
  }, [])
  

  return selectedShow ? (
    <div className='flex flex-wrap-reverse pt-55 pb-12 relative justify-center'>
      {/* Available Time */}
      <div className='sticky w-70 bg-primary/15  border border-primary rounded-md -translate-x-75 py-4 -mt-8'>
        <h3 className='text-lg font-bold text-white/90 [word-spacing:2px] px-10'>Available Timing</h3>
        <div className=' overflow-y-auto max-h-45 no-scrollbar'>
          {selectedDate.times.map((i) => (
            <div onClick={()=>setSelectedTime(selectedTime===i.time?null:i.time)} key={i.showId} className={`flex items-center gap-2 px-4 mt-4 py-2 max-w-35 rounded-r-lg   ${selectedTime === i.time ? "bg-primary": "bg-transparent"}`}>
              <Clock className='w-4' />
              <p className='text-sm'>{showTimeFormat(i.time)}</p>
            </div>
          ))}
        </div>
      </div>
      <BlurCircle top='0' left="18rem"/>

      {/* Seat Layout */}
      <div className='relative flex flex-col items-center -mt-5' >
          <h2 className='text-2xl font-bold text-white/90 [word-spacing:2px] px-10 align-middle'>Select Your Seat</h2>
          <img src={assets.screenImage} alt="" className='mt-5'/>
          <h4 className='text-gray-400 uppercase text-sm'>Screen Side</h4>
      </div>
    </div>
  ) : (
    <Loading/>
  )
}

export default SeatLayout