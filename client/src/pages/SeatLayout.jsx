import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import Loading from '../components/Loading'
import { ArrowRight, Clock } from 'lucide-react'
import showTimeFormat from '../lib/showTimeFormat'
import BlurCircle from '../components/BlurCircle'
import toast from 'react-hot-toast'
import { useUser } from '@clerk/react'

const SeatLayout = () => {

  const {id, date} = useParams()

  const {user} = useUser()

  const [selectedDate, setSelectedDate] = useState(null)

  const [selectedShow, setSelectedShow] = useState(null)

  const [selectedSeats, setSelectedSeats] = useState([])

  const [selectedTime, setSelectedTime] = useState(null)

  const navigate = useNavigate()

  const groupRows = [['A','B'], ['C','D'], ['E','F'], ['G','H'], ['I','J']]

  const handleSeatClick = (seatId) => {
    if (!selectedTime) return toast("Please select time");

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
      return;
    }

    if (selectedSeats.length >= 5) {
      return toast("You can only book 5 seats");
    }

    setSelectedSeats([...selectedSeats, seatId]);
  };

  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex gap-2 mt-2">
      <div className="flex items-center justify-center gap-1.5 sm:gap-2">
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`;

          return (
            <button key={seatId} onClick={() => handleSeatClick(seatId)}
              className={`h-7 w-7 sm:h-8 sm:w-8 shrink-0 text-[10px] sm:text-xs rounded border border-primary/60 cursor-pointer ${ selectedSeats.includes(seatId) ? "bg-primary text-white" : "" }`}>
              {seatId}
            </button>
          );
        })}
      </div>
    </div>
  );

  useEffect(()=>{
    setSelectedShow(dummyShowsData.find(i=>i.id===Number(id)))
    setSelectedDate(dummyDateTimeData.find(i=>i.date===date))
  }, [])
  

  return selectedShow ? (
    <div className='flex flex-col md:flex-row pt-20 sm:pt-24 md:pt-40 lg:pt-48 xl:pt-55 pb-5 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10 lg:px-16 relative justify-center items-center md:items-start gap-6 sm:gap-8 md:gap-10 overflow-x-hidden'>
      {/* Available Time */}
      <div className='w-full max-w-xs sm:max-w-sm md:max-w-none md:w-64 lg:w-70 md:sticky md:-top-12 bg-primary/15 border border-primary rounded-md sm:rounded-lg py-3 sm:py-4 md:-mt-8'>
        <h3 className='text-base sm:text-lg font-bold text-white/90 [word-spacing:2px] px-4 sm:px-6 md:px-10'>Available Timing</h3>
        <div className='overflow-y-auto max-h-40 sm:max-h-45 no-scrollbar'>
          {selectedDate.times.map((i) => (
            <div onClick={()=>setSelectedTime(selectedTime===i.time?null:i.time)} key={i.showId} className={`flex items-center gap-2 px-3 sm:px-4 mt-3 sm:mt-4 py-1.5 sm:py-2 max-w-32 sm:max-w-35 rounded-r-lg ${selectedTime === i.time ? "bg-primary": "bg-transparent"}`}>
              <Clock className='w-3.5 sm:w-4' />
              <p className='text-xs sm:text-sm'>{showTimeFormat(i.time)}</p>
            </div>
          ))}
        </div>
      </div>
      
      <BlurCircle top='0' left="18rem"/>

      {/* Seat Layout */}
      <div className='relative flex flex-col items-center w-full overflow-x-auto no-scrollbar py-10 md:py-0' >
          <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-white/90 [word-spacing:2px] px-4 sm:px-6 md:px-10 align-middle text-center ml-70 md:ml-0'>Select Your Seat</h2>
          <img src={assets.screenImage} alt="" className='mt-4 sm:mt-5 w-full max-w-xs sm:max-w-md md:max-w-none md:w-auto px-4 ml-70 md:ml-0'/>
          <h4 className='text-gray-400 uppercase text-xs sm:text-sm mt-1 ml-70 md:ml-0'>Screen Side</h4>


          <div className="w-full  max-h-[360px] sm:max-h-[400px] md:max-h-[420px] mt-6 sm:mt-8 md:mt-10">
            <div className="flex flex-col items-center   text-xs text-gray-300 px-4 sm:px-6 md:px-4">
              <div className='ml-70 md:ml-0'>
                {groupRows[0].map((row) => renderSeats(row))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-9 lg:gap-11 mt-8 sm:mt-9 md:mt-11 -mr-100 md:mr-0">
                {groupRows.slice(1).map((group, idx) => (
                  <div key={idx}>
                    {group.map((row) => renderSeats(row))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center mt-8 sm:mt-10 md:mt-12'>
            <button onClick={() => {
              if (user) {
                navigate("/my-bookings");
                scroll(0, 0);
              } else {
                toast("Login to book tickets");
              }
            }} className='border border-primary/40 bg-primary px-3 py-1.5 sm:py-1 my-1 sm:my-2 rounded-3xl text-xs sm:text-sm flex justify-between items-center gap-1 cursor-pointer ml-70 md:ml-0'>Proceed to Book <ArrowRight className='w-4 sm:w-5' /></button>
          </div>
          
          <BlurCircle bottom='-2rem' right="-8rem"/>
      </div>
    </div>
  ) : (
    <Loading/>
  )
}

export default SeatLayout