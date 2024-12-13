'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    dob: '',
    phone: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    toast({
      title: "Registration Successful",
      description: "Your account has been created.",
    })
    // Redirect to home page after successful registration
    router.push('/')
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
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                id="dob"
                name="dob"
                type="date"
                required
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="123-456-7890"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

