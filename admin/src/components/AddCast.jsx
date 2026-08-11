import React, { useEffect, useState } from 'react'
import { CameraIcon, TrashIcon } from 'lucide-react'
import Loading from '../components/Loading'
import toast from 'react-hot-toast'
import { useCast } from '../hooks/useCast.js'

const AddCast = ({ movieId }) => {

  const { casts, loading, error, handleAddCast, handleGetCastsByMovie, handleDeleteCast } = useCast()

  const [name, setName] = useState('')
  const [character, setCharacter] = useState('')
  const [profileFile, setProfileFile] = useState(null)
  const [profilePreview, setProfilePreview] = useState(null)

  useEffect(() => {
    if (!movieId) return
    handleGetCastsByMovie(movieId)
  }, [movieId])

  const handleProfileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setProfileFile(file)
    setProfilePreview(URL.createObjectURL(file))
  }

  const resetForm = () => {
    setName('')
    setCharacter('')
    setProfileFile(null)
    setProfilePreview(null)
  }

  const handleSubmit = async () => {
    if (!name.trim()) return toast.error('Please enter cast member name')
    if (!profileFile) return toast.error('Please upload a photo')

    const newCast = await handleAddCast(movieId, { name: name.trim(), character: character.trim(), pfp: profileFile })

    if (newCast) {
      toast.success('Cast member added')
      resetForm()
    } else {
      toast.error(error || 'Could not add cast member')
    }
  }

  const onDeleteCast = async (castId) => {
    const success = await handleDeleteCast(castId)
    if (success) {
      toast.success('Cast member removed')
    } else {
      toast.error(error || 'Could not remove cast member')
    }
  }

  return (
    <div>
      <p className='text-sm sm:text-base md:text-lg font-medium mb-3 sm:mb-4'>Cast</p>

      {/* Add cast form */}
      <div className='bg-primary/10 border border-primary/20 rounded-md sm:rounded-lg p-4 sm:p-6 max-w-xl'>
        <div className='flex flex-col xs:flex-row items-start gap-4 sm:gap-5'>
          {/* Photo upload */}
          <div>
            <label className='block w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-dashed border-primary/40 bg-primary/5 cursor-pointer overflow-hidden relative hover:border-primary/70 transition'>
              <input type='file' accept='image/*' onChange={handleProfileChange} className='hidden' />
              {profilePreview ? (
                <img src={profilePreview} alt='Cast preview' className='w-full h-full object-cover' />
              ) : (
                <div className='w-full h-full flex flex-col items-center justify-center gap-1 text-gray-400'>
                  <CameraIcon className='w-4 h-4 sm:w-5 sm:h-5' />
                  <span className='text-[9px] sm:text-[10px]'>Photo <span className='text-red-500'>*</span></span>
                </div>
              )}
            </label>
          </div>

          {/* Name + character */}
          <div className='flex-1 w-full flex flex-col gap-3'>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Cast member name *'
              className='w-full border border-primary/30 bg-primary/5 rounded-md px-3 py-1.5 sm:py-2 text-sm sm:text-base outline-none placeholder:text-gray-500 focus:border-primary/60'
            />
            <input
              type='text'
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
              placeholder='Character name (optional)'
              className='w-full border border-primary/30 bg-primary/5 rounded-md px-3 py-1.5 sm:py-2 text-sm sm:text-base outline-none placeholder:text-gray-500 focus:border-primary/60'
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className='mt-4 sm:mt-5 border border-primary/40 bg-primary px-5 sm:px-6 py-2 rounded-md text-sm sm:text-base font-medium cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto'
        >
          {loading ? 'Adding...' : 'Add Cast Member'}
        </button>
      </div>

      {/* Existing cast list */}
      {loading && casts.length === 0 ? (
        <Loading />
      ) : casts.length === 0 ? (
        <p className='text-sm text-gray-400 mt-4'>No cast members added yet.</p>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5 mt-4 sm:mt-6'>
          {casts.map((cast) => (
            <div
              key={cast._id}
              className='relative rounded-md sm:rounded-lg overflow-hidden bg-primary/10 border border-primary/20'
            >
              <img src={cast.profilePath} alt={cast.name} className='h-25 w-25 my-2 object-cover rounded-full mx-auto border-2 border-primary/20' />

              <button
                onClick={() => onDeleteCast(cast._id)}
                aria-label='Remove cast member'
                className='absolute top-1.5 right-1.5 bg-black/60 hover:bg-red-600 transition rounded-full p-1 cursor-pointer'
              >
                <TrashIcon className='w-3 h-3 sm:w-3.5 sm:h-3.5 text-white' />
              </button>

              <div className='px-2 py-2'>
                <p className='text-xs sm:text-sm font-medium truncate'>{cast.name}</p>
                {cast.character && (
                  <p className='text-[10px] sm:text-xs text-gray-400 truncate'>{cast.character}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AddCast