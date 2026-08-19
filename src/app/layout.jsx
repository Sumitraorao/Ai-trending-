import "./globals.css";
import Link from 'next/link';

export const metadata = {
  title: "AI Agents Gallery",
  description: "A collection of ready-to-use and trending AI agents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <nav className="bg-blue-600 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="text-white font-bold text-xl">
                    AI Agents Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-100 border-t border-gray-200 mt-12 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} AI Agents Gallery. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
