import './globals.css'

export const metadata = {
  title: 'HGAB Studios Blog Creator',
  description: 'AI-powered multi-agent blog creation system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header className="bg-white shadow-md p-4">
          <h1 className="text-2xl font-bold text-gray-800">HGAB Studios Blog Creator</h1>
        </header>
        <main className="container mx-auto mt-8 p-4">
          {children}
        </main>
      </body>
    </html>
  )
}