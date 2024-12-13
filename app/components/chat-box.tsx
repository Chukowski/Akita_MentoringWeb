'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'

export default function ChatBox() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 w-80">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          Open Chat
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">AI Mentor Chat</h2>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              Close
            </button>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map(m => (
              <div key={m.id} className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${
                  m.role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {m.content}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="border-t p-4 flex">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask your question..."
              className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

