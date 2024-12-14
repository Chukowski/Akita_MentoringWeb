'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function StudyMaterials() {
  const { language } = useLanguage()
  const t = translations[language]

  const materials = [
    {
      title: 'Official USCIS Study Guide',
      type: 'PDF',
      description: 'Complete study guide for the naturalization test',
      icon: '📗',
    },
    {
      title: 'Civics Flash Cards',
      type: 'Interactive',
      description: 'Learn all 100 civics questions and answers',
      icon: '🗂️',
    },
    {
      title: 'English Vocabulary List',
      type: 'PDF',
      description: 'Essential English words for the citizenship test',
      icon: '📝',
    },
    {
      title: 'Interview Practice',
      type: 'Video',
      description: 'Mock naturalization interview videos',
      icon: '🎥',
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.studyGuides}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access official study materials and resources to prepare for your citizenship test
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{material.icon}</div>
                <span className="text-sm font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded">
                  {material.type}
                </span>
              </div>
              <h3 className="font-semibold text-xl mb-2">{material.title}</h3>
              <p className="text-gray-600 mb-4">{material.description}</p>
              <Link
                href={`/study/${material.title.toLowerCase().replace(/ /g, '-')}`}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {t.browseAllGuides} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 