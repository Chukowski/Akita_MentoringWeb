import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import FormData from 'form-data'

export async function POST(request: NextRequest) {
  console.log('Transcribe API called')

  try {
    const formData = await request.formData()
    const file = formData.get('file')

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    console.log('File received:', { type: file.type, size: file.size })

    // Test response to verify the route is working
    return NextResponse.json({ 
      success: true,
      text: "Test transcription response",
      received: { type: file.type, size: file.size }
    })

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { 
      status: 500 
    })
  }
} 