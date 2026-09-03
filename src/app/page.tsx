import agents from "../data/agents.json";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">500+ AI Agents Projects</h1>
        <p className="text-xl mb-12 text-gray-700">
          A curated collection of trending and ready-to-use AI agents.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-blue-50"
            >
              <h2 className="text-2xl font-semibold mb-3 text-blue-800">{agent.name}</h2>
              <p className="text-gray-700 mb-4 h-20 overflow-hidden line-clamp-3">
                {agent.description}
              </p>
              <Link
                href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                View on GitHub
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
