import agentsData from "../data/agents.json";
import { ExternalLink, Star, Code, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-blue-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 text-blue-700 p-2 rounded-lg">
              <Star className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold text-blue-900">AI Agents Hub</h1>
          </div>
          <nav>
            <a
              href="https://github.com/ashishpatel26/500-AI-Agents-Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 transition-colors"
            >
              GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-950 mb-6 leading-tight">
            Discover <span className="text-blue-600">Ready-to-Use</span> AI Agents
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Explore a curated collection of production-ready AI agent projects, use cases, and implementations spanning various frameworks and industries.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentsData.map((agent, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                    {agent.framework || 'Agent'}
                  </span>
                  {agent.difficulty && (
                    <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                      {agent.difficulty}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {agent.title?.replace(/-/g, ' ')}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {agent.description}
                </p>

                {agent.tags && agent.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {agent.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-xs text-slate-500 bg-slate-50 border border-slate-200 px-2 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                    {agent.tags.length > 3 && (
                      <span className="text-xs text-slate-400 px-1 py-1">
                        +{agent.tags.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="border-t border-slate-100 p-4 bg-slate-50/50 flex justify-between items-center mt-auto">
                <div className="flex items-center text-slate-500 text-xs font-medium">
                   <Code className="w-4 h-4 mr-1 text-slate-400" />
                   {agent.language || 'Python'}
                </div>
                <a
                  href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.folder}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Code <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {agentsData.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No agents found in data.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-500">
          <p>© {new Date().getFullYear()} AI Agents Hub. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
