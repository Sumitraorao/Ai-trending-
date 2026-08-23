"use client";

import { useState } from "react";
import agentsData from "../src/data/agents.json";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const allTags = Array.from(
    new Set(agentsData.flatMap((agent) => agent.tags || []))
  ).sort();

  const filteredAgents = agentsData.filter((agent) => {
    const matchesSearch =
      agent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "all" || (agent.tags && agent.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-4">
          Ready-to-Use AI Agents
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-slate-600 sm:mt-4">
          Discover, explore, and integrate trending AI agent projects for various use cases and industries.
        </p>
      </div>

      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div className="w-full sm:w-1/2">
          <label htmlFor="search" className="sr-only">
            Search agents
          </label>
          <input
            type="text"
            id="search"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            placeholder="Search by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-auto">
          <label htmlFor="tag-filter" className="sr-only">
            Filter by tag
          </label>
          <select
            id="tag-filter"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none cursor-pointer"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            <option value="all">All Tags</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredAgents.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAgents.map((agent) => (
            <div
              key={agent.title}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md"
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-slate-900">
                    {agent.title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </h2>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                    {agent.framework}
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  {agent.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {agent.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {agent.tags && agent.tags.length > 3 && (
                      <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                        +{agent.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4 mt-2">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      {agent.industry}
                    </span>
                    <span className="flex items-center capitalize">
                      <svg className="w-4 h-4 mr-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      {agent.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
                <a
                  href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                >
                  View Code & Use Agent
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-slate-200">
          <h3 className="mt-2 text-lg font-semibold text-slate-900">No agents found</h3>
          <p className="mt-1 text-slate-500">We couldn't find any agents matching your current search criteria.</p>
          <button
            onClick={() => { setSearchTerm(""); setSelectedTag("all"); }}
            className="mt-6 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Clear filters
          </button>
        </div>
      )}
    </main>
  );
}
