import './globals.css';

export const metadata = {
  title: 'AI Agents Hub',
  description: 'A curated collection of AI Agent Projects',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans antialiased min-h-screen">
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              AI Agents Hub
            </a>
            <nav className="space-x-4">
              <a href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
              <a href="https://github.com/ashishpatel26/500-AI-Agents-Projects" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 font-medium">GitHub Repo</a>
            </nav>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 border-t border-gray-200 mt-12 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
            <p>Built with Next.js and Tailwind CSS.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
