import agentsData from '@/data/agents.json';
import Link from 'next/link';
import { Terminal, Code, Cpu, Database, FileText, Search, Settings, Shield, User, Zap } from 'lucide-react';

const iconMap: Record<string, any> = {
  'Search': Search,
  'Code': Code,
  'FileText': FileText,
  'Database': Database,
  'Cpu': Cpu,
  'Settings': Settings,
  'Shield': Shield,
  'User': User,
  'Zap': Zap,
};

export default function Home() {
  const { agents } = agentsData;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm sticky top-0 z-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Terminal className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">AgentHub</h1>
          </div>
          <div className="hidden sm:flex items-center space-x-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <a href="https://github.com/ashishpatel26/500-AI-Agents-Projects" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              Repository
            </a>
            <span className="bg-blue-50 text-blue-700 py-1 px-3 rounded-full border border-blue-100">
              {agents.length} Ready Agents
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Discover Ready-to-Use <span className="text-blue-600">AI Agents</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of fully functional, specialized AI agents designed to automate tasks, analyze data, and accelerate your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent: any) => {
            // Assign a random icon if we don't have a specific map, for visual variety
            const icons = [Search, Code, FileText, Database, Cpu, Settings, Shield, User, Zap];
            const IconComponent = icons[agent.id.length % icons.length];

            return (
              <div
                key={agent.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-semibold bg-green-50 text-green-700 py-1 px-2.5 rounded-full border border-green-200">
                    Ready
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {agent.name}
                </h3>

                <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed">
                  {agent.description}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">ID: {agent.id}</span>
                  <a
                    href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 group-hover:translate-x-1 transition-transform"
                  >
                    View Source <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>AgentHub - Curated AI Agents. Built from ashishpatel26/500-AI-Agents-Projects.</p>
        </div>
      </footer>
    </div>
  );
}
