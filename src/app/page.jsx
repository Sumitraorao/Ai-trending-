import agentsData from '../data/agents.json';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Explore Trending AI Agents
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse a curated collection of ready-to-use AI agent projects from the popular 500-AI-Agents-Projects repository.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agentsData.map((agent) => (
          <Link href={`/agents/${agent.id}`} key={agent.id} className="group h-full">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200 h-full flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
                  Agent
                </span>
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {agent.name}
                </h2>
              </div>
              <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                {agent.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-blue-600 text-sm font-medium group-hover:underline">View Details &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {agentsData.length === 0 && (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
          <p className="text-gray-500 text-lg">No agents found. Make sure data is parsed successfully.</p>
        </div>
      )}
    </div>
  );
}
