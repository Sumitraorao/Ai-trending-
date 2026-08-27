interface AgentProps {
  agent: {
    id: string;
    name: string;
    industry: string;
    description: string;
    url: string;
  };
}

export default function AgentCard({ agent }: AgentProps) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{agent.name}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ml-2 whitespace-nowrap">
            {agent.industry}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-6 flex-grow">{agent.description}</p>
        <div className="mt-auto">
          <a
            href={agent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Use Agent
          </a>
        </div>
      </div>
    </div>
  );
}
