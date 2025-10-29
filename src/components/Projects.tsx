import { FolderGit2, CheckCircle2, Database, Cloud } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects = ({ darkMode }: ProjectsProps) => {
  const projects = [
    {
      icon: <FolderGit2 size={40} />,
      title: 'Seasia Connect',
      type: 'In-House Project',
      description:
        'Led functional and regression testing initiatives, workflow optimization, and defect triaging for internal communication platform.',
      highlights: [
        'Comprehensive functional testing',
        'Regression test suite design',
        'Workflow optimization',
        'Defect triaging and management',
        'JIRA integration',
      ],
      tech: ['Manual Testing', 'JIRA', 'Test Case Design', 'Regression Testing'],
    },
    {
      icon: <CheckCircle2 size={40} />,
      title: 'Allego',
      type: 'Sales Enablement Application',
      description:
        'Performed comprehensive API testing and UI validation for a sales enablement platform, ensuring seamless user experience.',
      highlights: [
        'API testing with Postman & Swagger',
        'UI validation and testing',
        'User experience testing',
        'Integration testing',
        'Test documentation',
      ],
      tech: ['Postman', 'Swagger', 'API Testing', 'UI Testing', 'Manual Testing'],
    },
    {
      icon: <Database size={40} />,
      title: 'Hyla (Assurant)',
      type: 'Backend Validation Project',
      description:
        'Conducted extensive backend validation using PostgreSQL and managed deployment verifications for insurance technology platform.',
      highlights: [
        'PostgreSQL database testing',
        'Backend validation',
        'Deployment verification',
        'Data integrity checks',
        'Query optimization',
      ],
      tech: ['PostgreSQL', 'Database Testing', 'SQL', 'Backend Testing'],
    },
    {
      icon: <Cloud size={40} />,
      title: 'Azure Cloud Transition',
      type: 'Cloud Infrastructure Project',
      description:
        'Configured and tested RDP sessions, validated connectivity, and ensured environment stability on Azure Virtual Machines.',
      highlights: [
        'Azure VM configuration',
        'RDP session testing',
        'Connectivity validation',
        'Environment stability testing',
        'Cross-platform verification',
      ],
      tech: ['Azure', 'Cloud Testing', 'RDP', 'Virtual Machines', 'System Testing'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
          }`}
        >
          Key <span className="text-[#38bdf8]">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#38bdf8] to-[#1e3a8a] mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl backdrop-blur-sm ${
                darkMode
                  ? 'bg-white/5 border border-[#38bdf8]/20'
                  : 'bg-white/80 border border-[#1e3a8a]/20'
              } shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300`}
            >
              <div
                className={`mb-4 ${
                  darkMode ? 'text-[#38bdf8]' : 'text-[#1e3a8a]'
                }`}
              >
                {project.icon}
              </div>

              <div className="mb-2">
                <h3
                  className={`text-2xl font-bold ${
                    darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? 'text-[#38bdf8]' : 'text-[#1e3a8a]'
                  }`}
                >
                  {project.type}
                </p>
              </div>

              <p
                className={`mb-4 ${
                  darkMode ? 'text-[#cbd5e1]' : 'text-slate-600'
                }`}
              >
                {project.description}
              </p>

              <div className="mb-4">
                <h4
                  className={`text-sm font-semibold mb-2 ${
                    darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
                  }`}
                >
                  Key Highlights:
                </h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className={`text-sm flex items-start gap-2 ${
                        darkMode ? 'text-[#cbd5e1]' : 'text-slate-600'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode
                        ? 'bg-[#38bdf8]/20 text-[#38bdf8]'
                        : 'bg-[#1e3a8a]/20 text-[#1e3a8a]'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
