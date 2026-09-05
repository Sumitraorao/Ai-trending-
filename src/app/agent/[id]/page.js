import agents from '../../../data/agents.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return agents.map((agent) => ({
    id: agent.id,
  }));
}

export default function AgentPage({ params }) {
  const agent = agents.find(a => a.id === params.id);

  if (!agent) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-12 lg:p-24 bg-gray-50 text-gray-800">
      <div className="z-10 max-w-4xl w-full">
        <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
          &larr; Back to Directory
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h1 className="text-4xl font-bold mb-4 text-blue-700 capitalize">{agent.title.replace(/-/g, ' ')}</h1>
          <p className="text-xl text-gray-600 mb-8">{agent.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700 border-b border-gray-200 pb-2">Details</h3>
              <ul className="space-y-2">
                <li><span className="font-medium text-gray-700">Author:</span> {agent.author}</li>
                <li><span className="font-medium text-gray-700">Language:</span> <span className="capitalize">{agent.language}</span></li>
                <li><span className="font-medium text-gray-700">Framework:</span> <span className="capitalize">{agent.framework}</span></li>
                <li><span className="font-medium text-gray-700">Industry:</span> <span className="capitalize">{agent.industry.replace(/-/g, ' ')}</span></li>
                <li><span className="font-medium text-gray-700">Difficulty:</span> <span className="capitalize">{agent.difficulty}</span></li>
                <li><span className="font-medium text-gray-700">LLM:</span> {agent.llm}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700 border-b border-gray-200 pb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {agent.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full border border-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-700 border-b border-gray-200 pb-2">Setup Instructions</h3>
            <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-800 overflow-x-auto border border-gray-300">
              <pre>
{`# Clone the repository
git clone https://github.com/ashishpatel26/500-AI-Agents-Projects.git
cd 500-AI-Agents-Projects

# Navigate to the agent directory
cd agents/${agent.id}

# Install requirements
pip install -r ${agent.requirements}

# Set up environment variables
cp .env.example .env
# Edit .env to add your API keys

# Run the agent
python ${agent.entrypoint}`}
              </pre>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={`https://github.com/ashishpatel26/500-AI-Agents-Projects/tree/main/agents/${agent.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
