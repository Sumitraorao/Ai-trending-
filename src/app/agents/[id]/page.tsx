import agents from "../../../data/agents.json";
import Link from "next/link";
import { notFound } from "next/navigation";

type Agent = {
  id: string;
  title: string;
  description: string;
  framework: string;
  language: string;
  llm: string;
  difficulty: string;
  industry: string;
  tags?: string[];
  entrypoint: string;
  requirements: string;
};

export default function AgentPage({ params }: { params: { id: string } }) {
  const agent = agents.find((a: Agent) => a.id === params.id) as Agent | undefined;

  if (!agent) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 items-center bg-gray-50 font-sans min-h-screen">
      <header className="w-full bg-white shadow py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-900">{agent.title}</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            &larr; Back to Directory
          </Link>
        </div>
      </header>
      <main className="flex flex-1 w-full max-w-4xl flex-col py-12 px-4 sm:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">About this Agent</h2>
          <p className="text-blue-700 mb-8">{agent.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">Details</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-blue-600">Framework</span>
                  <span className="font-medium text-blue-900">{agent.framework}</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-blue-600">Language</span>
                  <span className="font-medium text-blue-900">{agent.language}</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-blue-600">LLM</span>
                  <span className="font-medium text-blue-900">{agent.llm}</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-blue-600">Difficulty</span>
                  <span className="font-medium text-blue-900 capitalize">{agent.difficulty}</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="text-blue-600">Industry</span>
                  <span className="font-medium text-blue-900 capitalize">{agent.industry}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {agent.tags?.map((tag: string) => (
                  <span key={tag} className="bg-gray-100 text-blue-700 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">Files</h3>
              <div className="bg-gray-50 p-4 rounded-md font-mono text-sm text-blue-800">
                <div>&gt; Entrypoint: {agent.entrypoint}</div>
                <div>&gt; Requirements: {agent.requirements}</div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Run this Agent</h3>
            <div className="bg-blue-800 rounded-md p-4 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm">
                <code>
{`# 1. Navigate to the agent directory
cd ai-agents-repo/agents/${agent.id}

# 2. Install dependencies
pip install -r ${agent.requirements}

# 3. Set up environment variables
cp .env.example .env
# (Edit .env with your API keys)

# 4. Run the agent
python ${agent.entrypoint}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
