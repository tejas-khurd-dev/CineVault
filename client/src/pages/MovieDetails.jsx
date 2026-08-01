import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyCastsData, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import { HeartIcon, StarIcon } from 'lucide-react'
import timeFormat from '../lib/timeFormat'
import BlurCircle from '../components/BlurCircle'
import MovieCard from '../components/MovieCard'
import DateSelection from '../components/DateSelection'
import Loading from '../components/Loading'

const MovieDetails = () => {
  const {id} = useParams()

  const navigate = useNavigate()

  const [Show, setShow] = useState(null)

  const getShow = async ()=> {
    const show = dummyShowsData.find(i=>i._id == id)
    if(show){
      setShow({
        movie:show,
        dateTime: dummyDateTimeData
      })
    }
  }

  useEffect(() => {
    getShow()
  }, [id])
  
  return Show ? (
    <div className='relative pt-22 sm:pt-24 md:pt-36 lg:pt-48 xl:pt-55 pb-5 sm:pb-8 md:pb-10 px-6 md:px-16 lg:px-24 xl:px-44 overflow-x-hidden'>
      <div className='flex flex-col md:flex-row flex-wrap gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center md:justify-start items-center md:items-start'>
        <img
          src={Show.movie.poster_path}
          alt={Show.movie.title}
          className='shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-75 aspect-[2/3] object-cover rounded-lg sm:rounded-xl border border-white/10 shadow-lg mx-auto md:mx-0'
        />
        <BlurCircle top='5rem' left='35rem'/>
        <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 text-center md:text-left items-center md:items-start max-w-2xl'>
          <h5 className='font-medium text-base sm:text-lg md:text-xl tracking-wide uppercase text-primary'>English</h5>
          <h1 className='text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide'>{Show.movie.title}</h1>
          <p className='flex justify-center md:justify-start items-center gap-1.5 sm:gap-2 text-gray-300 text-sm md:text-base'>
            <StarIcon className='text-primary fill-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'/> {Show.movie.vote_average.toFixed(1)} <span> User Rating</span>
          </p>
          <p className='max-w-md sm:max-w-lg md:max-w-xl text-xs sm:text-sm md:text-base text-gray-400 px-2 sm:px-0'>{Show.movie.overview}</p>
          <p className='text-xs sm:text-sm md:text-base text-gray-100'>
            {timeFormat(Show.movie.runtime)}{"    •    "}
            {Show.movie.genres.map(i => i.name).join(",  ")}{"    •    "}
            {Show.movie.release_date.slice(0, 4)}
          </p>
          
          <div className='flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start items-center mt-1 sm:mt-2'>
            <button className='border border-white/10 bg-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 my-1 sm:my-2 rounded-3xl text-xs sm:text-sm md:text-xl flex justify-between items-center gap-1 cursor-pointer'>Watch Trailer</button>
            <a href='#dataSelect' className='border border-primary/40 bg-primary px-3 sm:px-4 py-1.5 sm:py-2 my-1 sm:my-2 rounded-3xl text-xs sm:text-sm md:text-xl flex justify-between items-center gap-1 cursor-pointer'>Buy Tickets</a>
            <div className="border border-white/10 bg-gray-700 rounded-full p-2.5 sm:p-3">
              <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-base sm:text-lg md:text-xl font-bold text-white/90 [word-spacing:2px] pt-10 sm:pt-16 md:pt-24 lg:pt-30'>Your Favourite Cast</h3>
        <div className='flex gap-4 sm:gap-6 md:gap-10 overflow-x-auto items-center no-scrollbar py-6 sm:py-8 md:py-12'>
          {dummyCastsData[id].map((cast) => (
            <div key={cast.id} className='flex flex-col items-center text-gray-400 font-medium space-y-2 sm:space-y-3 shrink-0'>
              <img key={cast.id} src={cast.profile_path}alt={cast.name} className='rounded-full border-2 border-white/10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-30 lg:h-30 object-cover shadow-[0_0_20px_rgba(239,68,68,0.6)]' />
              <p className='mx-auto text-xs sm:text-sm md:text-base'>{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative -mx-6 md:-mx-16 lg:-mx-24 xl:-mx-44' id='dataSelect'>
        <DateSelection/>
      </div>
      


      <div>
        <h3 className='text-base sm:text-lg md:text-xl font-bold text-white/90 [word-spacing:2px] pt-10 sm:pt-16 md:pt-24 lg:pt-30'>You May Also like</h3>
        <div className='flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4 md:gap-2 pt-4 sm:pt-6 md:pt-4'>
            {dummyShowsData.slice(`${dummyShowsData.length-5}`,`${dummyShowsData.length}`).map((movie)=><MovieCard key={movie._id} movie={movie}/>)}
        </div>

        <div className='flex justify-center items-center mt-8 sm:mt-10 md:mt-12'>
            <button onClick={()=>{navigate("/movies"); scroll(0, 0);}} className='border border-primary/40 bg-primary px-3 sm:px-4 py-1.5 sm:py-2 my-1 sm:my-2 rounded-3xl text-sm sm:text-base md:text-xl flex justify-between items-center gap-1 cursor-pointer'>Show More</button>
        </div>
      </div>
    </div>
  ) : (
    <Loading/>
  )
}

export default MovieDetails