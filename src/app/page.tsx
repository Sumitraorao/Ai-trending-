import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { ArrowRight, Tag, Activity, GitBranch, Cpu, BookOpen, Layers } from 'lucide-react';

export default function Home() {
  const dataPath = path.join(process.cwd(), 'src/data/agents.json');
  let agents = [];
  try {
    agents = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  } catch (error) {
    console.error("Could not load agents data", error);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20 selection:bg-indigo-100 selection:text-indigo-900">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Cpu className="h-6 w-6 text-indigo-600" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">AI Agents Hub</span>
            </div>
            <nav className="flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Trending</a>
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Ready-to-use</a>
              <a href="https://github.com/ashishpatel26/500-AI-Agents-Projects" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-slate-600 hover:text-indigo-600 font-medium transition-colors">
                <GitBranch className="h-4 w-4" />
                <span>GitHub Repo</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
            Discover Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">AI Agents</span>
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of production-ready AI agents spanning various frameworks and industries. Ready to supercharge your workflow.
          </p>
        </div>

        <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-bold flex items-center text-slate-800">
              <Activity className="h-5 w-5 mr-2 text-indigo-500" />
              Trending & Ready-to-Use Agents
            </h2>
            <p className="text-slate-500 mt-1">Browse our collection of {agents.length} active agents</p>
          </div>
          <div className="flex space-x-2">
            <span className="inline-flex items-center rounded-md bg-indigo-50 px-2.5 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">All</span>
            <span className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-sm font-medium text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 cursor-pointer">LangChain</span>
            <span className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-sm font-medium text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 cursor-pointer">CrewAI</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent: { id: string, title: string, description: string, tags?: string[], framework?: string, industry?: string, difficulty?: string, llm?: string }) => (
            <div key={agent.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-indigo-200 transition-all duration-300 group flex flex-col h-full">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
                    ${agent.difficulty === 'beginner' ? 'bg-emerald-100 text-emerald-700' :
                      agent.difficulty === 'intermediate' ? 'bg-amber-100 text-amber-700' :
                      'bg-rose-100 text-rose-700'}`}>
                    {agent.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {agent.title.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {agent.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.tags?.slice(0, 3).map((tag: string) => (
                    <span key={tag} className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                  {agent.tags && agent.tags.length > 3 && (
                    <span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-500">
                      +{agent.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <div className="grid grid-cols-2 gap-4 text-sm text-slate-500">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Framework</span>
                      <span className="font-medium text-slate-700 flex items-center">
                        <Layers className="h-3.5 w-3.5 mr-1.5 text-indigo-500" />
                        {agent.framework || 'Custom'}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Industry</span>
                      <span className="font-medium text-slate-700 truncate" title={agent.industry}>
                        {agent.industry?.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center group-hover:bg-indigo-50 transition-colors">
                <span className="text-xs font-medium text-slate-500 flex items-center group-hover:text-indigo-600 transition-colors">
                  <Cpu className="h-3.5 w-3.5 mr-1.5" />
                  {agent.llm}
                </span>
                <Link href={`/agent/${agent.id}`} className="text-sm font-semibold text-indigo-600 flex items-center hover:text-indigo-800 transition-colors">
                  View Agent
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
