import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to HGAB Studios Blog Creator</h1>
      <p className="mb-8">Create amazing blog posts with our AI-powered multi-agent system.</p>
      <Link href="/dashboard" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Dashboard
      </Link>
    </div>
  )
}