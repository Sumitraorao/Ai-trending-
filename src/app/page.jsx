import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

export default async function Home() {
  const dataPath = path.join(process.cwd(), 'src/data/agents.json');
  const data = await fs.readFile(dataPath, 'utf-8');
  const agents = JSON.parse(data);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
            AI Agents Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of ready-to-use and trending AI agents. Explore the tools and their capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <Link
              key={agent.id}
              href={`/agents/${agent.id}`}
              className="block group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-blue-800 group-hover:text-blue-600 transition-colors">
                      {agent.name}
                    </h2>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Ready
                    </span>
                  </div>
                  <p className="text-gray-600 line-clamp-3">
                    {agent.description}
                  </p>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 mt-auto">
                  <span className="text-blue-600 text-sm font-medium group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
