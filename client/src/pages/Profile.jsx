import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CameraIcon, LogOutIcon, MailIcon, PencilIcon, UserIcon, CheckIcon, XIcon } from 'lucide-react'
import { useAuth } from '../hooks/useAuth.js'
import BlurCircle from '../components/BlurCircle.jsx'
import Loading from '../components/Loading.jsx'
import toast from 'react-hot-toast'
import { useUser } from '../hooks/useUser.js'

const Profile = () => {

  const { user, loading, handleLogout } = useAuth()
  const { handleUpdateUserInfo } = useUser()
  const navigate = useNavigate()

  const [isEditingUsername, setIsEditingUsername] = useState(false)
  const [usernameInput, setUsernameInput] = useState('')

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login')
    }
  }, [loading, user, navigate])

  useEffect(() => {
    if (user?.username) {
      setUsernameInput(user.username)
    }
  }, [user])

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const updatedUser = await handleUpdateUserInfo({ pfp: file })

    if (updatedUser) {
      toast.success('Profile image updated')
    } else {
      toast.error('Could not update profile image')
    }

    e.target.value = ''
  }

  const startEditingUsername = () => {
    setUsernameInput(user.username)
    setIsEditingUsername(true)
  }

  const cancelEditingUsername = () => {
    setUsernameInput(user.username)
    setIsEditingUsername(false)
  }

  const saveUsername = async () => {
    const trimmed = usernameInput.trim()

    if (!trimmed) {
      toast.error('Username cannot be empty')
      return
    }

    if (trimmed === user.username) {
      setIsEditingUsername(false)
      return
    }

    const updatedUser = await handleUpdateUserInfo({ username: trimmed })

    if (updatedUser) {
      toast.success('Username updated')
      setIsEditingUsername(false)
    } else {
      toast.error('Could not update username')
    }
  }

  const onLogout = async () => {
    await handleLogout()
    navigate('/')
  }

  if (loading || !user) {
    return <Loading />
  }

  return (
    <div className='relative overflow-x-hidden min-h-[calc(100vh-85px)] w-full flex items-center justify-center px-4 sm:px-6 py-10'>
      <BlurCircle top='0' left='-10%' />
      <BlurCircle bottom='0' right='-10%' />

      <div className='w-full max-w-xs sm:max-w-sm md:max-w-md bg-primary/10 border border-primary/20 rounded-xl sm:rounded-2xl px-5 sm:px-8 py-8 sm:py-10 flex flex-col items-center text-center'>

        {/* Profile image */}
        <div className='relative'>
          {user.profileImage ? (
            <img
              src={user.profileImage}
              alt={user.username}
              className='w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-primary/40'
            />
          ) : (
            <div className='w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-primary flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-semibold border-2 border-primary/40'>
              {user.username?.charAt(0).toUpperCase()}
            </div>
          )}

          {/* label wraps the hidden input, so clicking the label opens the file picker — no ref/click() needed */}
          <label
            htmlFor='pfpInput'
            className='absolute bottom-0 right-0 bg-primary hover:bg-primary/80 transition rounded-full p-1.5 sm:p-2 border-2 border-black/40 cursor-pointer'
            aria-label='Update profile image'
          >
            <CameraIcon className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-white' />
          </label>

          <input
            id='pfpInput'
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            disabled={loading}
            className='hidden'
          />
        </div>

        {/* Username */}
        <div className='flex items-center gap-2 mt-4 sm:mt-5 w-full justify-center'>
          <UserIcon className='w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0' />

          {isEditingUsername ? (
            <div className='flex items-center gap-2 w-full max-w-[220px]'>
              <input
                type='text'
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                autoFocus
                disabled={loading}
                className='flex-1 min-w-0 bg-black/20 border border-primary/40 rounded-lg px-2 py-1 text-sm sm:text-base font-semibold outline-none focus:border-primary'
              />
              <button
                onClick={saveUsername}
                disabled={loading}
                aria-label='Save username'
                className='text-green-500 hover:text-green-400 disabled:opacity-60 cursor-pointer shrink-0'
              >
                <CheckIcon className='w-4 h-4 sm:w-5 sm:h-5' />
              </button>
              <button
                onClick={cancelEditingUsername}
                disabled={loading}
                aria-label='Cancel editing username'
                className='text-red-500 hover:text-red-400 disabled:opacity-60 cursor-pointer shrink-0'
              >
                <XIcon className='w-4 h-4 sm:w-5 sm:h-5' />
              </button>
            </div>
          ) : (
            <>
              <p className='text-base sm:text-lg md:text-xl font-semibold break-all'>
                {user.username}
              </p>
              <button
                onClick={startEditingUsername}
                aria-label='Edit username'
                className='text-gray-400 hover:text-primary cursor-pointer shrink-0'
              >
                <PencilIcon className='w-3.5 h-3.5 sm:w-4 sm:h-4' />
              </button>
            </>
          )}
        </div>

        {/* Email */}
        <div className='flex items-center gap-2 mt-1.5 sm:mt-2 text-gray-400'>
          <MailIcon className='w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0' />
          <p className='text-xs sm:text-sm md:text-base break-all'>
            {user.email}
          </p>
        </div>

        {/* Past Bookings */}
        <button
          onClick={() => navigate('/past-bookings')}
          className='mt-4 sm:mt-5 flex items-center justify-center gap-2 border border-primary/40 bg-primary/10 hover:bg-primary/20 transition px-5 sm:px-6 py-2 sm:py-2.5 rounded-3xl text-sm sm:text-base font-medium cursor-pointer w-full sm:w-auto'
        >
          View Past Bookings
        </button>

        {/* Logout */}
        <button
          onClick={onLogout}
          className='mt-6 sm:mt-8 flex items-center justify-center gap-2 border border-primary/40 bg-primary px-5 sm:px-6 py-2 sm:py-2.5 rounded-3xl text-sm sm:text-base font-medium cursor-pointer w-full sm:w-auto'
        >
          <LogOutIcon className='w-4 h-4 sm:w-5 sm:h-5' />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Profile