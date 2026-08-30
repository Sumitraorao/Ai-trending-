import './globals.css'

export const metadata = {
  title: 'AI Agents Explorer',
  description: 'Explore 500+ ready-to-use AI Agents',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  )
}
