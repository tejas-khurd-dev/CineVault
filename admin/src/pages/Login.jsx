import React, { useState } from 'react'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from '../hooks/useAuth'
import Loading from '../components/Loading'
import GoogleButton from '../components/GoogleButton'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  const { loading, handleLogin, user, error, setError, handleGoogleLogin } = useAuth()

  const handleChange = (e) => {
    if (error) setError('')
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const loggedInUser = await handleLogin(form)

    if (loggedInUser) {
      toast.success('Logged in successfully')
      navigate('/', { replace: true })
    }
  }

  const handleGoogleCallback = async (response) => {
    const user = await handleGoogleLogin(response.credential)

    if (user) {
      toast.success('Google login successful')
      navigate('/', { replace: true })
    }
  }


  if (loading && !user) {
    return <Loading />
  }

  return (
    <div className='flex min-h-dvh items-center justify-center px-4 py-6 sm:py-8'>
      <div className='w-full max-w-md rounded-2xl border border-white/10 bg-white/5 px-5 py-7 text-center shadow-[0_16px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:px-6 sm:py-8'>
        <h1 className='text-2xl font-bold'>Admin Sign In</h1>
        <p className='mt-2 text-sm text-gray-400'>Use your email and password to access the dashboard.</p>

        {error && (
          <div
            role='alert'
            className='mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-100 text-left'
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-8 text-left'>
          <div>
            <label className='block text-xs font-medium mb-2 text-gray-400'>Email address</label>
            <div className='relative'>
              <Mail size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' />
              <input
                type='email'
                name='email'
                required
                value={form.email}
                onChange={handleChange}
                placeholder='name@company.com'
                className='w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-primary transition'
              />
            </div>
          </div>

          <div>
            <label className='block text-xs font-medium mb-2 text-gray-400'>Password</label>
            <div className='relative'>
              <Lock size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' />
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                required
                value={form.password}
                onChange={handleChange}
                placeholder='••••••••'
                className='w-full pl-9 pr-9 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-primary transition'
              />
              <button
                type='button'
                onClick={() => setShowPassword((v) => !v)}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500'
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type='submit'
            disabled={loading}
            className='w-full py-2.5 rounded-lg font-medium text-white bg-primary border border-primary/80 hover:brightness-110 transition mt-2 disabled:opacity-60 disabled:cursor-not-allowed'
          >
            Log in
          </button>
        </form>

        <div className='my-6 flex items-center gap-3'>
          <div className='h-px flex-1 bg-white/10' />

          <span className='text-xs text-gray-400'>
            OR
          </span>

          <div className='h-px flex-1 bg-white/10' />
        </div>

        {/* Google button */}
        <div className='flex items-center justify-center'>
          <GoogleButton onSuccess={handleGoogleCallback} />
        </div>
      </div>
    </div>
  )
}

export default Login
