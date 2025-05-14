// src/components/FeedbackList.tsx
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { AiFillStar } from 'react-icons/ai'

type Feedback = {
  id: string
  name: string
  rating: number
  comment: string
  created_at: string
}

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeedback = async () => {
      const { data, error } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error && data) {
        setFeedbacks(data)
      }

      setLoading(false)
    }

    fetchFeedback()
  }, [])

  return (
        <div className="w-full max-w-lg mx-auto mt-12 p-6 bg-white bg-opacity-90 rounded-2xl shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">What Others Say</h2>
    {loading ? (
        <p className="text-center text-gray-700">Loading feedback...</p>
      ) : feedbacks.length === 0 ? (
        <p className="text-center text-gray-500">No feedback yet.</p>
      ) : (
        <ul className="space-y-6">
          {feedbacks.map((fb) => (
            <li key={fb.id} className="border-b border-gray-300 pb-4">
              <div className="flex items-center mb-1">
                {[...Array(fb.rating)].map((_, i) => (
                  <AiFillStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-800">{fb.comment}</p>
              <div className="text-sm text-gray-600 mt-1">
                — {fb.name || 'Anonymous'}, {new Date(fb.created_at).toLocaleDateString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
