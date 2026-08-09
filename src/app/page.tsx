import agents from '../data/agents.json';
import Link from 'next/link';
import { Bot, Terminal, FileCode2, Info } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-800">AI Agents Atlas</h1>
          </div>
          <nav>
            <a href="https://github.com/ashishpatel26/500-AI-Agents-Projects" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
              Source Repo
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">Discover & Use Ready AI Agents</h2>
          <p className="text-lg text-slate-600">
            Browse our curated collection of working, ready-to-use AI agent projects spanning different frameworks and industries.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <Link href={`/agent/${agent.id}`} key={agent.id} className="block group">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-full transition-all duration-200 hover:shadow-md hover:border-blue-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {agent.title.replace(/-/g, ' ')}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    agent.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                    agent.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {agent.difficulty}
                  </span>
                </div>

                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {agent.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded border border-blue-100">
                    {agent.framework}
                  </span>
                  <span className="inline-flex items-center px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded border border-purple-100">
                    {agent.industry}
                  </span>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-sm text-slate-500">
                  <Terminal className="h-4 w-4 mr-1" />
                  <span className="capitalize">{agent.language}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12 py-8 text-center text-slate-500">
        <p>Curated from ashishpatel26/500-AI-Agents-Projects</p>
      </footer>
    </div>
  );
}
