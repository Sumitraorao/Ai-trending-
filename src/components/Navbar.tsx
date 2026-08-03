import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b border-blue-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors">
          AI Agents Hub
        </Link>
        <div className="flex space-x-4">
          <a
            href="https://github.com/ashishpatel26/500-AI-Agents-Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </nav>
  );
}
