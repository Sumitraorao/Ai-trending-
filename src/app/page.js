import agentsData from '@/data/agents.json';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">500+ AI Agents Projects</h1>
        <p className="text-xl mb-12 text-gray-700">Explore our curated collection of ready-to-use AI agents.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentsData.map((agent) => (
            <div key={agent.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-blue-50">
              <h2 className="text-2xl font-semibold mb-3 text-blue-800">{agent.name}</h2>
              <p className="text-gray-600 mb-4">{agent.description}</p>
              <a
                href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/${agent.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
