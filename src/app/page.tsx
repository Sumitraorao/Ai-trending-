import agents from '../data/agents.json';
import Link from 'next/link';
import { Bot, ArrowRight, Activity, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <Bot size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">AI Agents Hub</h1>
              <p className="text-slate-500 mt-1">Ready-to-use trending AI agents</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Discover Powerful AI Agents
          </h2>
          <p className="text-lg text-slate-600">
            A curated collection of the top open-source AI agents ready for deployment.
            Explore trending projects from the 500-AI-Agents repository.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-200 transition-all duration-200 overflow-hidden group flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-50 text-blue-600 p-2.5 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Activity size={24} />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 border border-emerald-200">
                    Ready to use
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-1" title={agent.name}>
                  {agent.name}
                </h3>

                <p className="text-slate-600 mb-6 flex-1 line-clamp-3">
                  {agent.description}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4 bg-slate-50 p-2 rounded-md">
                    <Terminal size={16} />
                    <code className="text-xs truncate">{agent.id}</code>
                  </div>

                  <a
                    href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 bg-blue-50 text-blue-700 px-4 py-2.5 rounded-lg font-medium hover:bg-blue-100 transition-colors"
                  >
                    View Agent <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
          <p>AI Agents Hub &copy; {new Date().getFullYear()}. All agents from 500-AI-Agents-Projects repository.</p>
        </div>
      </footer>
    </div>
  );
}
