import { useState } from 'react'
import toast from 'react-hot-toast'
import { createBooking, verifyPayment } from '../services/booking.api.js'


export const useRazorpayPayment = () => {
  const [paying, setPaying] = useState(false)

  const payNow = async ({ showId, seats, user, onSuccess }) => {
    setPaying(true)

    try {
      const orderData = await createBooking({ showId, seats })

      if (!orderData?.success) {
        toast.error(orderData?.message || 'Could not start booking')
        setPaying(false)
        return
      }

      const options = {
        key: orderData.key,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: 'CineVault',
        description: `${seats.length} seat(s) booking`,
        order_id: orderData.order.id,
        prefill: {
          name: user?.username,
          email: user?.email,
          contact: user?.phone || '',
        },
        method: {
          upi: true,
          card: true,
          netbanking: true,
          wallet: true,
        },
        theme: {
          color: '#F84565',
        },
        handler: async (response) => {
          try {
            const verifyData = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              bookingId: orderData.bookingId,
            })

            if (verifyData?.success) {
              toast.success('Booking confirmed!')
              onSuccess?.(verifyData)
            } else {
              toast.error(verifyData?.message || 'Payment verification failed')
            }
          } catch (error) {
            toast.error(error?.response?.data?.message || 'Payment verification failed')
          } finally {
            setPaying(false)
          }
        },
        modal: {
          ondismiss: () => setPaying(false),
        },
      }

      const razorpayInstance = new window.Razorpay(options)
      razorpayInstance.open()
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Could not start booking')
      setPaying(false)
    }
  }

  return { paying, payNow }
}