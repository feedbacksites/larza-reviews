// src/components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/20 mt-16 py-6 px-4 text-sm text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
        <span className="md:flex-1">Larza © 2025</span>

        <span className="md:flex-1 text-center">
          Built with ❤️ by KILIAM & powered by feedback from amazing people.
        </span>

        <div className="md:flex-1 text-right">
          <Link href="/privacy" className="underline hover:text-gray-300">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
