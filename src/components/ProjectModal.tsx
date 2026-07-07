import { motion } from 'motion/react';
import { X, Github, ExternalLink, ShieldCheck, Target, Lightbulb } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950 flex flex-col max-h-[90vh]"
      >
        {/* Modal Header Media */}
        <div className="relative h-48 sm:h-64 w-full bg-gray-100 dark:bg-gray-900 flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Close Button */}
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Absolute Title Info */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              {project.category}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2">{project.title}</h3>
            <p className="text-gray-200 text-sm mt-1">{project.subtitle}</p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-grow">
          <div className="flex flex-col gap-6">
            
            {/* Extended Overview */}
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-gray-400 dark:text-gray-500 mb-2">
                <ShieldCheck className="h-4 w-4 text-teal-500" />
                <span>Project Architecture & Overview</span>
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                {project.fullDescription}
              </p>
            </div>

            {/* Twin Challenge / Solution Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Challenge Box */}
              <div className="rounded-xl border border-rose-100 bg-rose-50/20 p-4 dark:border-rose-950/30 dark:bg-rose-950/5">
                <h5 className="flex items-center gap-2 font-semibold text-rose-700 dark:text-rose-400 text-sm mb-2">
                  <Target className="h-4 w-4" />
                  <span>The Engineering Challenge</span>
                </h5>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                  {project.challenge}
                </p>
              </div>

              {/* Solution Box */}
              <div className="rounded-xl border border-teal-100 bg-teal-50/20 p-4 dark:border-teal-950/30 dark:bg-teal-950/5">
                <h5 className="flex items-center gap-2 font-semibold text-teal-700 dark:text-teal-400 text-sm mb-2">
                  <Lightbulb className="h-4 w-4" />
                  <span>The Solution Delivered</span>
                </h5>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>

            </div>

            {/* Technologies Grid Chips */}
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-400 dark:text-gray-500 mb-3">
                Technologies Employed
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="border-t border-gray-100 bg-gray-50/50 p-6 dark:border-gray-800 dark:bg-gray-900/50 flex flex-wrap items-center justify-end gap-3 flex-shrink-0">
          <a
            id={`project-modal-github-${project.id}`}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub Code</span>
          </a>

          {project.liveUrl && (
            <a
              id={`project-modal-live-${project.id}`}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-500/25 hover:bg-teal-600 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
