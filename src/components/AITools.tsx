import { Bot, Sparkles, Zap, Brain } from 'lucide-react';

interface AIToolsProps {
  darkMode: boolean;
}

const AITools = ({ darkMode }: AIToolsProps) => {
  const aiCategories = [
    {
      icon: <Brain size={32} />,
      title: 'AI in QA & Productivity',
      tools: [
        {
          name: 'ROVO AI',
          use: 'Integrated within JIRA for automated issue summarization and workflow optimization',
        },
        {
          name: 'ChatGPT',
          use: 'Test case generation, bug analysis, and documentation',
        },
        {
          name: 'Humanize AI',
          use: 'Improving test documentation and communication clarity',
        },
        {
          name: 'Bolt AI',
          use: 'Rapid prototyping and testing scenario generation',
        },
      ],
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Creative & Content AI',
      tools: [
        {
          name: 'Fliki AI',
          use: 'Creating test documentation videos and presentations',
        },
        {
          name: 'Krea AI',
          use: 'Visual testing assets and mockup generation',
        },
        {
          name: 'Suno AI',
          use: 'Audio testing and multimedia validation',
        },
      ],
    },
    {
      icon: <Zap size={32} />,
      title: 'Development AI Tools',
      tools: [
        {
          name: 'Replit',
          use: 'Quick code testing and automation script development',
        },
        {
          name: 'Commet Browser',
          use: 'AI-powered browsing for testing research',
        },
        {
          name: 'Humanloop',
          use: 'AI model testing and validation workflows',
        },
      ],
    },
    {
      icon: <Bot size={32} />,
      title: 'Browser Extensions',
      tools: [
        {
          name: 'AIPRM',
          use: 'Prompt engineering for test scenario creation',
        },
        {
          name: 'Merlin AI',
          use: 'Quick research and technical documentation',
        },
        {
          name: 'Monica AI',
          use: 'AI assistant for productivity and testing',
        },
        {
          name: 'Compose AI',
          use: 'Fast test documentation and report writing',
        },
      ],
    },
  ];

  return (
    <section id="ai-tools" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
          }`}
        >
          AI-Powered <span className="text-[#38bdf8]">Testing</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#38bdf8] to-[#1e3a8a] mx-auto mb-6"></div>

        <p
          className={`text-center text-lg mb-12 max-w-3xl mx-auto ${
            darkMode ? 'text-[#cbd5e1]' : 'text-slate-600'
          }`}
        >
          Leveraging cutting-edge AI tools to enhance test coverage, automation
          efficiency, and reporting accuracy in modern QA workflows.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {aiCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl backdrop-blur-sm ${
                darkMode
                  ? 'bg-white/5 border border-[#38bdf8]/20'
                  : 'bg-white/80 border border-[#1e3a8a]/20'
              } shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl ${
                    darkMode
                      ? 'bg-[#38bdf8]/20 text-[#38bdf8]'
                      : 'bg-[#1e3a8a]/20 text-[#1e3a8a]'
                  }`}
                >
                  {category.icon}
                </div>
                <h3
                  className={`text-2xl font-bold ${
                    darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
                  }`}
                >
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className={`p-4 rounded-lg ${
                      darkMode
                        ? 'bg-white/5 border border-[#38bdf8]/10'
                        : 'bg-white/60 border border-[#1e3a8a]/10'
                    } hover:scale-105 transition-all duration-300`}
                  >
                    <h4
                      className={`font-semibold mb-1 ${
                        darkMode ? 'text-[#38bdf8]' : 'text-[#1e3a8a]'
                      }`}
                    >
                      {tool.name}
                    </h4>
                    <p
                      className={`text-sm ${
                        darkMode ? 'text-[#cbd5e1]' : 'text-slate-600'
                      }`}
                    >
                      {tool.use}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 p-8 rounded-2xl backdrop-blur-sm ${
            darkMode
              ? 'bg-gradient-to-r from-[#38bdf8]/10 to-[#1e3a8a]/10 border border-[#38bdf8]/20'
              : 'bg-gradient-to-r from-[#38bdf8]/20 to-[#1e3a8a]/20 border border-[#1e3a8a]/20'
          } shadow-xl text-center`}
        >
          <div
            className={`inline-block p-4 rounded-full mb-4 ${
              darkMode
                ? 'bg-[#38bdf8]/20 text-[#38bdf8]'
                : 'bg-[#1e3a8a]/20 text-[#1e3a8a]'
            }`}
          >
            <Brain size={40} />
          </div>
          <h3
            className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-[#38bdf8]' : 'text-[#1e3a8a]'
            }`}
          >
            AI-First QA Philosophy
          </h3>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
            }`}
          >
            Combining traditional testing expertise with AI-powered tools to improve
            team efficiency, bug analysis accuracy, and documentation quality. The
            future of QA is intelligent, automated, and data-driven.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AITools;
