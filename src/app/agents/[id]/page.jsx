import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

export default async function AgentPage({ params }) {
  const { id } = await params;

  const dataPath = path.join(process.cwd(), 'src/data/agents.json');
  const data = await fs.readFile(dataPath, 'utf-8');
  const agents = JSON.parse(data);
  const agent = agents.find(a => a.id === id);

  if (!agent) {
    return <div className="p-8 text-center bg-gray-100 text-gray-800">Agent not found</div>;
  }

  let readmeContent = 'No README available.';
  try {
    const readmePath = path.join(process.cwd(), agent.path, 'README.md');
    readmeContent = await fs.readFile(readmePath, 'utf-8');
  } catch (e) {
    // Ignore error if README is missing
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">{agent.name}</h1>
      <p className="text-lg mb-8 text-gray-700">{agent.description}</p>

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">README</h2>
        <pre className="whitespace-pre-wrap font-sans text-gray-800 bg-white p-4 rounded border border-gray-200">
          {readmeContent}
        </pre>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">
          ← Back to Agents List
        </Link>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const dataPath = path.join(process.cwd(), 'src/data/agents.json');
  const data = await fs.readFile(dataPath, 'utf-8');
  const agents = JSON.parse(data);

  return agents.map((agent) => ({
    id: agent.id,
  }));
}
