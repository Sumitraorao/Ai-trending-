import agents from "../data/agents.json";
import Link from "next/link";

type Agent = {
  id: string;
  title: string;
  description: string;
  framework: string;
  difficulty: string;
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gray-50 font-sans">
      <header className="w-full bg-white shadow py-6 px-4 md:px-8">
        <h1 className="text-3xl font-bold text-blue-900 text-center">AI Agents Directory</h1>
      </header>
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center py-12 px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {agents.map((agent: Agent) => (
            <div key={agent.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">{agent.title}</h2>
              <p className="text-blue-700 text-sm mb-4 line-clamp-3">{agent.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                  {agent.framework}
                </span>
                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                  {agent.difficulty}
                </span>
              </div>
              <div className="mt-auto">
                <Link
                  href={`/agents/${agent.id}`}
                  className="text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
