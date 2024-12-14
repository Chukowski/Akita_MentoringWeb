'use client'

import { Metadata } from 'next'
import Header from './components/header'
import Hero from './components/hero'
import ImmigrationUpdates from './components/immigration-updates'
import PracticeTests from './components/practice-tests'
import StudyMaterials from './components/study-materials'
import CommunityResources from './components/community-resources'
import AIChatAssistant from './components/ai-chat-assistant'
import { LanguageProvider } from './contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Preparación para la Ciudadanía',
  description: 'Prepárate para tu examen de naturalización con nuestros recursos y práctica',
}

export default function CitizenshipPrepPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-blue-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <ImmigrationUpdates />
          <PracticeTests />
          <StudyMaterials />
          <CommunityResources />
        </main>
        <AIChatAssistant />
      </div>
    </LanguageProvider>
  )
}

