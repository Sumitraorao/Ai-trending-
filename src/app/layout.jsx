import './globals.css'

export const metadata = {
  title: 'AI Agents Explorer',
  description: 'Explore trending AI agents',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <body>{children}</body>
    </html>
  )
}
