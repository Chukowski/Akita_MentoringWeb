'use client'

import { LanguageProvider } from '../contexts/LanguageContext'
import Header from '../components/header'
import Hero from '../components/hero'
import NewsSection from '../components/news-section'
import ConnectWithTutors from '../components/connect-with-tutors'
import StudyGuideSection from '../components/study-guide-section'
import SubscribeInfo from '../components/subscribe-info'

export default function Home() {
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
