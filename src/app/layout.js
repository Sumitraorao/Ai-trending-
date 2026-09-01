import './globals.css'

export const metadata = {
  title: 'AI Agents Projects',
  description: 'A curated collection of ready-to-use AI agents',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
