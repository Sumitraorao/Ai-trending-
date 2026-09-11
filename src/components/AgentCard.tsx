import React from 'react';
import { Bot } from 'lucide-react';

interface AgentCardProps {
  agent: {
    id: string;
    name: string;
    description: string;
    path: string;
  };
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="p-5 flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <Bot size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-800">{agent.name}</h3>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {agent.description}
        </p>
      </div>
      <div className="px-5 py-4 bg-slate-50 border-t border-slate-100 mt-auto">
        <a
          href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          View Agent
        </a>
      </div>
    </div>
  );
};
