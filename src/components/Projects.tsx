import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, ArrowRight, Github, ExternalLink, RefreshCw } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Full Stack' | 'Frontend' | 'Mobile App' | 'Backend'>('All');

  const categories: ('All' | 'Full Stack' | 'Frontend' | 'Mobile App' | 'Backend')[] = [
    'All', 'Full Stack', 'Frontend', 'Mobile App', 'Backend'
  ];

  // Perform search and category filtering
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesTitle = project.title.toLowerCase().includes(query);
      const matchesSub = project.subtitle.toLowerCase().includes(query);
      const matchesDesc = project.description.toLowerCase().includes(query);
      const matchesTech = project.technologies.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && (matchesTitle || matchesSub || matchesDesc || matchesTech);
    });
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } },
  };

  return (
    <section id="projects" className="bg-gray-50 py-20 dark:bg-gray-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            My Handcrafted Project Repository
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Search and filter through production-ready software solutions covering full-stack systems, dashboards, and mobile architectures.
          </p>
        </div>

        {/* Filter Toolbar: Search Bar + Categories */}
        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-md shadow-gray-200/20 dark:border-gray-800 dark:bg-gray-900 md:flex-row md:items-center md:justify-between transition-colors duration-300">
          
          {/* Interactive Search Field */}
          <div className="relative flex-grow max-w-lg">
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              id="project-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, description, or tech tag..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 pl-10 pr-4 text-sm font-medium text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:bg-white focus:ring-1 focus:ring-teal-500 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white dark:placeholder-gray-500 dark:focus:border-teal-400 dark:focus:bg-gray-900 outline-none transition-all"
            />
          </div>

          {/* Categories Tab Bar */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            <span className="hidden lg:flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400 mr-2">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Filter:</span>
            </span>
            {categories.map((category) => (
              <button
                key={category}
                id={`project-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-500/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* Dynamic Project Grid Layout */}
        <div className="mt-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project: Project) => (
                  <motion.div
                    key={project.id}
                    layout
                    variants={cardVariants}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/60 transition-all duration-300"
                  >
                    {/* Project Thumbnail Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Floating Category Badge */}
                      <span className="absolute top-4 left-4 rounded-full bg-teal-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Details Copy */}
                    <div className="flex flex-col p-6 flex-grow">
                      <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">{project.subtitle}</span>
                      <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Applied Technologies Tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 mt-1 pl-1">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Action Triggers Footer */}
                      <div className="mt-6 flex items-center justify-between border-t border-gray-100/80 pt-4 dark:border-gray-800/80 flex-shrink-0">
                        {/* Interactive modal action */}
                        <button
                          id={`project-details-${project.id}`}
                          onClick={() => onSelectProject(project)}
                          className="group/btn flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 cursor-pointer"
                        >
                          <span>Explore Details</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </button>

                        {/* Direct links */}
                        <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
                          <a
                            id={`project-github-${project.id}`}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-900 dark:hover:text-white transition-colors"
                            aria-label="View source code on GitHub"
                          >
                            <Github className="h-4.5 w-4.5" />
                          </a>
                          {project.liveUrl && (
                            <a
                              id={`project-live-${project.id}`}
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-gray-900 dark:hover:text-white transition-colors"
                              aria-label="Launch Live App"
                            >
                              <ExternalLink className="h-4.5 w-4.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* No matching search results fallback state */
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white py-16 px-4 text-center dark:border-gray-800 dark:bg-gray-900/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-500 dark:bg-teal-950/30 dark:text-teal-400 mb-4">
                  <Search className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-gray-900 dark:text-white">No projects found</h4>
                <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400 max-w-sm">
                  We couldn't find any projects matching your search term: <strong className="text-gray-900 dark:text-white">"{searchQuery}"</strong> inside our categories.
                </p>
                <button
                  id="reset-projects-filter"
                  onClick={handleResetFilters}
                  className="mt-6 flex items-center gap-1.5 rounded-xl bg-teal-500 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-teal-500/20 hover:bg-teal-600 transition-colors cursor-pointer"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>Clear Filters & Reset</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
