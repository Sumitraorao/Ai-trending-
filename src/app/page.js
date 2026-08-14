import React from 'react';
import agents from '../data/agents.json';
import { ExternalLink, Bot, Code } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Bot size={32} className="text-white" />
              <h1 className="text-3xl font-bold">AI Agents Directory</h1>
            </div>
            <a
              href="https://github.com/ashishpatel26/500-AI-Agents-Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors"
            >
              <Code size={20} />
              <span>Source Repo</span>
            </a>
          </div>
          <p className="mt-4 text-blue-100 max-w-2xl text-lg">
            A comprehensive, curated collection of {agents.length} production examples, tutorials, and working AI agent implementations.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full group hover:border-blue-300"
            >
              <div className="p-5 flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {agent.name}
                  </h3>
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 shrink-0 ml-3">
                    <Bot size={18} />
                  </div>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {agent.description}
                </p>
              </div>

              <div className="px-5 py-4 bg-white border-t border-gray-100">
                <a
                  href={agent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full space-x-2 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
                >
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {agents.length === 0 && (
          <div className="text-center py-20">
            <Bot size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-700">No agents found</h2>
            <p className="text-gray-500 mt-2">Make sure you have run the parser script correctly.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>
            Based on the repository by <a href="https://github.com/ashishpatel26" className="text-blue-600 hover:underline">Ashish Patel</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
