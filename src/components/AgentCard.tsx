import React from 'react';

interface AgentProps {
  agent: {
    name: string;
    description: string;
    url: string;
    category: string;
    tags: string[];
  };
}

export default function AgentCard({ agent }: AgentProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide">
          {agent.category || "General"}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{agent.name}</h3>
      <p className="text-gray-600 mb-4 flex-grow text-sm line-clamp-3">
        {agent.description}
      </p>
      <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
        <div className="flex gap-1 flex-wrap">
          {agent.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={agent.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
        >
          View Agent
        </a>
      </div>
    </div>
  );
}
