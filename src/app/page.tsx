import agentsData from '@/data/agents.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 p-8">
      <header className="max-w-7xl mx-auto mb-16 mt-8 text-center">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 tracking-tight">AI Agents Atlas</h1>
        <p className="text-2xl text-slate-600 max-w-3xl mx-auto">Discover a curated collection of fully working, ready-to-use, and trending AI agents for various use cases.</p>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {agentsData.map((agent) => (
            <div key={agent.id} className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col h-full group">
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">{agent.name}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-4">{agent.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                {agent.trending && (
                  <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-semibold rounded-full border border-rose-200 shadow-sm flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Trending
                  </span>
                )}
                {agent.readyToUse && (
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 shadow-sm flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ready
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-20 py-8 text-center text-slate-500 border-t border-slate-200">
        <p>© {new Date().getFullYear()} AI Agents Atlas. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
