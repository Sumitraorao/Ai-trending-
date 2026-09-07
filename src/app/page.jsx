import agentsData from '../data/agents.json';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-blue-50 text-blue-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
          Ready-to-Use AI Agents Directory
        </h1>
        <p className="text-center mb-12 text-blue-700 text-lg">
          Explore trending AI agents sourced from the 500-AI-Agents-Projects repository.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentsData.map((agent, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-100 flex flex-col"
            >
              <div className="flex-grow">
                <h2 className="text-xl font-semibold mb-2 text-blue-900">{agent.name}</h2>
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
                    {agent.industry}
                  </span>
                </div>
                <p className="text-blue-800 text-sm mb-6">{agent.description}</p>
              </div>

              {agent.link && (
                <div className="mt-auto pt-4 border-t border-blue-50">
                  <a
                    href={agent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    View Agent
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
