import './globals.css'

export const metadata = {
  title: 'AI Agents Directory',
  description: 'A directory of ready-to-use AI agents',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
