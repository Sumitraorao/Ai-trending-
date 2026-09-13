import agentsData from "../data/agents.json";
import { Bot, Code2, Database, Briefcase, MessagesSquare, BarChart, Settings, Search } from "lucide-react";
import Link from 'next/link';

// Helper to get icon by industry
const getIndustryIcon = (industry) => {
  switch (industry?.toLowerCase()) {
    case 'software dev':
    case 'devops':
      return <Code2 className="w-5 h-5" />;
    case 'data':
    case 'analytics':
      return <Database className="w-5 h-5" />;
    case 'hr':
    case 'business':
    case 'finance':
      return <Briefcase className="w-5 h-5" />;
    case 'communication':
    case 'customer service':
    case 'media':
      return <MessagesSquare className="w-5 h-5" />;
    default:
      return <Bot className="w-5 h-5" />;
  }
};

export default function Home() {
  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-800">AI Agents Hub</h1>
            </div>
            <div className="hidden sm:block text-sm text-slate-500 font-medium">
              500+ Ready-to-use AI Agents
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-4">
            Discover & Deploy AI Agents
          </h2>
          <p className="max-w-xl mx-auto text-xl text-slate-500">
            A curated collection of production-ready AI agents across multiple frameworks and industries.
          </p>
        </div>

        {/* Grid of Agents */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {agentsData.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              <div className="p-5 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    {getIndustryIcon(agent.industry)}
                  </div>
                  <div className="flex items-center space-x-1 text-sm font-medium text-amber-500">
                    <span className="bg-amber-50 px-2 py-1 rounded-full text-xs border border-amber-200">{agent.difficulty}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                  {agent.title}
                </h3>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Framework</span>
                    <span className="font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded">{agent.framework}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">LLM</span>
                    <span className="font-medium text-slate-700">{agent.llm}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Industry</span>
                    <span className="font-medium text-slate-700">{agent.industry}</span>
                  </div>
                </div>
              </div>

              <div className="px-5 py-4 bg-slate-50 border-t border-slate-100 mt-auto">
                <a
                  href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  View Code & Use
                </a>
              </div>
            </div>
          ))}
        </div>

        {agentsData.length === 0 && (
          <div className="text-center py-20">
            <Bot className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900">No agents found</h3>
            <p className="mt-1 text-slate-500">Run the setup script to parse agents from the repository.</p>
          </div>
        )}
      </main>
    </div>
  );
}
