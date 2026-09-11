import React from 'react';
import agentsData from '../data/agents.json';
import { AgentCard } from '../components/AgentCard';
import { Layers } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="text-blue-600 w-8 h-8" />
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">AI Agent Hub</h1>
          </div>
          <nav>
            <span className="text-sm font-medium text-slate-500 bg-slate-100 py-1.5 px-3 rounded-full">
              {agentsData.length} Agents Ready
            </span>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
          Trending <span className="text-blue-600">AI Agents</span> Ready to Use
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed mb-8">
          Explore a curated collection of production-ready AI agents built with top frameworks.
          Discover solutions for healthcare, finance, research, and more.
        </p>
      </section>

      {/* Agents Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {agentsData.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-500">
          <p>Powered by the open source AI community.</p>
        </div>
      </footer>
    </main>
  );
}
