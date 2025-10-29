import {
  TestTube2,
  Code2,
  Database,
  Cloud,
  Bug,
  Braces,
  GitBranch,
  FileSpreadsheet,
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills = ({ darkMode }: SkillsProps) => {
  const skillCategories = [
    {
      icon: <TestTube2 size={32} />,
      title: 'Manual Testing',
      skills: [
        'Test Case Design',
        'Test Execution',
        'Regression Testing',
        'Exploratory Testing',
        'UAT Support',
      ],
    },
    {
      icon: <Code2 size={32} />,
      title: 'Automation Testing',
      skills: [
        'Selenium with Python',
        'Basic Scripting',
        'Validation Automation',
        'Test Framework Design',
      ],
    },
    {
      icon: <Braces size={32} />,
      title: 'API Testing',
      skills: ['Postman', 'Swagger', 'REST APIs', 'API Validation', 'Response Testing'],
    },
    {
      icon: <Database size={32} />,
      title: 'Database Testing',
      skills: [
        'PostgreSQL',
        'Data Validation',
        'Query Optimization',
        'Joins & Subqueries',
        'Backend Validation',
      ],
    },
    {
      icon: <Bug size={32} />,
      title: 'Bug Tracking',
      skills: [
        'JIRA',
        'Bugzilla',
        'Defect Tracking',
        'Sprint Management',
        'Test Reporting',
      ],
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Testing (Azure)',
      skills: [
        'RDP Connections',
        'Azure Virtual Machines',
        'Package Installation',
        'Deployment Verification',
        'OS-level Validation',
      ],
    },
    {
      icon: <GitBranch size={32} />,
      title: 'Development Tools',
      skills: ['VS Code', 'Git & GitHub', 'Version Control', 'Code Review'],
    },
    {
      icon: <FileSpreadsheet size={32} />,
      title: 'Test Management',
      skills: ['Excel', 'TestRail', 'Test Case Management', 'Documentation'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
          }`}
        >
          Core <span className="text-[#38bdf8]">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#38bdf8] to-[#1e3a8a] mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl backdrop-blur-sm ${
                darkMode
                  ? 'bg-white/5 border border-[#38bdf8]/20'
                  : 'bg-white/80 border border-[#1e3a8a]/20'
              } shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group`}
            >
              <div
                className={`mb-4 ${
                  darkMode ? 'text-[#38bdf8]' : 'text-[#1e3a8a]'
                } group-hover:scale-110 transition-transform duration-300`}
              >
                {category.icon}
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
                }`}
              >
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className={`text-sm flex items-center gap-2 ${
                      darkMode ? 'text-[#cbd5e1]' : 'text-slate-600'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
                    {skill}
                  </li>
                ))}
              </ul>
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
          <h3
            className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-[#38bdf8]' : 'text-[#1e3a8a]'
            }`}
          >
            Technical Proficiency
          </h3>
          <p
            className={`text-lg ${darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'}`}
          >
            Combining traditional testing methodologies with modern AI-powered tools
            to deliver exceptional quality assurance across web, mobile, and cloud
            platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
