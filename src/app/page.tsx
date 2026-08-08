import agentsData from '@/data/agents.json';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Trending AI Agents
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated collection of ready-to-use AI agents cloned from the 500-AI-Agents-Projects repository.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentsData.map((agent) => (
            <Link
              href={`/agents/${agent.id}`}
              key={agent.id}
              className="block group h-full"
            >
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 p-6 h-full flex flex-col">
                <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {agent.title}
                </h2>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium border border-blue-100">
                    {agent.framework}
                  </span>
                  <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-md text-xs font-medium border border-purple-100">
                    {agent.llm}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3 mt-auto">
                  {agent.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
