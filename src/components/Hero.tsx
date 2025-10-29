import { Download, Linkedin, Github, Mail, Phone } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fadeIn">
          <div
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              darkMode
                ? 'bg-[#38bdf8]/20 text-[#38bdf8]'
                : 'bg-[#38bdf8]/30 text-[#1e3a8a]'
            }`}
          >
            QA Engineer • Manual + Automation
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold leading-tight ${
              darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
            }`}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-[#38bdf8] to-[#1e3a8a] bg-clip-text text-transparent">
              Rohit Kaushik
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl ${
              darkMode ? 'text-[#cbd5e1]' : 'text-slate-600'
            }`}
          >
            Passionate QA Engineer with 3+ years of experience combining analytical
            thinking with AI-powered testing to deliver flawless software.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-[#38bdf8] to-[#1e3a8a] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#38bdf8]/50 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <button
              onClick={() => window.print()}
              className={`px-6 py-3 rounded-lg font-medium border-2 transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                darkMode
                  ? 'border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8]/10'
                  : 'border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a]/10'
              }`}
            >
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/rohit-kaushik-802b461b2/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? 'bg-[#38bdf8]/20 text-[#38bdf8] hover:bg-[#38bdf8]/30'
                  : 'bg-[#1e3a8a]/20 text-[#1e3a8a] hover:bg-[#1e3a8a]/30'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/ndeekaushik"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? 'bg-[#38bdf8]/20 text-[#38bdf8] hover:bg-[#38bdf8]/30'
                  : 'bg-[#1e3a8a]/20 text-[#1e3a8a] hover:bg-[#1e3a8a]/30'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:rohitkaushik123001@zohomail.in"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? 'bg-[#38bdf8]/20 text-[#38bdf8] hover:bg-[#38bdf8]/30'
                  : 'bg-[#1e3a8a]/20 text-[#1e3a8a] hover:bg-[#1e3a8a]/30'
              }`}
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+918708315893"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? 'bg-[#38bdf8]/20 text-[#38bdf8] hover:bg-[#38bdf8]/30'
                  : 'bg-[#1e3a8a]/20 text-[#1e3a8a] hover:bg-[#1e3a8a]/30'
              }`}
            >
              <Phone size={24} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className={`absolute inset-0 bg-gradient-to-r from-[#38bdf8] to-[#1e3a8a] rounded-full blur-3xl opacity-30 animate-pulse`}
          ></div>
          <img
            src="/1000083200.png"
            alt="Rohit Kaushik"
            className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
