import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-900">
            500 AI Agents Directory
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="https://github.com/ashishpatel26/500-AI-Agents-Projects" target="_blank" rel="noopener noreferrer" className="block py-2 px-3 text-gray-700 bg-blue-100 rounded md:bg-transparent md:text-blue-700 md:p-0">
                Source Repository
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
