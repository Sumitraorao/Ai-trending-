'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAgents() {
      try {
        const res = await fetch('/api/agents');
        if (!res.ok) {
          throw new Error('Failed to fetch agents data');
        }
        const data = await res.json();
        setAgents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAgents();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 text-blue-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight sm:text-5xl">
            AI Agents Showcase
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-blue-700 mx-auto">
            A curated collection of ready-to-use AI agent projects. Explore powerful, autonomous tools for various use cases.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
            <span className="ml-3 text-xl text-blue-700">Loading amazing agents...</span>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  Error loading agents: {error}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-blue-100 flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-blue-900 leading-tight">
                      {agent.name}
                    </h3>
                  </div>
                  <p className="text-blue-700 text-base flex-1">
                    {agent.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-blue-50">
                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                       ID: {agent.id.split('-')[0]}
                     </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {agents.length === 0 && !loading && !error && (
            <div className="text-center text-blue-700 py-12 bg-white rounded-lg border border-blue-100 shadow-sm">
                No agents found.
            </div>
        )}
      </div>
    </div>
  );
}
