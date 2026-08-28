import agentsData from '@/data/agents.json';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-blue-50 text-slate-800">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">500+ AI Agents Showcase</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explore a curated collection of ready-to-use AI agent projects. Click on any agent to view more details.
        </p>
      </header>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentsData.map((agent: any, index: number) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border border-blue-100 flex flex-col h-full">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">{agent.title.replace(/-/g, ' ').toUpperCase()}</h2>
              <p className="text-slate-600 mb-4 flex-grow">{agent.description}</p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {agent.framework || 'Framework'}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {agent.industry || 'Industry'}
                  </span>
                </div>

                <Link href={`/agent/${agent.folder}`} className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
