import agentsData from '@/data/agents.json';

export default function Home() {
  const readyAgents = agentsData.filter(agent => agent.readyToUse);
  const trendingAgents = agentsData.filter(agent => agent.trending);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center text-blue-600">
            AI Agents Directory
          </h1>
          <p className="mt-2 text-center text-gray-600">
            A curated list of ready-to-use and trending AI agents.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Trending Agents Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-orange-500 mr-2">🔥</span> Trending AI Agents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingAgents.map((agent) => (
              <AgentCard key={`trending-${agent.id}`} agent={agent} />
            ))}
          </div>
        </section>

        {/* Ready to Use Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-green-500 mr-2">🚀</span> Ready-to-Use Agents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readyAgents.map((agent) => (
              <AgentCard key={`ready-${agent.id}`} agent={agent} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

function AgentCard({ agent }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{agent.name}</h3>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{agent.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {agent.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <a
          href={agent.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
        >
          View Source
        </a>
      </div>
    </div>
  );
}
