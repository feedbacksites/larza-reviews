import Link from 'next/link'


export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-12 px-6 max-w-3xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        This website allows visitors to leave public feedback, which includes optional name and required comment fields.
        If you choose to submit your name, it will be displayed publicly alongside your feedback.
      </p>
      <p className="mb-4">
        All submitted feedback is stored securely in our database and is not shared with third-party services.
      </p>
      <p className="mb-4">
        By submitting feedback, you consent to the public display of the information you provide. If you would like your
        comment removed, contact us.
      </p>
      <p className="text-sm mt-10 text-gray-400">
        This policy may be updated without notice. Last updated: May 14, 2025.
      </p>

      {/* Back to home button */}
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-block bg-white text-black font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-200 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
