import { useState, useEffect } from 'react';

interface NavigationProps {
  darkMode: boolean;
}

const Navigation = ({ darkMode }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'AI Tools', 'Contact'];

  const scrollToSection = (section: string) => {
    const id = section.toLowerCase().replace(' ', '-');
    const element = document.getElementById(id === 'home' ? 'hero' : id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[#0f172a]/90 backdrop-blur-lg shadow-lg'
            : 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1
            className={`text-2xl font-bold ${
              darkMode ? 'text-[#38bdf8]' : 'text-[#1e3a8a]'
            }`}
          >
            RK
          </h1>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? 'text-[#f1f5f9] hover:text-[#38bdf8]'
                    : 'text-[#0f172a] hover:text-[#38bdf8]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
