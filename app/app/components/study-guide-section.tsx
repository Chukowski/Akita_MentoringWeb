'use client'

export default function StudyGuideSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Study Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Mathematics</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive guides covering algebra, geometry, and calculus.
            </p>
            <button className="text-blue-600 hover:text-blue-700">
              View Guides →
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Sciences</h3>
            <p className="text-gray-600 mb-4">
              In-depth materials for physics, chemistry, and biology.
            </p>
            <button className="text-blue-600 hover:text-blue-700">
              View Guides →
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <p className="text-gray-600 mb-4">
              Resources for English, Spanish, and French learning.
            </p>
            <button className="text-blue-600 hover:text-blue-700">
              View Guides →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 
