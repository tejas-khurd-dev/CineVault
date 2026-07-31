import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import Loading from '../components/Loading'
import { ArrowRight, Clock } from 'lucide-react'
import showTimeFormat from '../lib/showTimeFormat'
import BlurCircle from '../components/BlurCircle'
import toast from 'react-hot-toast'

const SeatLayout = () => {

  const {id, date} = useParams()

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
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`;

          return (
            <button key={seatId} onClick={() => handleSeatClick(seatId)}
              className={`h-8 w-8 rounded border border-primary/60 cursor-pointer ${ selectedSeats.includes(seatId) ? "bg-primary text-white" : "" }`}>
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
    <div className='flex  pt-55 pb-5 relative justify-center items-start'>
      {/* Available Time */}
      <div className='sticky w-70 top-25 bg-primary/15  border border-primary rounded-md -translate-x-70 py-4 -mt-8'>
        <h3 className='text-lg font-bold text-white/90 [word-spacing:2px] px-10'>Available Timing</h3>
        <div className=' overflow-y-auto max-h-45 custom-scrollbar'>
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
      <div className='relative flex flex-col items-center' >
          <h2 className='text-2xl font-bold text-white/90 [word-spacing:2px] px-10 align-middle'>Select Your Seat</h2>
          <img src={assets.screenImage} alt="" className='mt-5'/>
          <h4 className='text-gray-400 uppercase text-sm'>Screen Side</h4>


          <div className="flex flex-col items-center mt-10 text-xs text-gray-300"> 
            {groupRows[0].map((row) => renderSeats(row))}

            <div className="grid grid-cols-2 gap-11 mt-11">
              {groupRows.slice(1).map((group, idx) => (
                <div key={idx}>
                  {group.map((row) => renderSeats(row))}
                </div>
              ))}
            </div>
          </div>

          <div className='flex justify-center items-center mt-12'>
            <button onClick={()=>{navigate("/my-bookings"); scroll(0, 0);}} className='bg-primary px-3 py-1 my-2 rounded-3xl text-sm flex justify-between items-center gap-1 cursor-pointer'>Proceed to Book <ArrowRight className='w-5' /></button>
          </div>
          
          <BlurCircle bottom='-2rem' right="-8rem"/>
      </div>
    </div>
  ) : (
    <Loading/>
  )
}

export default SeatLayout