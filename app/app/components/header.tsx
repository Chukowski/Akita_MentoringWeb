'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

export default function Header() {
  const { language, setLanguage } = useLanguage()

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            School Mentoring
          </Link>
          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'es' | 'fr')}
              className="border rounded px-2 py-1"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
            <Link href="/practice" className="text-gray-600 hover:text-blue-600">
              Practice
            </Link>
            <Link href="/chat" className="text-gray-600 hover:text-blue-600">
              Chat
            </Link>
            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 
