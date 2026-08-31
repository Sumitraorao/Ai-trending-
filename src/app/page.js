import agentsData from '../data/agents.json';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-800">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">500+ AI Agents Directory</h1>
        <p className="text-xl text-gray-600">A curated collection of trending and ready-to-use AI agents.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {agentsData.map((agent) => (
          <div key={agent.id} className="bg-blue-50 border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">{agent.title}</h2>
            <p className="text-gray-700 flex-grow mb-4">{agent.description}</p>
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2 mb-2">
                {agent.framework}
              </span>
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2 mb-2">
                {agent.industry}
              </span>
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded mr-2 mb-2">
                {agent.difficulty}
              </span>
            </div>
            <div className="text-sm text-gray-500 mt-auto pt-4 border-t border-blue-200 flex justify-between">
              <span>By: {agent.author}</span>
              <span>Lang: {agent.language}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
