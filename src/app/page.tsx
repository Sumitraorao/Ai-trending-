import agents from "../data/agents.json";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight sm:text-5xl">
            Trending AI Agents
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            A collection of ready-to-use AI agents for various use cases, powered by modern frameworks.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white overflow-hidden shadow-sm rounded-xl border border-slate-200 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="px-6 py-6 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-800 truncate">
                    {agent.title}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {agent.framework || "Unknown"}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-2 line-clamp-3">
                  {agent.description || "No description provided."}
                </p>
              </div>
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 mt-auto">
                <div className="text-sm">
                  <a
                    href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    View Source &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
