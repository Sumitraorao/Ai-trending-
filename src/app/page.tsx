import agents from "../data/agents.json";
import { Bot } from "lucide-react";

interface Agent {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  difficulty?: string;
  framework?: string;
}

export default function Home() {
  return (
    <main className="flex-1 bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">500+ AI Agents Projects</h1>
          <p className="text-lg text-gray-600">A collection of trending and ready-to-use AI agents</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(agents as Agent[]).map((agent) => (
            <div key={agent.id} className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Bot className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 line-clamp-1" title={agent.title}>
                    {agent.title}
                  </h2>
                </div>
              </div>

              <p className="text-gray-600 mb-6 flex-1 line-clamp-3" title={agent.description}>
                {agent.description}
              </p>

              <div className="space-y-4">
                {agent.tags && agent.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {agent.tags.slice(0, 3).map((tag: string) => (
                      <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                    {agent.tags.length > 3 && (
                      <span className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-full">
                        +{agent.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Difficulty</span>
                    <span className={`text-sm font-medium ${
                      agent.difficulty === 'beginner' ? 'text-green-600' :
                      agent.difficulty === 'intermediate' ? 'text-orange-600' :
                      'text-red-600'
                    }`}>
                      {agent.difficulty ? agent.difficulty.charAt(0).toUpperCase() + agent.difficulty.slice(1) : 'Unknown'}
                    </span>
                  </div>

                  {agent.framework && (
                    <div className="flex flex-col gap-1 items-end">
                      <span className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Framework</span>
                      <span className="text-sm font-medium text-gray-900">{agent.framework}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
