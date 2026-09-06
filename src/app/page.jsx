import agentsData from '../data/agents.json';

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        Trending & Ready-to-Use AI Agents
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agentsData.map((agent, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
          >
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                {agent.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {agent.name}
            </h3>
            <p className="text-gray-600 mb-4 flex-grow">
              {agent.description}
            </p>
            <a
              href={agent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
      {agentsData.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No agents found. Make sure to run the parsing script first!
        </div>
      )}
    </div>
  );
}
