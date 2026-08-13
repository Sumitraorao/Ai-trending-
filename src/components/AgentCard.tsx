import React from 'react';

interface AgentCardProps {
  name: string;
  description: string;
  url: string;
  tags: string[];
}

export default function AgentCard({ name, description, url, tags }: AgentCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
        {name}
      </h5>
      <p className="font-normal text-gray-600 mb-4 line-clamp-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
