'use client'

import { Metadata } from 'next'
import Header from './components/header'
import Hero from './components/hero'
import NewsSection from './components/news-section'
import ConnectWithTutors from './components/connect-with-tutors'
import StudyGuideSection from './components/study-guide-section'
import SubscribeInfo from './components/subscribe-info'
import { LanguageProvider } from './contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'School Mentoring',
  description: 'Get help from our AI-powered mentoring system',
}

export default function SchoolMentoringPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-blue-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <NewsSection />
          <ConnectWithTutors />
          <StudyGuideSection />
          <SubscribeInfo />
        </main>
      </div>
    </LanguageProvider>
  )
}

