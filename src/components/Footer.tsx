import { Code, Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

export default function Footer({ setActiveSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
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
    <footer
      id="app-footer"
      className="border-t border-gray-100 bg-white py-12 dark:border-gray-800 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Logo & Stack Badge */}
          <div className="flex items-center gap-3">
            <button
              id="footer-logo-btn"
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-2 font-display text-lg font-bold text-gray-900 dark:text-white cursor-pointer"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 text-white">
                <Code className="h-4 w-4" />
              </div>
              <span>
                Farhan<span className="text-teal-500">.dev</span>
              </span>
            </button>
            <span className="h-4 w-px bg-gray-200 dark:bg-gray-800 hidden sm:inline" />
            <span className="hidden sm:inline-flex rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              MongoDB • Express • React • Node.js
            </span>
          </div>

          {/* Nav quicklinks */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            <button id="footer-link-about" onClick={() => handleNavClick('hero')} className="hover:text-teal-500 cursor-pointer">About</button>
            <button id="footer-link-skills" onClick={() => handleNavClick('skills')} className="hover:text-teal-500 cursor-pointer">Skills</button>
            <button id="footer-link-projects" onClick={() => handleNavClick('projects')} className="hover:text-teal-500 cursor-pointer">Projects</button>
            <button id="footer-link-blog" onClick={() => handleNavClick('blog')} className="hover:text-teal-500 cursor-pointer">Blog</button>
            <button id="footer-link-contact" onClick={() => handleNavClick('contact')} className="hover:text-teal-500 cursor-pointer">Contact</button>
          </nav>

          {/* Social connections */}
          <div className="flex items-center gap-4 text-gray-400 dark:text-gray-500">
            <a
              id="footer-github-link"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              id="footer-linkedin-link"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              id="footer-email-link"
              href="mailto:farhan.llb6559@iiu.edu.pk"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Email Me"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="mt-8 border-t border-gray-100/60 pt-8 text-center text-xs text-gray-400 dark:border-gray-800/80 dark:text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Farhan. All rights reserved.</p>
          <p className="flex items-center gap-1.5 justify-center">
            <span>Crafted with</span>
            <Heart className="h-3 w-3 fill-rose-500 text-rose-500 animate-pulse" />
            <span>using the MERN Stack suite & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
