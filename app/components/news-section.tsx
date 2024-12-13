'use client'

import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function NewsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const news = [
    { id: 1, title: 'New AI Tutoring Features Released', date: '2023-06-01' },
    { id: 2, title: 'Summer Learning Programs Announced', date: '2023-05-28' },
    { id: 3, title: 'Student Success Stories: May Edition', date: '2023-05-15' },
  ]

  return (
    <section className="my-12 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.latestNews}</h2>
      <ul className="space-y-4">
        {news.map((item) => (
          <li key={item.id} className="border-b pb-2">
            <h3 className="text-lg font-semibold text-blue-600">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
          </li>
        ))}
      </ul>
      <a href="#" className="inline-flex items-center mt-4 text-blue-600 hover:underline">
        {t.viewAllNews}
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </section>
  )
}

