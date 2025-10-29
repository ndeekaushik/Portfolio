import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'rohitkaushik123001@zohomail.in',
      link: 'mailto:rohitkaushik123001@zohomail.in',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 8708315893',
      link: 'tel:+918708315893',
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/rohit-kaushik-802b461b2/',
    },
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      value: 'View GitHub Profile',
      link: 'https://github.com/ndeekaushik',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'India',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
          }`}
        >
          Get In <span className="text-[#38bdf8]">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#38bdf8] to-[#1e3a8a] mx-auto mb-6"></div>

        <p
          className={`text-center text-lg mb-12 max-w-2xl mx-auto ${
            darkMode ? 'text-[#cbd5e1]' : 'text-slate-600'
          }`}
        >
          I'm always open to discussing new opportunities, collaborations, or just
          connecting with fellow QA professionals. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl backdrop-blur-sm ${
                darkMode
                  ? 'bg-white/5 border border-[#38bdf8]/20'
                  : 'bg-white/80 border border-[#1e3a8a]/20'
              } shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
            >
              <div
                className={`mb-4 ${
                  darkMode ? 'text-[#38bdf8]' : 'text-[#1e3a8a]'
                }`}
              >
                {info.icon}
              </div>
              <h3
                className={`font-semibold mb-2 ${
                  darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
                }`}
              >
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`text-sm hover:underline ${
                    darkMode ? 'text-[#38bdf8]' : 'text-[#1e3a8a]'
                  }`}
                >
                  {info.value}
                </a>
              ) : (
                <p
                  className={`text-sm ${
                    darkMode ? 'text-[#cbd5e1]' : 'text-slate-600'
                  }`}
                >
                  {info.value}
                </p>
              )}
            </div>
          ))}
        </div>

        <div
          className={`p-8 rounded-2xl backdrop-blur-sm ${
            darkMode
              ? 'bg-gradient-to-br from-[#38bdf8]/10 to-[#1e3a8a]/10 border border-[#38bdf8]/20'
              : 'bg-gradient-to-br from-[#38bdf8]/20 to-[#1e3a8a]/20 border border-[#1e3a8a]/20'
          } shadow-xl max-w-2xl mx-auto text-center`}
        >
          <div
            className={`inline-block p-4 rounded-full mb-4 ${
              darkMode
                ? 'bg-[#38bdf8]/20 text-[#38bdf8]'
                : 'bg-[#1e3a8a]/20 text-[#1e3a8a]'
            }`}
          >
            <Send size={32} />
          </div>
          <h3
            className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-[#f1f5f9]' : 'text-[#0f172a]'
            }`}
          >
            Let's Build Something Great Together
          </h3>
          <p
            className={`mb-6 ${darkMode ? 'text-[#cbd5e1]' : 'text-slate-600'}`}
          >
            Whether you're looking for a QA Engineer, need consultation on testing
            strategies, or want to discuss AI-powered testing solutions, I'd love to
            hear from you.
          </p>
          <a
            href="mailto:rohitkaushik123001@zohomail.in"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#38bdf8] to-[#1e3a8a] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#38bdf8]/50 transition-all duration-300 hover:scale-105"
          >
            <Mail size={20} />
            Send Message
          </a>
        </div>

        <footer
          className={`mt-16 pt-8 border-t text-center ${
            darkMode
              ? 'border-[#38bdf8]/20 text-[#cbd5e1]'
              : 'border-[#1e3a8a]/20 text-slate-600'
          }`}
        >
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Rohit Kaushik. All rights reserved.
          </p>
          <p className="text-sm">
            Built with React.js, Tailwind CSS, and a passion for quality.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
