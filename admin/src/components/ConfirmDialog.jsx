import React from 'react'
import { AlertTriangleIcon } from 'lucide-react'

const ConfirmDialog = ({
  isOpen,
  title = 'Are you sure?',
  message,
  confirmText = 'Delete',
  cancelText = 'Cancel',
  loading = false,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-[200] flex items-center justify-center bg-black/70 px-4'>
      <div className='w-full max-w-sm rounded-xl border border-primary/20 bg-[#0f0f0f] p-5 shadow-2xl sm:p-6'>
        <div className='mb-3 flex items-center gap-2.5'>
          <div className='bg-red-500/15 p-2 rounded-full shrink-0'>
            <AlertTriangleIcon className='w-4 h-4 sm:w-5 sm:h-5 text-red-500' />
          </div>
          <p className='text-sm sm:text-base font-semibold'>{title}</p>
        </div>

        {message && (
          <p className='text-xs sm:text-sm text-gray-400 mb-5'>{message}</p>
        )}

        <div className='flex flex-col-reverse gap-2.5 sm:flex-row sm:items-center sm:justify-end'>
          <button
            onClick={onCancel}
            disabled={loading}
            className='rounded-md border border-primary/30 px-4 py-2 text-xs font-medium text-gray-300 cursor-pointer hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm'
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className='rounded-md bg-red-600 px-4 py-2 text-xs font-medium text-white cursor-pointer hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm'
          >
            {loading ? 'Deleting...' : confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDialog
