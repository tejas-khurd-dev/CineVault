import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyCastsData, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import { HeartIcon, StarIcon } from 'lucide-react'
import timeFormat from '../lib/timeFormat'
import BlurCircle from '../components/BlurCircle'
import MovieCard from '../components/MovieCard'
import DateSelection from '../components/DateSelection'

const MovieDetails = () => {
  const {id} = useParams()

  const navigate = useNavigate()

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
            <a href='#dataSelect' className='bg-primary px-4 py-2 my-2 rounded-3xl text-xl flex justify-between items-center gap-1 cursor-pointer'>Buy Tickets</a>
            <div className="bg-gray-700 rounded-full p-3">
              <HeartIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-xl font-bold text-white/90 [word-spacing:2px] px-40 pt-30'>Your Favourite Cast</h3>
        <div className='flex gap-10 overflow-x-auto items-center no-scrollbar px-50 py-12 '>
          {dummyCastsData[id].map((cast) => (
            <div key={cast.id} className='flex flex-col items-center text-gray-400 font-medium space-y-3'>
              <img key={cast.id} src={cast.profile_path}alt={cast.name} className='rounded-full w-30 h-30 object-cover shadow-[0_0_20px_rgba(239,68,68,0.6)]' />
              <p className='mx-auto'>{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative' id='dataSelect'>
        <DateSelection/>
      </div>
      


      <div>
        <h3 className='text-xl font-bold text-white/90 [word-spacing:2px] px-40 pt-30'>You May Also like</h3>
        <div className='flex flex-wrap justify-start items-center gap-2 pt-4 px-50'>
            {dummyShowsData.slice(`${dummyShowsData.length-5}`,`${dummyShowsData.length}`).map((movie)=><MovieCard key={movie._id} movie={movie}/>)}
        </div>

        <div className='flex justify-center items-center mt-12'>
            <button onClick={()=>{navigate("/movies"); scroll(0, 0);}} className='bg-primary px-4 py-2 my-2 rounded-3xl text-xl flex justify-between items-center gap-1 cursor-pointer'>Show More</button>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default MovieDetails