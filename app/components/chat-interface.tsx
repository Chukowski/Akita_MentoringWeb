'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface Conversation {
  id: string
  title: string
  messages: Message[]
  date: string
}

const lessonStarters = [
  {
    title: "Fundamentos de Ciudadanía",
    topics: [
      "¿Cuáles son los requisitos básicos para la ciudadanía?",
      "¿Cuánto tiempo necesito ser residente permanente?",
      "¿Qué documentos necesito para aplicar?"
    ]
  },
  {
    title: "Historia Americana",
    topics: [
      "¿Quiénes escribieron los documentos federalistas?",
      "¿Cuándo fue escrita la constitución?",
      "¿Cuáles son los derechos en la Primera Enmienda?"
    ]
  },
  {
    title: "Gobierno y Sistema Político",
    topics: [
      "¿Cuáles son las tres ramas del gobierno?",
      "¿Qué hace el Congreso?",
      "¿Cuáles son las responsabilidades del Presidente?"
    ]
  },
  {
    title: "Derechos y Responsabilidades",
    topics: [
      "¿Cuáles son los derechos de los ciudadanos?",
      "¿Cuáles son las responsabilidades de los ciudadanos?",
      "¿Por qué es importante votar?"
    ]
  }
]

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

interface ChatInterfaceProps {
  isOpen: boolean
  onClose: () => void
}

export default function ChatInterface({ isOpen, onClose }: ChatInterfaceProps) {
  const { language } = useLanguage()
  const t = translations[language]
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [selectedContent, setSelectedContent] = useState<string | null>(null)
  const [currentConversation, setCurrentConversation] = useState<string | null>(null)

  useEffect(() => {
    // Load conversations from localStorage
    const savedConversations = localStorage.getItem('chatConversations')
    if (savedConversations) {
      setConversations(JSON.parse(savedConversations))
    }
  }, [])

  const saveConversation = () => {
    if (messages.length === 0) return

    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: messages[0].content.slice(0, 30) + '...',
      messages: [...messages],
      date: new Date().toLocaleDateString()
    }

    const updatedConversations = [...conversations, newConversation]
    setConversations(updatedConversations)
    localStorage.setItem('chatConversations', JSON.stringify(updatedConversations))
  }

  const loadConversation = (conversationId: string) => {
    const conversation = conversations.find(c => c.id === conversationId)
    if (conversation) {
      setMessages(conversation.messages)
      setCurrentConversation(conversationId)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim() || isLoading) return

    const userMessage = inputMessage.trim()
    setInputMessage('')
    setIsLoading(true)

    setMessages(prev => [...prev, { role: 'user', content: userMessage }])

    try {
      const response = await query({ question: userMessage })
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

  const startNewChat = () => {
    setMessages([])
    setCurrentConversation(null)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex">
      {/* Left Sidebar - Conversation History */}
      <div className="w-64 bg-gray-50 border-r overflow-y-auto flex flex-col">
        <div className="p-4 border-b bg-white">
          <button
            onClick={startNewChat}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Nueva Conversación
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => loadConversation(conv.id)}
              className={`w-full text-left p-4 hover:bg-gray-100 border-b ${
                currentConversation === conv.id ? 'bg-blue-50' : ''
              }`}
            >
              <div className="font-medium truncate">{conv.title}</div>
              <div className="text-sm text-gray-500">{conv.date}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Asistente de Ciudadanía AI</h2>
          <div className="flex gap-2">
            <button
              onClick={saveConversation}
              className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Guardar
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>

        {/* Messages with Markdown support */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500">
              <div className="mb-4">
                <span className="text-4xl">👋</span>
              </div>
              <p className="text-lg mb-2">¡Hola! Soy tu asistente virtual para el examen de ciudadanía.</p>
              <p>Selecciona un tema de la derecha o hazme una pregunta.</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-3 rounded-lg max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.role === 'assistant' ? (
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      className={`prose ${message.role === 'user' ? 'prose-invert' : ''} max-w-none prose-sm`}
                      components={{
                        // Override default link styling
                        a: ({ node, ...props }) => (
                          <a {...props} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" />
                        ),
                        // Ensure code blocks are properly styled
                        pre: ({ node, ...props }) => (
                          <pre {...props} className="bg-gray-800 text-white p-2 rounded" />
                        ),
                        // Style inline code
                        code: ({ node, inline, ...props }) => (
                          inline 
                            ? <code {...props} className="bg-gray-200 px-1 rounded" />
                            : <code {...props} />
                        ),
                        // Style lists
                        ul: ({ node, ...props }) => (
                          <ul {...props} className="list-disc list-inside" />
                        ),
                        ol: ({ node, ...props }) => (
                          <ol {...props} className="list-decimal list-inside" />
                        ),
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  ) : (
                    message.content
                  )}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t bg-white p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escribe tu pregunta aquí..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 font-medium"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      {/* Right Sidebar - Lesson Starters and Content */}
      <div className="w-80 bg-gray-50 border-l flex flex-col">
        {/* Lesson Starters */}
        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="text-lg font-semibold mb-4">Temas de Estudio</h3>
          {lessonStarters.map((section, index) => (
            <div key={index} className="mb-6">
              <h4 className="font-medium mb-2">{section.title}</h4>
              <div className="space-y-2">
                {section.topics.map((topic, topicIndex) => (
                  <button
                    key={topicIndex}
                    onClick={() => setInputMessage(topic)}
                    className="w-full text-left p-2 text-sm hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Content Area */}
        {selectedContent && (
          <div className="h-64 border-t bg-white p-4 overflow-y-auto">
            <h3 className="font-medium mb-2">Contenido Relacionado</h3>
            <div className="prose prose-sm">
              {selectedContent}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 