'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function PracticeTests() {
  const { language } = useLanguage()
  const t = translations[language]

  const practiceCategories = [
    {
      title: 'Civics Test',
      description: 'Practice the 100 civics questions and answers',
      icon: '📚',
    },
    {
      title: 'English Reading',
      description: 'Practice reading comprehension for the test',
      icon: '📖',
    },
    {
      title: 'English Writing',
      description: 'Practice writing sentences in English',
      icon: '✍️',
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.practiceExam}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practice all aspects of the citizenship test with our comprehensive practice exams
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practiceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <Link
                href={`/practice/${category.title.toLowerCase().replace(' ', '-')}`}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t.startExam}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 