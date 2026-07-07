import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import { BLOGS_DATA } from '../data';
import { BlogPost } from '../types';

interface BlogProps {
  onSelectPost: (post: BlogPost) => void;
}

export default function Blog({ onSelectPost }: BlogProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Database' | 'Security'>('All');

  const categories: ('All' | 'Frontend' | 'Database' | 'Security')[] = [
    'All', 'Frontend', 'Database', 'Security'
  ];

  const filteredPosts = activeCategory === 'All'
    ? BLOGS_DATA
    : BLOGS_DATA.filter(post => post.category === activeCategory);

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
  };

  return (
    <section id="blog" className="bg-white py-20 dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Engineering Logs & Deep Dives
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            A curation of conceptual breakdowns, schema guides, and architectural design methodologies based on my MERN development journey.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 border-b border-gray-100 pb-5 dark:border-gray-800">
          {categories.map(category => (
            <button
              key={category}
              id={`blog-category-btn-${category.toLowerCase()}`}
              onClick={() => setActiveCategory(category)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === category
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blogs grid */}
        <div className="mt-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredPosts.map((post: BlogPost) => (
                <motion.div
                  key={post.id}
                  layout
                  variants={cardVariants}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl dark:border-gray-800 dark:bg-gray-950/20 transition-all duration-300"
                >
                  {/* Blog Cover */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-teal-500 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
                      {post.category}
                    </span>
                  </div>

                  {/* Blog Copy */}
                  <div className="flex flex-col p-6 flex-grow">
                    {/* Read info */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-teal-500/80" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-teal-500/80" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="mt-3.5 text-sm leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-3">
                      {post.summary}
                    </p>

                    {/* Applied Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5 flex-grow">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-semibold text-teal-600/90 dark:text-teal-400">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Action trigger */}
                    <button
                      id={`blog-read-btn-${post.id}`}
                      onClick={() => onSelectPost(post)}
                      className="group/btn mt-6 flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 cursor-pointer"
                    >
                      <BookOpen className="h-4 w-4" />
                      <span>Read Article</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
