import React from 'react';
import agents from '../data/agents.json';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 p-8 font-sans text-gray-800">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">500 AI Agents Projects</h1>
        <p className="text-lg text-gray-600">Explore and use a collection of ready-to-use AI agents.</p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agents.map((agent) => (
          <div key={agent.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">{agent.name}</h2>
            <p className="text-gray-600 mb-4">{agent.description}</p>
            <div className="flex gap-4">
              <Link href={`/agents/${agent.id}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                View Details
              </Link>
            </div>
          </div>
        ))}
        {agents.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500 text-lg">
            No agents found. Run `npm run setup` to parse agents.
          </div>
        )}
      </main>
    </div>
  );
}
