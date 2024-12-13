'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    id: 3,
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  }
]

export default function PracticePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answerSubmitted, setAnswerSubmitted] = useState(false)

  const handleAnswerSelect = (answer: string) => {
    if (!answerSubmitted) {
      setSelectedAnswer(answer)
    }
  }

  const handleSubmit = () => {
    if (!answerSubmitted) {
      setAnswerSubmitted(true)
      const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer
      if (isCorrect) {
        setScore(score + 1)
        toast({
          title: "Correct!",
          description: "Great job! That's the right answer.",
          variant: "default",
        })
      } else {
        toast({
          title: "Incorrect",
          description: `The correct answer is: ${questions[currentQuestion].correctAnswer}`,
          variant: "destructive",
        })
      }
    } else {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer("")
        setAnswerSubmitted(false)
      } else {
        setShowResult(true)
      }
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer("")
    setShowResult(false)
    setScore(0)
    setAnswerSubmitted(false)
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="text-gray-600 hover:text-blue-600 flex items-center">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Practice Questions</CardTitle>
          </CardHeader>
          <CardContent>
            {!showResult ? (
              <>
                <h2 className="text-lg font-semibold mb-4">Question {currentQuestion + 1} of {questions.length}</h2>
                <p className="text-lg text-gray-700 mb-4">{questions[currentQuestion].question}</p>
                <div className="space-y-2">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleAnswerSelect(option)}
                      className={`w-full justify-start ${
                        selectedAnswer === option
                          ? answerSubmitted
                            ? option === questions[currentQuestion].correctAnswer
                              ? 'bg-green-500 hover:bg-green-600'
                              : 'bg-red-500 hover:bg-red-600'
                            : 'bg-blue-500 hover:bg-blue-600'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      } ${answerSubmitted && option === questions[currentQuestion].correctAnswer ? 'ring-2 ring-green-400' : ''}`}
                      disabled={answerSubmitted}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-center mb-4">Quiz Results</h2>
                <p className="text-lg text-center">
                  You scored {score} out of {questions.length} questions correctly.
                </p>
              </>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            {!showResult ? (
              <Button onClick={handleSubmit} disabled={!selectedAnswer} className="w-full max-w-xs">
                {answerSubmitted ? (currentQuestion === questions.length - 1 ? 'Finish' : 'Next Question') : 'Submit Answer'}
              </Button>
            ) : (
              <Button onClick={resetQuiz} className="w-full max-w-xs">
                Try Again
              </Button>
            )}
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

