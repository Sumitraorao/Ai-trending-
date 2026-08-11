"use client";

import React, { useState } from 'react';
import { Book, Cpu, Wrench, Briefcase, Star, Search } from 'lucide-react';
import agentsData from '@/data/agents.json';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAgents = agentsData.filter(agent => {
    const term = searchTerm.toLowerCase();
    return (
      agent.name.toLowerCase().includes(term) ||
      agent.description.toLowerCase().includes(term) ||
      agent.framework.toLowerCase().includes(term) ||
      agent.industry.toLowerCase().includes(term)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Cpu size={28} />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">AI Agents Hub</h1>
            </div>
            <div className="hidden sm:flex items-center text-sm font-medium text-slate-500 gap-6">
              <a href="https://github.com/ashishpatel26/500-AI-Agents-Projects" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">GitHub Repository</a>
              <span>Ready-to-use Templates</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
            Discover & Deploy AI Agents
          </h2>
          <p className="text-lg text-slate-600">
            A curated collection of production-ready AI agents, tutorials, and working code spanning every major framework and industry.
          </p>
        </div>

        {/* Filters / Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <h3 className="text-xl font-bold text-slate-800">
            Available Agents <span className="text-slate-500 font-normal text-sm ml-2">({filteredAgents.length})</span>
          </h3>
          <div className="relative w-full sm:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search agents by name, framework..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Agents Grid */}
        {filteredAgents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent) => (
              <div key={agent.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-bold text-slate-900 leading-tight pr-4">{agent.name}</h4>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 whitespace-nowrap">
                      {agent.framework}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 mb-6 line-clamp-3">
                    {agent.description}
                  </p>

                  <div className="space-y-3 mt-auto">
                    <div className="flex items-center text-xs text-slate-500">
                      <Wrench size={14} className="mr-2 text-slate-400" />
                      <span className="font-medium text-slate-700 w-16">LLM:</span>
                      {agent.llm}
                    </div>
                    <div className="flex items-center text-xs text-slate-500">
                      <Briefcase size={14} className="mr-2 text-slate-400" />
                      <span className="font-medium text-slate-700 w-16">Industry:</span>
                      {agent.industry}
                    </div>
                    <div className="flex items-center text-xs text-slate-500">
                      <Star size={14} className="mr-2 text-yellow-400" />
                      <span className="font-medium text-slate-700 w-16">Level:</span>
                      <span className="text-yellow-500 tracking-widest">{agent.difficulty}</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 mt-auto flex justify-between items-center">
                  <a
                    href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <Book size={16} className="mr-1.5" />
                    View Source
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-slate-200">
            <Search size={48} className="mx-auto text-slate-300 mb-4" />
            <h4 className="text-xl font-medium text-slate-700">No agents found</h4>
            <p className="text-slate-500 mt-2">Try adjusting your search terms.</p>
          </div>
        )}
      </main>
    </div>
  );
}
