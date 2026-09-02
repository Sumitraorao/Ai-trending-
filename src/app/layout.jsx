import './globals.css'

export const metadata = {
  title: 'AI Agents Directory',
  description: 'A curated list of ready-to-use and trending AI agents.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
