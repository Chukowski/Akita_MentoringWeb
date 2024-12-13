'use client'

import { useState } from 'react'

export default function SubscribeInfo() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Subscribed with email:', email)
    setEmail('')
    alert('Thank you for subscribing!')
  }

  return (
    <section className="my-12 bg-blue-600 text-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
      <p className="mb-4">Subscribe to our newsletter for the latest updates, study tips, and exclusive content.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-grow px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </section>
  )
}

