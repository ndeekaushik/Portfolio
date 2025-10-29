import { Briefcase, Calendar, Award } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience = ({ darkMode }: ExperienceProps) => {
  const experiences = [
    {
      role: 'QA Engineer',
      type: 'Manual + Automation Testing',
      duration: '3+ Years',
      responsibilities: [
        'Design and execute comprehensive test cases for web and mobile applications',
        'Perform API testing using Postman and Swagger for REST endpoints',
        'Conduct database testing and validation using PostgreSQL',
        'Develop automation scripts using Selenium with Python',
        'Collaborate with development teams using JIRA for defect tracking',
        'Integrate AI tools (ROVO AI) for automated issue summarization',
        'Configure and test Azure VM environments and RDP connections',
        'Lead regression testing initiatives and workflow optimization',
      ],
    },
  ];

  const achievements = [
    {
      icon: <Award size={24} />,
      title: 'AI Integration Pioneer',
      description:
        'Successfully integrated ROVO AI within JIRA for automated reporting and workflow optimization',
    },
    {
      icon: <Award size={24} />,
      title: 'Cloud Testing Expert',
      description:
        'Led Azure cloud transition testing with 100% deployment success rate',
    },
    {
      icon: <Award size={24} />,
      title: 'Quality Champion',
      description:
        'Improved bug detection rate by 40% through exploratory testing techniques',
    },
    {
      icon: <Award size={24} />,
      title: 'Automation Advocate',
      description:
        'Reduced regression testing time by 50% through Selenium automation',
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
          }`}
        >
          Professional <span className="text-[#38bdf8]">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#38bdf8] to-[#1e3a8a] mx-auto mb-12"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl backdrop-blur-sm ${
                darkMode
                  ? 'bg-white/5 border border-[#38bdf8]/20'
                  : 'bg-white/80 border border-[#1e3a8a]/20'
              } shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <div className="flex items-start gap-6">
                <div
                  className={`p-4 rounded-xl ${
                    darkMode
                      ? 'bg-[#38bdf8]/20 text-[#38bdf8]'
                      : 'bg-[#1e3a8a]/20 text-[#1e3a8a]'
                  }`}
                >
                  <Briefcase size={32} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-2">
                    <h3
                      className={`text-2xl font-bold ${
                        darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-medium ${
                        darkMode
                          ? 'bg-[#38bdf8]/20 text-[#38bdf8]'
                          : 'bg-[#1e3a8a]/20 text-[#1e3a8a]'
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <div
                    className={`flex items-center gap-2 mb-4 ${
                      darkMode ? 'text-[#cbd5e1]' : 'text-slate-600'
                    }`}
                  >
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>

                  <h4
                    className={`text-lg font-semibold mb-3 ${
                      darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
                    }`}
                  >
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-3 ${
                          darkMode ? 'text-[#cbd5e1]' : 'text-slate-600'
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#38bdf8] mt-1.5 flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3
            className={`text-3xl font-bold text-center mb-8 ${
              darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
            }`}
          >
            Key <span className="text-[#38bdf8]">Achievements</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl backdrop-blur-sm ${
                  darkMode
                    ? 'bg-gradient-to-br from-[#38bdf8]/10 to-[#1e3a8a]/10 border border-[#38bdf8]/20'
                    : 'bg-gradient-to-br from-[#38bdf8]/20 to-[#1e3a8a]/20 border border-[#1e3a8a]/20'
                } shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
              >
                <div
                  className={`mb-3 ${
                    darkMode ? 'text-[#38bdf8]' : 'text-[#1e3a8a]'
                  }`}
                >
                  {achievement.icon}
                </div>
                <h4
                  className={`text-lg font-bold mb-2 ${
                    darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
                  }`}
                >
                  {achievement.title}
                </h4>
                <p
                  className={`text-sm ${
                    darkMode ? 'text-[#cbd5e1]' : 'text-slate-600'
                  }`}
                >
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
