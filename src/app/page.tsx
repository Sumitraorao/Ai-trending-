import agentsData from '../data/agents.json'

export default function Home() {
  return (
    <div>
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Ready-to-Use AI Agents</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse our curated collection of trending AI agents. Ready to be deployed and used for your projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agentsData.map((agent: any) => (
          <div key={agent.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{agent.name}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                {agent.description || "No description available."}
              </p>

              {agent.tags && agent.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.tags.slice(0, 3).map((tag: string) => (
                    <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {tag}
                    </span>
                  ))}
                  {agent.tags.length > 3 && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      +{agent.tags.length - 3} more
                    </span>
                  )}
                </div>
              )}

              <div className="mt-4 flex items-center justify-between">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${agent.status === 'ready' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {agent.status}
                </span>
                <a href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.id}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Source &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
