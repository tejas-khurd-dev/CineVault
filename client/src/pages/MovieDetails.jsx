import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import { HeartIcon, StarIcon } from 'lucide-react'
import timeFormat from '../lib/timeFormat'
import BlurCircle from '../components/BlurCircle'

const MovieDetails = () => {
  const {id} = useParams()
  const [Show, setShow] = useState(null)

  const getShow = async ()=> {
    const show = dummyShowsData.find(i=>i._id == id)
    setShow({
      movie:show,
      dateTime: dummyDateTimeData
    })
  }

  useEffect(() => {
    getShow()
  }, [id])
  
  return Show ? (
    <div className='relative pt-55 pb-5'>
      <div className='flex flex-wrap px-80 gap-12 justify-start'>
        <img src={Show.movie.poster_path} alt="" className='h-110 w-75 rounded-xl' />
        <BlurCircle top='5rem' left='35rem'/>
        <div className='flex flex-col gap-4'>
          <h5 className='font-medium text-xl tracking-wide uppercase text-primary'>English</h5>
          <h1 className='text-3xl font-extrabold tracking-wide'>{Show.movie.title}</h1>
          <p className='flex justify-start items-center gap-2 text-gray-300 text-md'>
            <StarIcon className='text-primary fill-primary w-6'/> {Show.movie.vote_average.toFixed(1)} <span> User Rating</span>
          </p>
          <p className='w-xl text-gray-400'>{Show.movie.overview}</p>
          <p className='text-gray-100'>
            {timeFormat(Show.movie.runtime)}{"    •    "}
            {Show.movie.genres.map(i => i.name).join(",  ")}{"    •    "}
            {Show.movie.release_date.slice(0, 4)}
          </p>
          
          <div className='flex gap-4 justify-start items-center'>
            <button className='bg-gray-700 px-4 py-2 my-2 rounded-3xl text-xl flex justify-between items-center gap-1 cursor-pointer'>Watch Trailer</button>
            <button className='bg-primary px-4 py-2 my-2 rounded-3xl text-xl flex justify-between items-center gap-1 cursor-pointer'>Buy Tickets</button>
            <div className="bg-gray-700 rounded-full p-3">
              <HeartIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default MovieDetails