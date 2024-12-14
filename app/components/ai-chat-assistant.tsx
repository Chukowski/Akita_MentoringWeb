'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

async function query(data: { question: string }) {
  const response = await fetch(
    "https://wise.mysmartspace.app/api/v1/prediction/e127f114-44e5-43a2-bffd-a4bf1d412477",
    {
      headers: {
        Authorization: "Bearer Y-LqVemcrYUBg_uo1j7X-2lbOuvkO6KtSpmjYV4pKBA",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    }
  )
  const result = await response.json()
  return result
}

export default function AIChatAssistant() {
  const { language } = useLanguage()
  const t = translations[language]
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Add event listener for the chat button
    const handleChatButtonClick = () => setIsOpen(true)
    const chatButton = document.getElementById('open-ai-chat')
    if (chatButton) {
      chatButton.addEventListener('click', handleChatButtonClick)
    }
    return () => {
      if (chatButton) {
        chatButton.removeEventListener('click', handleChatButtonClick)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim() || isLoading) return

    const userMessage = inputMessage.trim()
    setInputMessage('')
    setIsLoading(true)

    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])

    try {
      const response = await query({ question: userMessage })
      // Add AI response to chat
      setMessages(prev => [...prev, { role: 'assistant', content: response.text }])
    } catch (error) {
      console.error('Error getting AI response:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Lo siento, hubo un error. Por favor, intenta de nuevo más tarde.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) {
    return (
      <button
        id="ai-chat-button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <span className="text-2xl">💬</span>
      </button>
    )
  }

  return (
    <div id="ai-chat-assistant" className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-lg z-50">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="text-lg font-semibold">Asistente de Ciudadanía AI</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200 transition-colors"
        >
          ✕
        </button>
      </div>
      
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-gray-500 text-center">
            ¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte con tu preparación para la ciudadanía?
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${
                message.role === 'user'
                  ? 'bg-blue-100 ml-8'
                  : 'bg-gray-100 mr-8'
              }`}
            >
              {message.content}
            </div>
          ))
        )}
        {isLoading && (
          <div className="text-center text-gray-500">
            <div className="animate-pulse">Pensando...</div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Escribe tu pregunta aquí..."
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
} 