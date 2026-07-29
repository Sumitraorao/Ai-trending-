import React from 'react';
import { ExternalLink, Tag, Briefcase, Activity } from 'lucide-react';

interface AgentCardProps {
  agent: {
    title: string;
    description: string;
    author: string;
    language: string;
    framework: string;
    tags: string[];
    industry: string;
    difficulty: string;
    folder: string;
  };
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full card-hover">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-800 capitalize truncate" title={agent.title.replace(/-/g, ' ')}>
            {agent.title.replace(/-/g, ' ')}
          </h3>
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 capitalize">
            {agent.difficulty}
          </span>
        </div>

        <p className="text-slate-600 mb-6 line-clamp-3 text-sm">
          {agent.description}
        </p>

        <div className="space-y-3 mt-auto">
          <div className="flex items-center text-sm text-slate-500">
            <Briefcase className="w-4 h-4 mr-2 text-slate-400" />
            <span className="capitalize">{agent.industry.replace(/-/g, ' ')}</span>
          </div>
          <div className="flex items-center text-sm text-slate-500">
            <Activity className="w-4 h-4 mr-2 text-slate-400" />
            <span className="capitalize">{agent.framework}</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50">
        <div className="flex flex-wrap gap-2 mb-4">
          {agent.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
          {agent.tags.length > 3 && (
            <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
              +{agent.tags.length - 3}
            </span>
          )}
        </div>
        <a
          href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.folder}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
        >
          View Source <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
