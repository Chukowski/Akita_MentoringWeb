'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import ChatInterface from './chat-interface'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      <section className="text-center py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">{t.welcome}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{t.getHelp}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/practice" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              {t.startPractice}
            </Link>
            <Link href="/study" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
              {t.studyGuides}
            </Link>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>💬</span> Chat con AI
            </button>
          </div>
        </div>
      </section>

      <ChatInterface 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  )
}

