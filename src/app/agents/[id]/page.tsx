import agentsData from '@/data/agents.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return agentsData.map((agent) => ({
    id: agent.id,
  }));
}

export default async function AgentPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const agent = agentsData.find((a) => a.id === resolvedParams.id);

  if (!agent) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
          &larr; Back to all agents
        </Link>
        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{agent.title}</h1>

          <div className="flex gap-4 mb-8">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {agent.framework}
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              {agent.llm}
            </span>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Description</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {agent.description}
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Source Path</h2>
            <code className="bg-gray-100 px-4 py-2 rounded-md text-gray-800 block mb-8 border border-gray-200">
              {agent.path}
            </code>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
              <p className="text-yellow-800 font-medium">
                Note: This is a cloned agent ready to use. To run it, navigate to its directory in the repository and follow its README instructions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
