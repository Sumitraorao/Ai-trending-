import agents from '../data/agents.json';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4 tracking-tight">AI Agents Explorer</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Explore a curated collection of ready-to-use AI agents for various industries and use cases.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <div key={agent.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200 overflow-hidden flex flex-col h-full">
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full uppercase tracking-wider">
                  {agent.industry}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {agent.framework}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-2 line-clamp-1" title={agent.title}>
                {agent.title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </h2>
              <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
                {agent.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {agent.tags?.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
              <div className="text-xs font-medium text-slate-500">
                LLM: <span className="text-slate-700">{agent.llm}</span>
              </div>
              <a
                href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                View Code &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
