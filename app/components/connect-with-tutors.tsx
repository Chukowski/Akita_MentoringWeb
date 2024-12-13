import Image from 'next/image'

export default function ConnectWithTutors() {
  const tutors = [
    { id: 1, name: 'Dr. Jane Smith', subject: 'Mathematics' },
    { id: 2, name: 'Prof. John Doe', subject: 'Physics' },
    { id: 3, name: 'Ms. Emily Brown', subject: 'Literature' },
  ]

  return (
    <section className="my-12 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect with Tutors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="flex flex-col items-center p-4 border rounded-lg">
            <Image
              src={`/placeholder.svg?height=100&width=100&text=${tutor.name}`}
              alt={tutor.name}
              width={100}
              height={100}
              className="rounded-full mb-2"
            />
            <h3 className="text-lg font-semibold text-gray-800">{tutor.name}</h3>
            <p className="text-sm text-gray-600">{tutor.subject}</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              Schedule Session
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

