import { motion } from 'motion/react';
import { X, Calendar, Clock, BookOpen, Share2, Heart, MessageSquare } from 'lucide-react';
import { BlogPost } from '../types';
import { useState } from 'react';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogModal({ post, onClose }: BlogModalProps) {
  const [likes, setLikes] = useState(24);
  const [hasLiked, setHasLiked] = useState(false);

  if (!post) return null;

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  // Safe and responsive custom markdown renderer
  const renderContent = (markdownText: string) => {
    const lines = markdownText.split('\n');
    let inCodeBlock = false;
    let codeContent: string[] = [];

    return lines.map((line, idx) => {
      // Handle Code Block delimiters
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          inCodeBlock = false;
          const codeStr = codeContent.join('\n');
          codeContent = [];
          return (
            <pre
              key={`code-${idx}`}
              className="my-5 overflow-x-auto rounded-xl bg-gray-900 p-4 font-mono text-xs text-teal-400 border border-gray-800"
            >
              <code>{codeStr}</code>
            </pre>
          );
        } else {
          inCodeBlock = true;
          return null;
        }
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return null;
      }

      // Handle main headings (H2)
      if (line.startsWith('## ')) {
        return (
          <h3
            key={`h2-${idx}`}
            className="font-display text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3 first:mt-2"
          >
            {line.replace('## ', '')}
          </h3>
        );
      }

      // Handle sub-headings (H3)
      if (line.startsWith('### ')) {
        return (
          <h4
            key={`h3-${idx}`}
            className="font-display text-lg font-bold text-gray-900 dark:text-gray-200 mt-6 mb-2"
          >
            {line.replace('### ', '')}
          </h4>
        );
      }

      // Handle bullet points
      if (line.startsWith('- ')) {
        // Match inline bold `**text**` and code `useOptimistic`
        const content = formatInlineStyles(line.replace('- ', ''));
        return (
          <li key={`li-${idx}`} className="list-disc pl-2 ml-5 text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-1">
            {content}
          </li>
        );
      }

      // Handle normal paragraphs (if not empty)
      if (line.trim() !== '') {
        return (
          <p key={`p-${idx}`} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {formatInlineStyles(line)}
          </p>
        );
      }

      return <div key={`empty-${idx}`} className="h-2" />;
    });
  };

  // Helper to parse basic inline bolding and inline mono code
  const formatInlineStyles = (text: string) => {
    // Regex matches inline code `something` or bold **something**
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-gray-900 dark:text-white">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={index} className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-teal-600 dark:bg-gray-800 dark:text-teal-400">
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900 flex flex-col max-h-[85vh]"
      >
        {/* Cover Image & Metadata Banner */}
        <div className="relative h-44 sm:h-56 w-full flex-shrink-0">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/45 to-transparent" />
          
          <button
            id="close-blog-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/75 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Tag & Title */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="rounded-full bg-teal-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              {post.category}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold mt-1.5 leading-tight">{post.title}</h3>
          </div>
        </div>

        {/* Read Metadata Row */}
        <div className="flex flex-wrap items-center justify-between border-b border-gray-100/80 bg-gray-50/50 px-6 py-3.5 dark:border-gray-800 dark:bg-gray-950/20 text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-teal-500" />
              <span>{post.date}</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-teal-500" />
              <span>{post.readTime}</span>
            </span>
          </div>
          <span className="flex items-center gap-1 font-semibold text-teal-600 dark:text-teal-400">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Developer Insights</span>
          </span>
        </div>

        {/* Modal Scrollable Article Content */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-grow">
          <article className="prose prose-teal dark:prose-invert max-w-none">
            {renderContent(post.content)}
          </article>
        </div>

        {/* Modal Interactive Engagement Footer */}
        <div className="border-t border-gray-100/80 bg-gray-50/50 p-4 dark:border-gray-800 dark:bg-gray-900/60 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4 text-xs">
            {/* Like trigger */}
            <button
              id={`blog-like-btn-${post.id}`}
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                hasLiked
                  ? 'bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-950/20 dark:border-rose-900/30 dark:text-rose-400'
                  : 'bg-white border-gray-200 text-gray-600 hover:text-rose-500 dark:bg-gray-950 dark:border-gray-800 dark:text-gray-400 dark:hover:text-rose-400'
              }`}
            >
              <Heart className={`h-4 w-4 ${hasLiked ? 'fill-current' : ''}`} />
              <span>{likes} Loves</span>
            </button>

            {/* Simulated Comment count */}
            <span className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
              <MessageSquare className="h-4 w-4" />
              <span>3 Comments</span>
            </span>
          </div>

          {/* Simulated Share Button */}
          <button
            id={`blog-share-btn-${post.id}`}
            onClick={() => {
              alert('Link copied to clipboard! (Simulated)');
            }}
            className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>Share</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
