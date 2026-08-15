import agentsData from "../data/agents.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8">
      <header className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">500+ AI Agents Explorer</h1>
        <p className="text-lg text-gray-600">Discover ready-to-use and trending AI agents for your next project.</p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agentsData.map((agent: any) => (
          <div key={agent.id} className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-900">{agent.title}</h2>
              <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full whitespace-nowrap">
                {agent.framework}
              </span>
            </div>

            <p className="text-gray-600 mb-6 flex-grow">{agent.description}</p>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {agent.tags?.slice(0, 3).map((tag: string) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-sm text-gray-500">
                <span>By: {agent.author}</span>
                <span className="capitalize text-emerald-600 font-medium">{agent.difficulty}</span>
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="max-w-6xl mx-auto mt-16 text-center text-gray-500 text-sm pb-8">
        <p>Built with Next.js & Tailwind CSS. Using strictly light theme.</p>
      </footer>
    </div>
  );
}
