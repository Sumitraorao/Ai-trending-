"use client";

import { agents } from "@/data/agents";
import { Search, ExternalLink, Code2, Bot, Layers, Building2, Star } from "lucide-react";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFramework, setSelectedFramework] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const frameworks = ["All", ...new Set(agents.map(a => a.framework))].sort();
  const industries = ["All", ...new Set(agents.map(a => a.industry))].sort();

  const filteredAgents = useMemo(() => {
    return agents.filter(agent => {
      const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            "".includes(searchQuery.toLowerCase());
      const matchesFramework = selectedFramework === "All" || agent.framework === selectedFramework;
      const matchesIndustry = selectedIndustry === "All" || agent.industry === selectedIndustry;
      return matchesSearch && matchesFramework && matchesIndustry;
    });
  }, [searchQuery, selectedFramework, selectedIndustry, agents]);

  return (
    <div className="min-h-screen bg-white text-blue-800">
      {/* Header */}
      <header className="bg-white border-b border-blue-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-900 tracking-tight">AI Agents Pro</h1>
          </div>
          <div className="flex-1 max-w-2xl w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
              <input
                type="text"
                placeholder="Search for agents, frameworks, or use cases..."
                className="w-full pl-10 pr-4 py-2 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-blue-900 shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">
            500+ AI Agent Projects & Use Cases
          </h2>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto leading-relaxed">
            A curated collection of ready-to-use AI agent projects spanning every major framework and industry. Clone, run, and build in minutes.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 pb-6 border-b border-blue-100">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-blue-700 mb-2 flex items-center gap-1"><Layers className="w-4 h-4"/> Framework</label>
            <select
              className="w-full p-2.5 bg-white border border-blue-200 rounded-lg text-blue-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedFramework}
              onChange={(e) => setSelectedFramework(e.target.value)}
            >
              {frameworks.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-semibold text-blue-700 mb-2 flex items-center gap-1"><Building2 className="w-4 h-4"/> Industry</label>
            <select
              className="w-full p-2.5 bg-white border border-blue-200 rounded-lg text-blue-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
            >
              {industries.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex justify-between items-end">
          <h3 className="text-xl font-bold text-blue-900">
            {filteredAgents.length} {filteredAgents.length === 1 ? 'Agent' : 'Agents'} Found
          </h3>
        </div>

        {/* Grid */}
        {filteredAgents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAgents.map((agent, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                key={agent.id}
                className="bg-white border border-blue-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="p-6 flex-1 border-b border-blue-50 relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>

                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4 shadow-sm">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <div className="flex text-yellow-500">
                      <span className="text-xs font-medium text-blue-500 mr-1 mt-0.5">Difficulty</span>
                      {agent.difficulty}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-blue-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors">
                    {agent.name}
                  </h4>

                  <div className="space-y-3 mt-4">
                    <div className="flex items-center gap-2 text-sm text-blue-600">
                      <Layers className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-blue-800">Framework:</span>
                      <span className="bg-blue-100 px-2 py-0.5 rounded text-blue-800">{agent.framework}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-600">
                      <Bot className="w-4 h-4 text-purple-500" />
                      <span className="font-semibold text-blue-800">LLM:</span>
                      <span className="text-blue-700 truncate">{agent.llm}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-600">
                      <Building2 className="w-4 h-4 text-green-500" />
                      <span className="font-semibold text-blue-800">Industry:</span>
                      <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded border border-green-100">{agent.industry}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 p-4">
                  <a
                    href={`https://github.com/ashishpatel26/500-AI-Agents-Projects`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-white border border-blue-200 text-blue-800 font-medium rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors shadow-sm"
                  >
                    <span>View Implementation</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-blue-50 rounded-xl border border-blue-100">
            <Search className="w-12 h-12 text-blue-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">No agents found</h3>
            <p className="text-blue-500">Try adjusting your search or filters to find what you're looking for.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedFramework("All");
                setSelectedIndustry("All");
              }}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-blue-50 border-t border-blue-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-bold text-blue-500">AI Agents Pro</span>
          </div>
          <p className="text-blue-500 text-sm text-center md:text-left">
            Built using the comprehensive 500-AI-Agents-Projects repository.
          </p>
          <a
            href="https://github.com/ashishpatel26/500-AI-Agents-Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-600 font-medium transition-colors"
          >
            <Star className="w-4 h-4" />
            <span>Star the Original Repo</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
