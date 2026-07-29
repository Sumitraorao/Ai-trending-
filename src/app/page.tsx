'use client';

import React, { useState } from 'react';
import AgentCard from '@/components/AgentCard';
import agentsData from '@/data/agents.json';
import { Search, Filter } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFramework, setSelectedFramework] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const frameworks = ['All', ...Array.from(new Set(agentsData.map(a => a.framework)))].filter(Boolean);
  const difficulties = ['All', ...Array.from(new Set(agentsData.map(a => a.difficulty)))].filter(Boolean);

  const filteredAgents = agentsData.filter(agent => {
    const matchesSearch = agent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          agent.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          agent.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFramework = selectedFramework === 'All' || agent.framework === selectedFramework;
    const matchesDifficulty = selectedDifficulty === 'All' || agent.difficulty === selectedDifficulty;

    return matchesSearch && matchesFramework && matchesDifficulty;
  });

  return (
    <div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search agents, descriptions, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <div className="relative">
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border border-slate-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white capitalize appearance-none"
                value={selectedFramework}
                onChange={(e) => setSelectedFramework(e.target.value)}
              >
                {frameworks.map(f => (
                  <option key={f} value={f}>{f === 'All' ? 'All Frameworks' : f}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <Filter className="h-4 w-4" />
              </div>
            </div>

            <div className="relative">
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border border-slate-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white capitalize appearance-none"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                {difficulties.map(d => (
                  <option key={d} value={d}>{d === 'All' ? 'All Difficulties' : d}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <Filter className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex justify-between items-center text-slate-600">
        <p>Showing <span className="font-semibold text-slate-900">{filteredAgents.length}</span> agents</p>
      </div>

      {filteredAgents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent, index) => (
            <AgentCard key={index} agent={agent} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-xl border border-slate-200 shadow-sm">
          <Search className="mx-auto h-12 w-12 text-slate-300 mb-4" />
          <h3 className="text-lg font-medium text-slate-900">No agents found</h3>
          <p className="mt-1 text-slate-500">Try adjusting your search or filters to find what you&apos;re looking for.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedFramework('All');
              setSelectedDifficulty('All');
            }}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
