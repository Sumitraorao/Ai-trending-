import React from 'react';
import agents from '../../../data/agents.json';
import Link from 'next/link';

export async function generateStaticParams() {
  return agents.map((agent) => ({
    id: agent.id,
  }));
}

export default function AgentPage({ params }) {
  const { id } = params;
  const agent = agents.find((a) => a.id === id);

  if (!agent) {
    return <div className="min-h-screen bg-blue-50 p-8 flex justify-center items-center text-gray-700">Agent not found</div>;
  }

  return (
    <div className="min-h-screen bg-blue-50 p-8 font-sans text-gray-800">
      <nav className="mb-8 max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
          &larr; Back to Home
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 border border-blue-100">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">{agent.name}</h1>
        <p className="text-xl text-gray-600 mb-8 border-b border-gray-200 pb-8">{agent.description}</p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Run Agent</h2>
          <p className="text-gray-700 mb-4">This agent is ready to be deployed or run locally.</p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm">
              Deploy to Cloud
            </button>
            <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium shadow-sm">
              Run Locally
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
