'use client'

import { useState, useRef } from 'react'

interface VoiceInputProps {
  onTranscription: (text: string) => void
  isRecording: boolean
  setIsRecording: (isRecording: boolean) => void
}

export default function VoiceInput({ onTranscription, isRecording, setIsRecording }: VoiceInputProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  const startRecording = async () => {
    try {
      setError(null)
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          channelCount: 1,
          sampleRate: 16000,
          echoCancellation: true,
          noiseSuppression: true,
        } 
      })
      
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus',
        audioBitsPerSecond: 128000
      })
      mediaRecorderRef.current = mediaRecorder
      chunksRef.current = []

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data)
        }
      }

      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach(track => track.stop())
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm;codecs=opus' })
        await handleAudioUpload(audioBlob)
      }

      mediaRecorder.start(1000) // Capture in 1-second chunks
      setIsRecording(true)
    } catch (err) {
      console.error('Error starting recording:', err)
      setError('Error al iniciar la grabación')
      setIsRecording(false)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const handleAudioUpload = async (audioBlob: Blob) => {
    try {
      setIsProcessing(true)
      setError(null)

      const formData = new FormData()
      formData.append('file', audioBlob, 'audio.webm')
      formData.append('model', 'whisper-large-v3-turbo')
      formData.append('language', 'es')
      formData.append('response_format', 'json')

      const response = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,
        },
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.text()
        console.error('Error response:', errorData)
        throw new Error(`Error en la transcripción: ${response.status} - ${errorData}`)
      }

      const data = await response.json()
      if (data.text) {
        onTranscription(data.text)
      } else {
        throw new Error('No se recibió texto de la transcripción')
      }
    } catch (err) {
      console.error('Error processing audio:', err)
      setError(err instanceof Error ? err.message : 'Error al procesar el audio')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="flex items-center gap-2">
      {error && (
        <div className="text-sm text-red-500 max-w-xs">
          {error}
        </div>
      )}
      <button
        onClick={isRecording ? stopRecording : startRecording}
        disabled={isProcessing}
        className={`p-2 rounded-full transition-colors ${
          isRecording
            ? 'bg-red-500 hover:bg-red-600'
            : isProcessing
            ? 'bg-gray-400'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        title={isRecording ? 'Detener Grabación' : 'Iniciar Grabación'}
      >
        {isProcessing ? (
          <div className="w-6 h-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : isRecording ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="6" y="6" width="12" height="12" fill="currentColor" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        )}
      </button>
    </div>
  )
} 