'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{t.welcome}</h1>
      <p className="text-xl text-gray-600 mb-8">{t.getHelp}</p>
      <Link href="/practice" className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
        {t.startLearning}
      </Link>
    </section>
  )
}

