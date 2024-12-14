'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function ImmigrationUpdates() {
  const { language } = useLanguage()
  const t = translations[language]

  // Example updates - in a real app, these would come from an API or database
  const updates = [
    {
      title: 'New Citizenship Test Updates 2024',
      date: '2024-01-15',
      description: 'Important changes to the naturalization test process and requirements.',
    },
    {
      title: 'USCIS Processing Times Update',
      date: '2024-01-10',
      description: 'Latest information about application processing times and procedures.',
    },
    {
      title: 'Free Citizenship Classes Available',
      date: '2024-01-05',
      description: 'Find local resources and classes to help prepare for your citizenship test.',
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">{t.latestUpdates}</h2>
          <Link href="/updates" className="text-blue-600 hover:text-blue-700">
            {t.viewAllUpdates}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {updates.map((update, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl mb-2">{update.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{update.date}</p>
              <p className="text-gray-600">{update.description}</p>
              <Link href={`/updates/${index}`} className="mt-4 inline-block text-blue-600 hover:text-blue-700">
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 