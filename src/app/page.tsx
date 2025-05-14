import Image from 'next/image'
import FeedbackForm from '../components/FeedbackForm'
import FeedbackList from '../components/FeedbackList'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen py-12 px-4 flex flex-col items-center text-white">
      {/* Animated profile image */}
      <div className="mb-6 animate-fade-in-up">
        <Image
          src="/larza.jpg"
          alt="Larza"
          width={160}
          height={160}
          className="rounded-full shadow-lg border-4 border-white"
        />
      </div>

      <h1 className="text-4xl font-bold text-center mb-8">Larza Ghost & Co-Production - Reviews</h1>

      <FeedbackForm />
      <FeedbackList />
      <Footer />
    </main>
  )
}
