import React from 'react'
import { useUser, useClerk, Show } from '@clerk/react'
import Loading from './Loading'
import { Navigate, useNavigate } from 'react-router-dom'

const AdminGuard = ({ children }) => {
  const { isLoaded, user } = useUser()
  const { signOut } = useClerk()
  const navigate = useNavigate()

  const handleSwitchAccount = async () => {
    await signOut()
    navigate('/sign-in', { replace: true })
  }

  return isLoaded ? (
    <>
      <Show when="signed-in">
        {user?.publicMetadata?.role === 'admin' ? (
          children
        ) : (
          <div className='flex flex-col items-center justify-center h-screen text-white text-lg gap-6'>
            <p>You are not authorized to access this page.</p>
            <button
              onClick={handleSwitchAccount}
              className='rounded-2xl bg-primary px-6 py-2 text-base'
            >
              Sign out & switch account
            </button>
          </div>
        )}
      </Show>

      <Show when="signed-out">
        <Navigate to="/login" replace />
      </Show>
    </>
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <Loading />
    </div>
  )
}

export default AdminGuard