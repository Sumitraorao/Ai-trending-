import agentsData from '@/data/agents.json';
import Link from 'next/link';
import { Bot, ChevronRight, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">AI Agents Explorer</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Ready to Use Agents</h2>
          <p className="text-gray-600">Discover and explore ready-to-deploy AI agents from the community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentsData.map((agent) => (
            <div key={agent.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{agent.name}</h3>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {agent.description || "No description available."}
              </p>

              <div className="flex items-center gap-4 mb-4">
                {agent.ready_to_use && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Ready
                  </span>
                )}
                {agent.trending && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Trending
                  </span>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  View Details <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
