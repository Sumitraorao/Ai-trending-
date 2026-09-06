import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Agents Directory',
  description: 'Directory of trending and ready-to-use AI Agents',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <nav className="border-b border-gray-200 bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              🤖 AI Agents Hub
            </h1>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </body>
    </html>
  )
}
