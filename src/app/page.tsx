import agents from "../data/agents.json";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight sm:text-5xl">
          AI Agents Projects
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Explore ready-to-use AI agents from the 500-AI-Agents-Projects collection.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent: any) => (
          <div key={agent.id} className="bg-blue-50 overflow-hidden shadow rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-blue-900">
                {agent.name}
              </h3>
              <div className="mt-2 text-sm text-gray-700 h-24 overflow-hidden text-ellipsis">
                <p>{agent.description || "No description available."}</p>
              </div>
              <div className="mt-4">
                <Link href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.id}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  View Agent
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
