import AgentCard from "@/components/AgentCard";
import agentsData from "@/data/agents.json";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-4">
          Ready-to-use AI Agents
        </h1>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-600">
          Discover, clone, and integrate top trending AI agents from our curated directory. Fully functional and ready for your next project.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {agentsData.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>

      {agentsData.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No agents found. Run the extraction script.
        </div>
      )}
    </div>
  );
}
