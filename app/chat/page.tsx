'use client'

import { useState, useEffect } from 'react'
import { useChat } from 'ai/react'
import Link from 'next/link'
import { ArrowLeft, Send, Volume2, VolumeX } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const interviewQuestions = [
  "Tell me about yourself.",
  "What are your greatest strengths?",
  "What do you consider to be your weaknesses?",
  "Why do you want this job?",
  "Where do you see yourself in five years?",
  "Why should we hire you?",
  "What is your greatest professional achievement?",
  "Tell me about a challenge or conflict you've faced at work, and how you dealt with it.",
  "How do you handle stress and pressure?",
  "What are your salary expectations?",
]

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, setMessages } = useChat()
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  useEffect(() => {
    // Start the interview with the first question
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: "Hello! I'm your AI interviewer. Let's start with the first question: " + interviewQuestions[0],
      },
    ])
  }, [setMessages])

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled)
    // Here you would implement the actual audio functionality
  }

  const handleInterviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(e)

    // Move to the next question after user's response
    const nextQuestionIndex = (currentQuestion + 1) % interviewQuestions.length
    setCurrentQuestion(nextQuestionIndex)

    // Add a slight delay before asking the next question
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: String(prevMessages.length + 1),
          role: 'assistant',
          content: interviewQuestions[nextQuestionIndex],
        },
      ])
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-gray-600 hover:text-blue-600 flex items-center">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          <button
            onClick={toggleAudio}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
            aria-label={audioEnabled ? "Disable audio" : "Enable audio"}
          >
            {audioEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">AI Interview Practice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg?height=48&width=48" alt="AI Interviewer" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">AI Interviewer</p>
                <p className="text-xs text-gray-500">Here to help you practice</p>
              </div>
            </div>
            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`rounded-lg p-2 max-w-[80%] ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleInterviewSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your answer..."
                className="flex-grow"
              />
              <Button type="submit">
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </form>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

