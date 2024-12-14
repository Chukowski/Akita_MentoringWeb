'use client'

import Link from 'next/link'
import { RegisterModal } from './register-modal'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          {t.citizenshipPrep}
        </Link>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-gray-600 hover:text-blue-600">{t.home}</Link></li>
            <li><Link href="/practice" className="text-gray-600 hover:text-blue-600">{t.practiceTest}</Link></li>
            <li><Link href="/study" className="text-gray-600 hover:text-blue-600">{t.studyMaterials}</Link></li>
            <li><Link href="/resources" className="text-gray-600 hover:text-blue-600">{t.resources}</Link></li>
            <li><RegisterModal /></li>
          </ul>
          <Select value={language} onValueChange={(value: 'en' | 'es' | 'fr') => setLanguage(value)}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
            </SelectContent>
          </Select>
        </nav>
      </div>
    </header>
  )
}

