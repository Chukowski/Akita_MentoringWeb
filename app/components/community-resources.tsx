'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function CommunityResources() {
  const { language } = useLanguage()
  const t = translations[language]
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email subscription - would connect to backend API
    console.log('Subscribed:', email)
    setEmail('')
  }

  const resources = [
    {
      title: 'Local Study Groups',
      description: 'Connect with others in your area preparing for the citizenship test',
      icon: '👥',
    },
    {
      title: 'Legal Resources',
      description: 'Find immigration lawyers and legal assistance in your community',
      icon: '⚖️',
    },
    {
      title: 'Language Classes',
      description: 'Free ESL classes and language learning resources',
      icon: '🗣️',
    },
  ]

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.communitySupport}</h2>
            <p className="text-gray-600">{t.joinCommunity}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-2">Join Our Community</h3>
              <p className="text-gray-600">Get updates, study tips, and community support</p>
            </div>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.enterEmail}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t.subscribe}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 