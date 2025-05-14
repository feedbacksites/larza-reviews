// components/FeedbackForm.tsx
'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { AiFillStar } from 'react-icons/ai'

export default function FeedbackForm() {
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (rating === 0) {
    setError('Please select a star rating before submitting.')
    return
  }

  setError('')
  setLoading(true)

  const { error } = await supabase.from('feedback').insert([
    { name, rating, comment }
  ])

  setLoading(false)

  if (error) {
    setError('Something went wrong. Please try again.')
    console.error(error)
  } else {
    setSuccess(true)
    setName('')
    setRating(0)
    setComment('')

    // Refresh page after delay
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }
}


  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-4 p-6 bg-white rounded-2xl shadow-xl text-black">
      <h2 className="text-2xl font-bold text-center">Leave Your Feedback</h2>

      <div className="flex justify-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className={star <= rating ? 'text-yellow-400' : 'text-gray-300'}
          >
            <AiFillStar size={28} />
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
        required
      />

      <textarea
        placeholder="Your feedback..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
        rows={4}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        {loading ? 'Sending...' : 'Submit Feedback'}
      </button>
        
        {error && <p className="text-red-600 text-center font-medium">{error}</p>}
        {success && <p className="text-green-600 text-center font-medium">Thank you for your feedback!</p>}

    </form>
  )
}
