import { useState } from 'react';
import { Menu, X, Sun, Moon, Code } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({
  darkMode,
  toggleDarkMode,
  activeSection,
  setActiveSection,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="app-header"
      className="sticky top-0 z-40 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-gray-800/80 dark:bg-gray-900/80"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          id="header-logo-btn"
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-gray-900 transition-opacity hover:opacity-90 dark:text-white"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500 text-white shadow-md shadow-teal-500/20">
            <Code className="h-5 w-5" />
          </div>
          <span>
            Farhan<span className="text-teal-500">.dev</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-2 text-sm font-medium transition-colors duration-200 hover:text-teal-500 cursor-pointer ${
                activeSection === item.id
                  ? 'text-teal-500 dark:text-teal-400'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-teal-500 dark:bg-teal-400 animate-fade-in" />
              )}
            </button>
          ))}

          <span className="h-4 w-px bg-gray-200 dark:bg-gray-700" />

          {/* Dark Mode Toggle */}
          <button
            id="desktop-dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 transition-all duration-200"
          >
            {darkMode ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Controls (Menu Trigger & Dark Mode Toggle) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            id="mobile-menu-trigger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden border-b border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-900 animate-fade-in"
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-teal-50/50 text-teal-600 dark:bg-teal-950/20 dark:text-teal-400'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
