'use client'

export default function SubscribeInfo() {
  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Platform</h2>
          <p className="text-xl mb-8">
            Get unlimited access to all study materials and one-on-one tutoring
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
              <p className="text-3xl font-bold mb-4">$9.99<span className="text-sm">/month</span></p>
              <ul className="text-left space-y-2 mb-6">
                <li>✓ Access to study materials</li>
                <li>✓ Practice tests</li>
                <li>✓ Basic AI assistance</li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Get Started
              </button>
            </div>
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
              <p className="text-3xl font-bold mb-4">$19.99<span className="text-sm">/month</span></p>
              <ul className="text-left space-y-2 mb-6">
                <li>✓ Everything in Basic</li>
                <li>✓ One-on-one tutoring</li>
                <li>✓ Advanced AI features</li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Get Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
