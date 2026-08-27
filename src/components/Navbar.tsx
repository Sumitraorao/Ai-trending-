import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700">
                AI Agents Directory
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="https://github.com/ashishpatel26/500-AI-Agents-Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Source Repository
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
