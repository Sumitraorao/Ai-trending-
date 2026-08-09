import agents from '../../../data/agents.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Code, Cpu, Activity, Terminal } from 'lucide-react';
import fs from 'fs/promises';
import path from 'path';

export async function generateStaticParams() {
  return agents.map((agent) => ({
    id: agent.id,
  }));
}

export default async function AgentPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const agent = agents.find(a => a.id === resolvedParams.id);

  if (!agent) {
    notFound();
  }

  let codeContent = '';
  try {
    const entrypointPath = path.join(process.cwd(), /*turbopackIgnore: true*/ agent.path, agent.entrypoint);
    codeContent = await fs.readFile(entrypointPath, 'utf-8');
  } catch (error) {
    codeContent = '// Could not load entrypoint file';
  }

  let readmeContent = '';
  try {
    const readmePath = path.join(process.cwd(), /*turbopackIgnore: true*/ agent.path, 'README.md');
    readmeContent = await fs.readFile(readmePath, 'utf-8');
  } catch (error) {
    readmeContent = 'No README found for this agent.';
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mr-4 font-medium">
            <ArrowLeft className="h-5 w-5 mr-1" />
            Back to Agents
          </Link>
          <h1 className="text-xl font-bold text-slate-800 ml-4 border-l border-slate-200 pl-4">{agent.title}</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-4 capitalize">{agent.title.replace(/-/g, ' ')}</h2>
          <p className="text-lg text-slate-600 mb-6 max-w-4xl">{agent.description}</p>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
              <Cpu className="h-4 w-4 mr-2 text-slate-500" />
              <span className="font-medium text-slate-700">Framework:</span>
              <span className="ml-2 text-blue-600 font-semibold">{agent.framework}</span>
            </div>
            <div className="flex items-center bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
              <Terminal className="h-4 w-4 mr-2 text-slate-500" />
              <span className="font-medium text-slate-700">Language:</span>
              <span className="ml-2 text-blue-600 font-semibold capitalize">{agent.language}</span>
            </div>
            <div className="flex items-center bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
              <Activity className="h-4 w-4 mr-2 text-slate-500" />
              <span className="font-medium text-slate-700">LLM:</span>
              <span className="ml-2 text-blue-600 font-semibold">{agent.llm}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[600px]">
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <h3 className="font-semibold text-slate-700 flex items-center">
                <Code className="h-4 w-4 mr-2 text-blue-600" />
                {agent.entrypoint}
              </h3>
            </div>
            <div className="p-4 overflow-auto bg-slate-50 flex-grow font-mono text-sm text-slate-700">
              <pre><code>{codeContent}</code></pre>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[600px]">
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <h3 className="font-semibold text-slate-700 flex items-center">
                <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                Documentation
              </h3>
            </div>
            <div className="p-6 overflow-auto prose prose-slate max-w-none text-slate-700">
              <pre className="whitespace-pre-wrap font-sans bg-transparent text-slate-700 text-sm leading-relaxed">{readmeContent}</pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
