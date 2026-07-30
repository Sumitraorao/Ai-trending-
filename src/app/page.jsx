import React from 'react';
import agentsData from '@/data/agents.json';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
          Discover <span className="text-gradient">Ready-to-Use</span> AI Agents
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore a curated collection of trending, production-ready AI agents across multiple frameworks like LangChain, CrewAI, AutoGen, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agentsData.map((agent) => (
          <div key={agent.id} className="card card-hover flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-gray-800 leading-tight">
                {agent.name}
              </h2>
              {agent.trending && (
                <span className="badge badge-warning whitespace-nowrap ml-2">Trending 🔥</span>
              )}
            </div>

            <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
              {agent.description}
            </p>

            <div className="mt-auto space-y-4">
              <div className="flex flex-wrap gap-2">
                {agent.frameworks.map((framework, index) => (
                  <span key={index} className="badge badge-primary">
                    {framework}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="badge badge-success flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  {agent.status}
                </span>
                <a
                  href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/${agent.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Code →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
