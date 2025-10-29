import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import AITools from './components/AITools';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode
        ? 'bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e3a8a]'
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50'
    }`}>
      <Navigation darkMode={darkMode} />

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
          darkMode
            ? 'bg-[#38bdf8] text-[#0f172a] hover:bg-cyan-400'
            : 'bg-[#1e3a8a] text-white hover:bg-blue-700'
        } shadow-lg`}
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <AITools darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default App;
