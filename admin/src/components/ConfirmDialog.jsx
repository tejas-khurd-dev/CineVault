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
    <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-200 px-4'>
      <div className='bg-[#0f0f0f] border border-primary/20 rounded-md sm:rounded-lg p-5 sm:p-6 w-full max-w-sm'>
        <div className='flex items-center gap-2.5 mb-3'>
          <div className='bg-red-500/15 p-2 rounded-full shrink-0'>
            <AlertTriangleIcon className='w-4 h-4 sm:w-5 sm:h-5 text-red-500' />
          </div>
          <p className='text-sm sm:text-base font-semibold'>{title}</p>
        </div>

        {message && (
          <p className='text-xs sm:text-sm text-gray-400 mb-5'>{message}</p>
        )}

        <div className='flex items-center justify-end gap-2.5'>
          <button
            onClick={onCancel}
            disabled={loading}
            className='px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium border border-primary/30 text-gray-300 hover:bg-white/5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className='px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium bg-red-600 hover:bg-red-700 text-white cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'
          >
            {loading ? 'Deleting...' : confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDialog