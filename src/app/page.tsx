import React from "react";
import Navbar from "@/components/Navbar";
import AgentCard from "@/components/AgentCard";
import agentsData from "@/data/agents.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-screen-xl mx-auto px-4 py-8 w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
            Trending AI Agents
          </h1>
          <p className="text-gray-600">
            A curated list of ready-to-use AI agents for your next project.
          </p>
        </div>

        {agentsData.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No agents found. Make sure to run the parsing script!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentsData.map((agent, index) => (
              <AgentCard
                key={index}
                name={agent.name}
                description={agent.description}
                url={agent.url}
                tags={agent.tags}
              />
            ))}
          </div>
        )}
      </main>
      <footer className="bg-white border-t border-gray-200 py-6 mt-8">
        <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600">
          Built with Next.js & Tailwind CSS
        </div>
      </footer>
    </div>
  );
}
