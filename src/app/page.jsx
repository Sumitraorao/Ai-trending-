import agentsData from '../data/agents.json';
import Link from 'next/link';
import { Bot, ChevronRight, Terminal, Github, Code, Network, BrainCircuit, FileSearch, LineChart } from 'lucide-react';

export default function Home() {
  const categories = [
    { name: "All", count: agentsData.length },
    { name: "LangChain", count: agentsData.filter(a => a.framework?.includes('LangChain')).length },
    { name: "LangGraph", count: agentsData.filter(a => a.framework?.includes('LangGraph')).length },
    { name: "CrewAI", count: agentsData.filter(a => a.framework?.includes('CrewAI')).length },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-blue-600" />
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              500+ AI Agents
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ashishpatel26/500-AI-Agents-Projects" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 hover:border-blue-200">
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">View Source Repository</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
            Explore <span className="text-blue-600">Ready-to-Use</span> AI Agents
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            A curated collection of production examples, tutorials, and working code spanning every major framework and industry.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <span key={cat.name} className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-700">
                {cat.name} <span className="ml-1 text-slate-400">({cat.count})</span>
              </span>
            ))}
          </div>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentsData.map((agent) => (
            <div key={agent.id} className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 overflow-hidden">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {agent.framework?.includes('LangChain') ? <Network className="w-6 h-6" /> :
                     agent.framework?.includes('LangGraph') ? <BrainCircuit className="w-6 h-6" /> :
                     agent.framework?.includes('CrewAI') ? <Bot className="w-6 h-6" /> :
                     <Code className="w-6 h-6" />}
                  </div>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600 border border-slate-200">
                    {agent.framework || "Other"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {agent.id.replace(/^\d+-/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </h3>

                <p className="text-slate-600 text-sm flex-1 leading-relaxed line-clamp-3 mb-4">
                  {agent.description}
                </p>

                <div className="mt-auto flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                  <Terminal className="w-4 h-4 mr-1.5" />
                  View Agent Implementation
                  <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
              <div className="bg-slate-50 border-t border-slate-100 px-6 py-3 text-xs text-slate-500 font-mono flex items-center">
                <FileSearch className="w-3.5 h-3.5 mr-1.5 opacity-50" />
                <span className="truncate">{agent.path}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
