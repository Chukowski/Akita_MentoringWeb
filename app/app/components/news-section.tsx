'use client'

export default function NewsSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">New Study Materials</h3>
          <p className="text-gray-600">Access our latest collection of study materials for all subjects.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Live Tutoring</h3>
          <p className="text-gray-600">Connect with expert tutors in real-time for personalized help.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Practice Tests</h3>
          <p className="text-gray-600">Prepare for exams with our updated practice test database.</p>
        </div>
      </div>
    </section>
  )
} 
