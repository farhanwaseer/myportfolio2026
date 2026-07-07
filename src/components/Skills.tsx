import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code, Cpu, Globe, Layers, Palette, Activity, Server, Terminal, 
  Network, GitBranch, MessageSquare, Smartphone, Zap, Database, 
  GitMerge, Container, RefreshCw, Cloud, Briefcase, GraduationCap, ChevronRight 
} from 'lucide-react';
import { SKILLS_DATA, EXPERIENCE_DATA } from '../data';
import { Skill, Experience } from '../types';

// Map icon string names to dynamic Lucide components
const iconMap: Record<string, any> = {
  Code, Cpu, Globe, Layers, Palette, Activity, Server, Terminal,
  Network, GitBranch, MessageSquare, Smartphone, Zap, Database,
  GitMerge, Container, RefreshCw, Cloud
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Mobile' | 'Tools & DevOps'>('All');
  const [timelineType, setTimelineType] = useState<'work' | 'education'>('work');

  const categories: ('All' | 'Frontend' | 'Backend' | 'Mobile' | 'Tools & DevOps')[] = [
    'All', 'Frontend', 'Backend', 'Mobile', 'Tools & DevOps'
  ];

  const filteredSkills = selectedCategory === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === selectedCategory);

  const filteredExperience = EXPERIENCE_DATA.filter(item => item.type === timelineType);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="skills" className="bg-white py-20 dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            My Technical Arsenal & Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            A comprehensive overview of my tech stacks, tools, and professional history as a software architect.
          </p>
        </div>

        {/* Outer Bento Layout Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Block: Interactive Skills Panel (Col Span 7) */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-6">
              
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 pb-4 dark:border-gray-800">
                {categories.map(category => (
                  <button
                    key={category}
                    id={`skill-filter-btn-${category.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all cursor-pointer ${
                      selectedCategory === category
                        ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Skills Progress Cards Grid */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <AnimatePresence mode="popLayout">
                  {filteredSkills.map((skill: Skill) => {
                    const IconComponent = iconMap[skill.iconName] || Code;
                    return (
                      <motion.div
                        key={skill.name}
                        layout
                        variants={skillCardVariants}
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="group flex flex-col rounded-xl border border-gray-100 bg-gray-50/50 p-4 hover:bg-white hover:shadow-lg dark:border-gray-800/80 dark:bg-gray-950/20 dark:hover:bg-gray-950 transition-all duration-300"
                      >
                        {/* Title, Icon and Value */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-950/30 dark:text-teal-400 group-hover:scale-110 transition-transform duration-200">
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                          </div>
                          <span className="font-mono text-sm font-semibold text-teal-600 dark:text-teal-400">{skill.level}%</span>
                        </div>

                        {/* Progress Bar Track */}
                        <div className="h-2 w-full rounded-full bg-gray-200/60 dark:bg-gray-800">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="h-2 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

          {/* Right Block: Experience Timeline Panel (Col Span 5) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6 dark:border-gray-800/80 dark:bg-gray-950/20">
              
              {/* Timeline Toggle Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-gray-800">
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">Timeline</h3>
                <div className="flex rounded-lg bg-gray-200/50 p-1 dark:bg-gray-800">
                  <button
                    id="timeline-work-btn"
                    onClick={() => setTimelineType('work')}
                    className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                      timelineType === 'work'
                        ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-900 dark:text-white'
                        : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <Briefcase className="h-3.5 w-3.5" />
                    <span>Experience</span>
                  </button>
                  <button
                    id="timeline-edu-btn"
                    onClick={() => setTimelineType('education')}
                    className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                      timelineType === 'education'
                        ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-900 dark:text-white'
                        : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <GraduationCap className="h-3.5 w-3.5" />
                    <span>Education</span>
                  </button>
                </div>
              </div>

              {/* Experience list */}
              <div className="mt-6 flex flex-col gap-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-800">
                <AnimatePresence mode="popLayout">
                  {filteredExperience.map((exp: Experience, idx) => (
                    <motion.div
                      key={exp.id}
                      layout
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="relative pl-8 group"
                    >
                      {/* Timeline point node */}
                      <div className="absolute left-1.5 top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border border-teal-500 bg-white dark:bg-gray-950 group-hover:scale-125 transition-transform duration-200">
                        <div className="h-2 w-2 rounded-full bg-teal-500" />
                      </div>

                      {/* Content Card */}
                      <div>
                        <span className="font-mono text-xs font-semibold text-teal-600 dark:text-teal-400">{exp.period}</span>
                        <h4 className="font-semibold text-gray-900 dark:text-white mt-0.5 group-hover:text-teal-500 transition-colors duration-200">{exp.role}</h4>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{exp.company}</p>
                        
                        {/* Bulleted specifics */}
                        <ul className="mt-3 flex flex-col gap-1.5">
                          {exp.description.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex gap-2 text-xs leading-normal text-gray-600 dark:text-gray-300">
                              <ChevronRight className="h-3 w-3 mt-0.5 text-teal-500 flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
