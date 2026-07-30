import './globals.css';

export const metadata = {
  title: 'AI Agents Hub',
  description: 'Curated list of ready-to-use and trending AI agents',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-600">AI Agents Hub</span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-gray-600 font-medium">
                <a href="#" className="hover:text-blue-600 transition-colors">Discover</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Trending</a>
                <a href="#" className="hover:text-blue-600 transition-colors">About</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} AI Agents Hub. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
