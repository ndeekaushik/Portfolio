import { GraduationCap, Briefcase, MapPin, Target } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  const highlights = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Education',
      content: 'B.Tech in Computer Science Engineering',
      detail: 'MDU Rohtak (2018-2022)',
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Experience',
      content: '3+ Years',
      detail: 'Software Testing (Manual + Automation)',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'India',
      detail: 'Open to Remote Opportunities',
    },
    {
      icon: <Target size={24} />,
      title: 'Focus',
      content: 'AI-Powered Testing',
      detail: 'Cloud & Automation Expert',
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
          }`}
        >
          About <span className="text-[#38bdf8]">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#38bdf8] to-[#1e3a8a] mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`p-8 rounded-2xl backdrop-blur-sm ${
              darkMode
                ? 'bg-white/5 border border-[#38bdf8]/20'
                : 'bg-white/80 border border-[#1e3a8a]/20'
            } shadow-xl hover:shadow-2xl transition-all duration-300`}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-[#38bdf8]' : 'text-[#1e3a8a]'
              }`}
            >
              Professional Summary
            </h3>
            <p
              className={`leading-relaxed ${
                darkMode ? 'text-[#cbd5e1]' : 'text-slate-600'
              }`}
            >
              Passionate QA Engineer with over 3 years of experience in software
              testing across in-house and client-based projects. I specialize in
              functional, API, and database testing and leverage modern AI tools to
              optimize test coverage, automation, and reporting accuracy.
            </p>
            <p
              className={`mt-4 leading-relaxed ${
                darkMode ? 'text-[#cbd5e1]' : 'text-slate-600'
              }`}
            >
              Known for combining analytical thinking with next-gen technologies to
              ensure flawless, high-quality software delivery. I experiment with AI
              extensions and tools that improve team efficiency, bug analysis, and
              documentation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl backdrop-blur-sm ${
                  darkMode
                    ? 'bg-white/5 border border-[#38bdf8]/20'
                    : 'bg-white/80 border border-[#1e3a8a]/20'
                } shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
              >
                <div
                  className={`mb-3 ${
                    darkMode ? 'text-[#38bdf8]' : 'text-[#1e3a8a]'
                  }`}
                >
                  {item.icon}
                </div>
                <h4
                  className={`font-semibold mb-1 ${
                    darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
                  }`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-sm font-medium ${
                    darkMode ? 'text-[#38bdf8]' : 'text-[#1e3a8a]'
                  }`}
                >
                  {item.content}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    darkMode ? 'text-[#cbd5e1]' : 'text-slate-500'
                  }`}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-12 p-8 rounded-2xl backdrop-blur-sm ${
            darkMode
              ? 'bg-gradient-to-r from-[#38bdf8]/10 to-[#1e3a8a]/10 border border-[#38bdf8]/20'
              : 'bg-gradient-to-r from-[#38bdf8]/20 to-[#1e3a8a]/20 border border-[#1e3a8a]/20'
          } shadow-xl`}
        >
          <h3
            className={`text-2xl font-bold mb-4 flex items-center gap-2 ${
              darkMode ? 'text-[#38bdf8]' : 'text-[#1e3a8a]'
            }`}
          >
            <Target size={28} />
            Career Objective
          </h3>
          <p
            className={`text-lg leading-relaxed ${
              darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
            }`}
          >
            To evolve into a Full-Stack QA Engineer with expertise in Automation,
            Cloud Technologies, and AI-powered Testing frameworks that redefine
            efficiency and reliability in software delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
