'use client'

export default function ConnectWithTutors() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Connect with Expert Tutors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Why Choose Our Tutors?</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Experienced and certified teachers
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Available 24/7 for your questions
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Personalized learning approach
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Get Started</h3>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Find a Tutor
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 
