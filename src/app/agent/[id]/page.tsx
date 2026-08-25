import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft, Play, GitBranch, Code, Cpu, Layers } from 'lucide-react';

export default async function AgentDetail({ params }: { params: Promise<{ id: string }> }) {
  const dataPath = path.join(process.cwd(), 'src/data/agents.json');
  let agents = [];
  try {
    agents = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  } catch (error) {
    console.error("Could not load agents data", error);
  }
  const resolvedParams = await params;
  const agent = agents.find((a: { id: string }) => a.id === resolvedParams.id);

  if (!agent) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Agent Not Found</h1>
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 flex items-center justify-center">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Hub
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20 selection:bg-indigo-100 selection:text-indigo-900">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center text-slate-500 hover:text-indigo-600 transition-colors mr-6 group">
              <div className="p-2 rounded-full bg-slate-100 group-hover:bg-indigo-50 mr-2 transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </div>
              <span className="font-medium">Back</span>
            </Link>
            <div className="h-6 w-px bg-slate-200 mr-6"></div>
            <div className="flex items-center space-x-2">
              <Cpu className="h-5 w-5 text-indigo-500" />
              <span className="text-lg font-semibold text-slate-800">
                {agent.title.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-700 px-8 py-12 text-white">
            <div className="flex justify-between items-start">
              <div>
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4
                  ${agent.difficulty === 'beginner' ? 'bg-emerald-400/20 text-emerald-100' :
                    agent.difficulty === 'intermediate' ? 'bg-amber-400/20 text-amber-100' :
                    'bg-rose-400/20 text-rose-100'}`}>
                  {agent.difficulty}
                </span>
                <h1 className="text-4xl font-extrabold tracking-tight mb-4">
                  {agent.title.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </h1>
                <p className="text-xl text-indigo-100 max-w-3xl leading-relaxed">
                  {agent.description}
                </p>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                  <div className="flex flex-col gap-4">
                    <a href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.id}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-3 rounded-xl bg-white text-indigo-700 font-bold hover:bg-indigo-50 transition-colors">
                      <GitBranch className="h-5 w-5 mr-2" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-b border-slate-100">
            <div className="p-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mr-4">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Framework</p>
                <p className="text-lg font-bold text-slate-800 capitalize">{agent.framework || 'Custom'}</p>
              </div>
            </div>
            <div className="p-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mr-4">
                <Cpu className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">LLM Required</p>
                <p className="text-lg font-bold text-slate-800">{agent.llm}</p>
              </div>
            </div>
            <div className="p-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mr-4">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Language</p>
                <p className="text-lg font-bold text-slate-800 capitalize">{agent.language}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <Play className="h-6 w-6 mr-2 text-indigo-600" />
              Getting Started
            </h2>

            <div className="bg-slate-900 rounded-2xl p-6 shadow-inner font-mono text-sm overflow-x-auto relative group">
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors">
                  Copy Code
                </button>
              </div>
              <div className="text-slate-400 mb-2"># Clone the repository</div>
              <div className="text-emerald-400 mb-4">git clone https://github.com/ashishpatel26/500-AI-Agents-Projects.git</div>

              <div className="text-slate-400 mb-2"># Navigate to the agent directory</div>
              <div className="text-emerald-400 mb-4">cd 500-AI-Agents-Projects/agents/{agent.id}</div>

              <div className="text-slate-400 mb-2"># Install dependencies</div>
              <div className="text-emerald-400 mb-4">pip install -r {agent.requirements}</div>

              <div className="text-slate-400 mb-2"># Set up environment variables</div>
              <div className="text-emerald-400 mb-4">cp .env.example .env<br/><span className="text-slate-500"># Edit .env with your API keys</span></div>

              <div className="text-slate-400 mb-2"># Run the agent</div>
              <div className="text-emerald-400">python {agent.entrypoint}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
