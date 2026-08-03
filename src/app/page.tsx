'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import agentsData from '@/data/agents.json';

interface Agent {
  name: string;
  category: string;
  description: string;
  url: string;
}

export default function Home() {
  const agents: Agent[] = agentsData as Agent[];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(agents.map(a => a.category).filter(c => c));
    return ['All', ...Array.from(cats)].sort();
  }, [agents]);

  const filteredAgents = useMemo(() => {
    return agents.filter(agent => {
      const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            agent.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || agent.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [agents, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-blue-100">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Explore 500+ AI Agents</h1>
          <p className="text-blue-600 mb-6">Discover, learn, and integrate ready-to-use AI agents for your projects.</p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <label htmlFor="search" className="sr-only">Search agents</label>
              <input
                id="search"
                type="text"
                placeholder="Search by name or description..."
                className="w-full p-3 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-blue-900 placeholder-blue-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="md:w-64">
              <label htmlFor="category" className="sr-only">Filter by category</label>
              <select
                id="category"
                className="w-full p-3 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-blue-900 appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.length > 0 ? (
            filteredAgents.map((agent, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="p-5 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold text-blue-700 leading-tight">{agent.name}</h2>
                  </div>
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full mb-3 border border-blue-100 font-medium">
                    {agent.category || 'Uncategorized'}
                  </span>
                  <p className="text-blue-800 text-sm mb-4 line-clamp-3">
                    {agent.description}
                  </p>
                </div>
                <div className="bg-slate-50 p-4 border-t border-blue-50">
                  <a
                    href={agent.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full bg-white p-8 rounded-lg border border-blue-100 text-center">
              <p className="text-blue-600 text-lg">No agents found matching your criteria.</p>
              <button
                onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                className="mt-4 text-blue-500 hover:text-blue-700 underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-blue-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-blue-600">
          <p>Curated list of AI agents. Based on the 500-AI-Agents-Projects repository.</p>
        </div>
      </footer>
    </div>
  );
}
