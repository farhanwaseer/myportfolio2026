import { motion } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export default function Hero({ onExploreProjects, onContactClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-gray-50 px-4 py-16 dark:bg-gray-950 transition-colors duration-300"
    >
      {/* Decorative ambient tech grids */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]" />
      
      {/* Soft color splashes */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Main Hero Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            {/* Tag/Badge */}
            <motion.div variants={itemVariants} className="mx-auto lg:mx-0 mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/50 px-3 py-1 text-sm font-medium text-teal-700 dark:border-teal-900/30 dark:bg-teal-950/20 dark:text-teal-400">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>Available for Full-Time & Contract Roles</span>
            </motion.div>

            {/* Display Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white"
            >
              Building Scalable <br />
              <span className="bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-emerald-500">
                Full-Stack MERN
              </span> <br />
              Web & Mobile Apps
            </motion.h1>

            {/* Subheading / Narrative */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl font-sans"
            >
              Hi, I'm <strong className="text-gray-900 dark:text-white font-semibold">Farhan</strong>. I architect performant ecosystems using MongoDB, Express.js, React, Node.js, and React Native. Focused on clean architecture, lightning-fast interfaces, and user accessibility.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <button
                id="hero-explore-btn"
                onClick={onExploreProjects}
                className="group flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-500/25 transition-all hover:bg-teal-600 hover:shadow-teal-600/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View Portfolio</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={onContactClick}
                className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-base font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-gray-600 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Mail className="h-5 w-5" />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Social Links & Stack Details */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center justify-center lg:justify-start gap-5 text-gray-500 dark:text-gray-400 border-t border-gray-200/50 dark:border-gray-800/50 pt-8"
            >
              <span className="text-sm font-semibold tracking-wider uppercase text-gray-400 dark:text-gray-500">Find Me:</span>
              <a
                id="hero-github-link"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                id="hero-linkedin-link"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                id="hero-email-link"
                href="mailto:farhan.llb6559@iiu.edu.pk"
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
                aria-label="Send Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Interactive IDE Mockup Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950">
              {/* IDE Header */}
              <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 px-4 py-3 dark:border-gray-800 dark:bg-gray-900/50">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-rose-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-gray-400 dark:text-gray-500">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>developer.ts — MERN Config</span>
                </div>
                <div className="w-10" />
              </div>
              
              {/* IDE Content */}
              <div className="p-5 font-mono text-xs leading-relaxed text-gray-700 dark:text-gray-300">
                <p className="text-gray-400">// Architecting dynamic digital products</p>
                <p className="mt-2 text-teal-600 dark:text-teal-400">const <span className="text-purple-600 dark:text-purple-400">developer</span> = &#123;</p>
                <p className="pl-4">name: <span className="text-amber-600 dark:text-amber-400">'Farhan'</span>,</p>
                <p className="pl-4">role: <span className="text-amber-600 dark:text-amber-400">'MERN Web & App Architect'</span>,</p>
                <p className="pl-4">stack: <span className="text-indigo-600 dark:text-indigo-400">[</span></p>
                <p className="pl-8"><span className="text-emerald-600 dark:text-emerald-400">'MongoDB'</span>, <span className="text-emerald-600 dark:text-emerald-400">'Express'</span>,</p>
                <p className="pl-8"><span className="text-emerald-600 dark:text-emerald-400">'React'</span>, <span className="text-emerald-600 dark:text-emerald-400">'Node'</span>,</p>
                <p className="pl-8"><span className="text-emerald-600 dark:text-emerald-400">'React Native'</span>, <span className="text-emerald-600 dark:text-emerald-400">'TypeScript'</span></p>
                <p className="pl-4 text-indigo-600 dark:text-indigo-400">],</p>
                <p className="pl-4">strengths: [</p>
                <p className="pl-8"><span className="text-pink-600 dark:text-pink-400">'Clean Code'</span>,</p>
                <p className="pl-8"><span className="text-pink-600 dark:text-pink-400">'Fast API Operations'</span>,</p>
                <p className="pl-8"><span className="text-pink-600 dark:text-pink-400">'Pixel-Perfect Fluid UI'</span></p>
                <p className="pl-4">],</p>
                <p className="pl-4">coffeeLover: <span className="text-amber-600 dark:text-amber-500">true</span>,</p>
                <p className="pl-4">passion: <span className="text-amber-600 dark:text-amber-400">'Turning ideas into fast, elegant, production software'</span></p>
                <p className="text-teal-600 dark:text-teal-400">&#125;;</p>

                <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-800">
                  <p className="text-gray-400">// Command Line Terminal</p>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">$ npm run dev</p>
                  <p className="text-emerald-500">✔ Ready in 250ms</p>
                  <p className="text-gray-400">➜ Local: http://localhost:3000</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
