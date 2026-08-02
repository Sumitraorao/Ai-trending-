import agents from '../data/agents.json';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-extrabold text-blue-700">AI Agents Directory</h1>
          <p className="mt-2 text-slate-600">Discover ready-to-use and trending AI agents for your projects.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent: any) => (
            <div key={agent.id} className="bg-white overflow-hidden shadow rounded-lg border border-slate-200 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <div className="px-4 py-5 sm:p-6 flex-grow">
                <h3 className="text-lg leading-6 font-bold text-slate-900 mb-2 truncate" title={agent.title}>{agent.title}</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-3" title={agent.description}>
                  {agent.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.tags && agent.tags.map((tag: string) => (
                    <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-slate-600 space-y-1">
                  <p><span className="font-semibold text-slate-700">Framework:</span> <span className="capitalize">{agent.framework}</span></p>
                  <p><span className="font-semibold text-slate-700">Industry:</span> <span className="capitalize">{agent.industry}</span></p>
                  <p><span className="font-semibold text-slate-700">Difficulty:</span> <span className="capitalize">{agent.difficulty}</span></p>
                </div>
              </div>
              <div className="bg-slate-50 px-4 py-4 sm:px-6 mt-auto border-t border-slate-200 flex justify-between items-center">
                 <span className="text-xs font-medium text-slate-500">By {agent.author}</span>
                 <Link href={`/agents/${agent.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-800">
                    View Details &rarr;
                 </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
           &copy; {new Date().getFullYear()} AI Agents Directory. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
