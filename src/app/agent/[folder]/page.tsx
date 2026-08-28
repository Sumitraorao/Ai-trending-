import agentsData from '@/data/agents.json';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Code, Layers, FileText } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return agentsData.map((agent: any) => ({
    folder: agent.folder,
  }));
}

export default function AgentPage({ params }: { params: { folder: string } }) {
  const agent = agentsData.find((a: any) => a.folder === params.folder);

  if (!agent) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 bg-blue-50 text-slate-800">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Agents
        </Link>

        <div className="bg-white rounded-2xl shadow-md p-8 border border-blue-100">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">{agent.title.replace(/-/g, ' ').toUpperCase()}</h1>
          <p className="text-xl text-slate-600 mb-8 pb-8 border-b border-blue-100">{agent.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                <Layers className="w-5 h-5 mr-2" />
                Technical Details
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium text-slate-700 w-32">Framework:</span>
                  <span className="text-slate-600 capitalize">{agent.framework}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-slate-700 w-32">Language:</span>
                  <span className="text-slate-600 capitalize">{agent.language}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-slate-700 w-32">LLM:</span>
                  <span className="text-slate-600 capitalize">{agent.llm}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-slate-700 w-32">Industry:</span>
                  <span className="text-slate-600 capitalize">{agent.industry}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-slate-700 w-32">Difficulty:</span>
                  <span className="text-slate-600 capitalize">{agent.difficulty}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Files & Entrypoint
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium text-slate-700 w-32">Entrypoint:</span>
                  <span className="text-slate-600 font-mono text-sm bg-slate-100 px-2 py-1 rounded">{agent.entrypoint}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-slate-700 w-32">Requirements:</span>
                  <span className="text-slate-600 font-mono text-sm bg-slate-100 px-2 py-1 rounded">{agent.requirements}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-slate-700 w-32">Path:</span>
                  <span className="text-slate-600 font-mono text-sm bg-slate-100 px-2 py-1 rounded truncate">agents/{agent.folder}</span>
                </li>
              </ul>
            </div>
          </div>

          {agent.tags && agent.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-blue-100">
              <h3 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {agent.tags.map((tag: string, index: number) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
