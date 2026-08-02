import agents from '../../../data/agents.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return agents.map((agent: any) => ({
    id: agent.id,
  }));
}

export default async function AgentPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const agent = agents.find((a: any) => a.id === resolvedParams.id);

  if (!agent) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium flex items-center mr-4">
             &larr; Back to Directory
          </Link>
          <h1 className="text-2xl font-bold text-slate-800 truncate">{agent.title}</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-6 py-8 border-b border-slate-200 bg-blue-50">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">{agent.title}</h2>
            <p className="text-lg text-blue-800/80 leading-relaxed">{agent.description}</p>
          </div>

          <div className="px-6 py-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Agent Details</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <dt className="text-sm font-medium text-slate-500">Framework</dt>
                <dd className="mt-1 text-sm text-slate-900 capitalize font-semibold">{agent.framework}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-slate-500">Language</dt>
                <dd className="mt-1 text-sm text-slate-900 capitalize font-semibold">{agent.language}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-slate-500">Industry</dt>
                <dd className="mt-1 text-sm text-slate-900 capitalize font-semibold">{agent.industry}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-slate-500">Difficulty</dt>
                <dd className="mt-1 text-sm text-slate-900 capitalize font-semibold">{agent.difficulty}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-slate-500">Author</dt>
                <dd className="mt-1 text-sm text-slate-900 font-semibold">{agent.author}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-slate-500">LLM Used</dt>
                <dd className="mt-1 text-sm text-slate-900 font-semibold">{agent.llm}</dd>
              </div>
            </div>

            <div className="mt-8">
              <dt className="text-sm font-medium text-slate-500 mb-2">Tags</dt>
              <dd className="flex flex-wrap gap-2">
                {agent.tags && agent.tags.map((tag: string) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                    {tag}
                  </span>
                ))}
              </dd>
            </div>

            <div className="mt-10 bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="text-lg font-bold text-slate-800 mb-4">Technical Specs</h4>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <span className="font-semibold text-slate-700 min-w-[120px]">Entrypoint:</span>
                        <code className="text-sm bg-slate-200 text-slate-800 px-2 py-0.5 rounded">{agent.entrypoint}</code>
                    </li>
                    <li className="flex items-start">
                        <span className="font-semibold text-slate-700 min-w-[120px]">Requirements:</span>
                        <code className="text-sm bg-slate-200 text-slate-800 px-2 py-0.5 rounded">{agent.requirements}</code>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
