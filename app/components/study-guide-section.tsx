import { Book } from 'lucide-react'

export default function StudyGuideSection() {
  const guides = [
    { id: 1, title: 'Effective Note-Taking Strategies', category: 'Study Skills' },
    { id: 2, title: 'Mastering Calculus: A Comprehensive Guide', category: 'Mathematics' },
    { id: 3, title: 'Essay Writing: From Outline to Conclusion', category: 'Writing' },
  ]

  return (
    <section className="my-12 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Study Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <div key={guide.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <Book className="h-8 w-8 text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-800">{guide.title}</h3>
            <p className="text-sm text-gray-600">{guide.category}</p>
            <a href="#" className="mt-2 inline-block text-blue-600 hover:underline">
              Read more
            </a>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          Browse All Guides
        </button>
      </div>
    </section>
  )
}

