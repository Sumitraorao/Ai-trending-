import agents from '../data/agents.json';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-50 text-gray-800">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">AI Agents Directory</h1>
        <p className="text-center mb-12 text-lg text-gray-600">Explore ready-to-use and trending AI agents</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div key={agent.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white flex flex-col h-full">
              <h2 className="text-xl font-semibold mb-2 text-blue-700 capitalize">{agent.title.replace(/-/g, ' ')}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{agent.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{agent.framework}</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{agent.industry}</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">{agent.difficulty}</span>
              </div>

              <div className="mt-6">
                <Link href={`/agent/${agent.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
