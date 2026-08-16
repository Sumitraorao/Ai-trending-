import React from 'react';
import AgentCard from '@/components/AgentCard';
import agentsData from '@/data/agents.json';

export default function Home() {
  return (
    <div>
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Discover & Deploy AI Agents</h2>
        <p className="text-lg text-gray-600">
          Explore a curated list of ready-to-use AI agents for various industries including Healthcare, Finance, Productivity, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agentsData.map((agent, index) => (
          <AgentCard key={index} agent={agent} />
        ))}
      </div>
    </div>
  );
}
