import { Project, BlogPost, Skill, Experience } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'devsphere',
    title: 'DevSphere',
    subtitle: 'MERN Social Ecosystem for Developers',
    description: 'A full-scale social and collaboration hub for developers featuring real-time chat, project collaboration, and code-snippet sharing.',
    fullDescription: 'DevSphere is a comprehensive social network engineered for developers. It bridges the gap between networking and collaborative coding by offering a rich platform where developers can showcase their portfolios, form project-focused teams, exchange code snippets, and participate in real-time developer communities.',
    challenge: 'Implementing scalable, real-time communication for both global chatrooms and direct messages while maintaining robust document editing synchronization and secure authentication.',
    solution: 'Engineered a Node.js and Express backend powered by Socket.io to establish persistent, low-latency WebSocket connections. Created database structures in MongoDB for efficient message history retrieval with pagination, and utilized Redis for caching active session states. Implemented JWT auth stored in secure HTTP-only cookies.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'Tailwind CSS', 'Redux Toolkit', 'JWT'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/developer/devsphere',
    liveUrl: 'https://devsphere-collab.demo',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 'taskflow',
    title: 'TaskFlow Dashboard',
    subtitle: 'Agile Kanban Workspace & Analytics',
    description: 'A collaborative workspace with drag-and-drop boards, detailed sprint analytics charts, and comprehensive team role management.',
    fullDescription: 'TaskFlow is an enterprise-grade collaborative workflow tool modeled after modern Kanban frameworks. It enables teams to organize, prioritize, and track development sprints with interactive progress charts, custom workflow transitions, and live updates.',
    challenge: 'Building a performant, flicker-free drag-and-drop interface that handles concurrent state updates from multiple users and maintains sub-second rendering times with large lists of active cards.',
    solution: 'Utilized React-Beautiful-DND (Pragmatic drag-and-drop) paired with React’s optimistic UI rendering patterns. All local changes are dispatched instantly, while a debounced network layer synchronizes modifications back to the MongoDB database via custom Express API endpoints.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Recharts', 'Framer Motion', 'Tailwind CSS'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/developer/taskflow',
    liveUrl: 'https://taskflow-agile.demo',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 'fitquest',
    title: 'FitQuest Mobile',
    subtitle: 'Gamified Workout & Habit Tracker App',
    description: 'A cross-platform React Native app tracking fitness routines, nutritional intake, and gamified streak achievements.',
    fullDescription: 'FitQuest transforms tedious daily workout and nutrition logs into an engaging, gamified adventure. Users level up their character by completing fitness goals, logging hydration metrics, and hitting consistent daily streaks.',
    challenge: 'Achieving consistent 60 FPS performance across older Android and iOS devices while managing hardware sensor integrations and local SQLite storage synchronization with cloud databases.',
    solution: 'Designed the application in React Native utilizing Reanimated 3 for native-thread UI animations. Built a local-first architecture with WatermelonDB for instant access, which synchronizes periodically in the background to our Node.js/MongoDB cluster via server-sent events.',
    technologies: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Expo', 'WatermelonDB', 'Tailwind CSS'],
    category: 'Mobile App',
    githubUrl: 'https://github.com/developer/fitquest-app',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 'stripe-metrics',
    title: 'StripeMetrics',
    subtitle: 'SaaS Revenue Analytics Engine',
    description: 'A pixel-perfect analytics portal visualizing subscription trends, churn rates, and growth projections using modern data dashboards.',
    fullDescription: 'StripeMetrics is a dedicated financial dashboard that parses webhook streams to generate actionable MRR, ARR, churn, and LTV telemetry charts for SaaS startups.',
    challenge: 'Aggregating large datasets into performant visual models without introducing lag to UI threads or hitting web API response bottlenecks.',
    solution: 'Developed highly optimized aggregation pipelines in MongoDB to pre-calculate daily, monthly, and annual charts. Built a React interface using Recharts, memoizing computation and heavy render lists using standard hooks.',
    technologies: ['React', 'D3.js', 'Recharts', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    category: 'Frontend',
    githubUrl: 'https://github.com/developer/stripe-metrics',
    liveUrl: 'https://stripemetrics-saas.demo',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 'logiroute',
    title: 'LogiRoute API',
    subtitle: 'Optimized Fleet Management & Routing API',
    description: 'A backend microservice implementing automated route planning, geospatial asset indexing, and high-concurrency dispatch queuing.',
    fullDescription: 'LogiRoute is a robust RESTful API that handles real-time coordinates, geofencing, and vehicle dispatching logic. Engineered with reliability and massive throughput in mind, it supports multiple logistics companies simultaneously.',
    challenge: 'Solving vehicle routing coordinates under tight execution budgets, and keeping geo-queries responsive with millions of index lookups.',
    solution: 'Engineered in Node.js and TypeScript utilizing Express. Leveraged MongoDB Geospatial indexing (`2dsphere`) to query coordinates within milliseconds. Implemented Redis cluster caching and Bulletproof BullMQ task queues for asynchronous processing.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'Docker', 'Jest', 'TypeScript'],
    category: 'Backend',
    githubUrl: 'https://github.com/developer/logiroute-api',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 'auranotes',
    title: 'AuraNotes Editor',
    subtitle: 'Sleek Local-First Markdown Editor',
    description: 'An elegant, offline-ready Markdown workspace with real-time word analysis, dark aesthetics, and automatic backup synchronization.',
    fullDescription: 'AuraNotes provides a distraction-free environment for writers and programmers. Featuring custom themes, standard shortcuts, full Markdown parsing, and cloud back-ups, it is the ultimate developer diary.',
    challenge: 'Designing a robust local-first document state manager that handles conflicting file-edits gracefully when writing changes offline.',
    solution: 'Utilized IndexedDB for instant, browser-based database transactions and implemented a custom Conflict-free Replicated Data Type (CRDT) sync logic to handle resolution whenever network connectivity is restored.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'IndexedDB', 'Framer Motion', 'Vite'],
    category: 'Frontend',
    githubUrl: 'https://github.com/developer/auranotes',
    liveUrl: 'https://auranotes-editor.demo',
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80',
    featured: false,
  }
];

export const BLOGS_DATA: BlogPost[] = [
  {
    id: 'react-19-guide',
    title: 'Mastering React 19: Action Hooks, Server Components, and the Compiler',
    summary: 'A complete practical guide to what’s new in React 19, focusing on useActionState, optimistic updates, and the transition paradigm.',
    content: `## Introduction
React 19 marks a monumental shift in how we manage application side-effects, form states, and asynchronous operations. In this guide, we will break down the absolute key features that MERN Stack developers must embrace today.

### The React Compiler
Previously, we spent significant effort optimizing renders with \`useMemo\`, \`useCallback\`, and \`React.memo\`. The new React Compiler automates this entire paradigm under the hood. It parses your source tree and automatically memoizes components, values, and callback scopes so that they only re-render when actual state dependencies change.

### The Power of Actions & \`useActionState\`
React 19 introduces **Actions**, which are asynchronous transitions managed natively by the library. Instead of writing boilerplate status hooks:

\`\`\`typescript
const [isPending, setIsPending] = useState(false);
const [error, setError] = useState(null);

const handleSubmit = async () => {
  setIsPending(true);
  try {
    await updateProfile();
  } catch (err) {
    setError(err);
  } finally {
    setIsPending(false);
  }
};
\`\`\`

You can now use the elegant \`useActionState\` hook:

\`\`\`typescript
const [state, formAction, isPending] = useActionState(
  async (prevState, formData) => {
    try {
      await updateProfile(formData);
      return { success: true, error: null };
    } catch (err) {
      return { success: false, error: err.message };
    }
  },
  { success: false, error: null }
);
\`\`\`

### Dynamic Optimistic Updates
With the new \`useOptimistic\` hook, creating responsive UI interactions is simpler than ever. You can instantly render expected success states in chat, lists, or toggles, automatically rolling back to the original database state if the background network action fails.

### Summary
React 19 reduces custom hook boilerplate, improves form management, and speeds up applications by removing traditional rendering optimization traps.`,
    date: 'June 28, 2026',
    readTime: '6 min read',
    category: 'Frontend',
    tags: ['React', 'Frontend', 'Web Development', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mongodb-schemas-design',
    title: 'Designing Resilient MongoDB Schemas: 5 Anti-Patterns to Avoid',
    summary: 'Learn standard database modeling best practices, from referencing vs embedding documents to indexing tricks for high throughput.',
    content: `## Introduction
MongoDB is incredibly flexible, but its schema-less nature is a double-edged sword. Poor initial layout decisions often result in performance degradation, slow queries, and data inconsistencies. Let’s explore five critical schema design anti-patterns.

### 1. Unbounded Array Growth (The Embedding Trap)
Embedding sub-documents is excellent, but letting arrays grow indefinitely is dangerous.
- **Problem**: MongoDB documents have a strict 16MB maximum size limit. If you store chat messages directly inside a "Room" document array, your app will eventually crash.
- **Solution**: Switch to references (bucket pattern) or split them into a separate "Messages" collection, referencing the Room ID.

### 2. Over-Indexing & Missing Vital Indexes
Indices speed up searches but slow down insert and update operations because indexes must be updated on every write.
- **Best Practice**: Only index fields that appear frequently in query predicates. Leverage compound indexes for frequent multi-field lookups, and always ensure index order aligns with your query filters.

### 3. Neglecting Aggregation Performance
Running complex client-side calculations is a bottleneck. Let MongoDB do the heavy lifting.
- **Advice**: Use MongoDB Aggregation Pipelines to group, filter, and count records server-side. Additionally, for massive datasets, consider storing pre-aggregated metrics.

### 4. Poor Reference Strategies (DBRefs vs Manual References)
Avoid DBRefs unless you absolutely must query documents across multiple database instances.
- **Best Practice**: Use standard manual ObjectIDs as references. They are highly efficient, fully supported by Mongoose, and maintain standard database sizing.

### 5. Ignoring Schema Validation
Yes, MongoDB is document-flexible, but your backend code should not be chaotic.
- **Advice**: Always implement Mongoose models with strict type requirements, pre-save sanitizations, and field validations, or employ JSON Schema Validation directly in MongoDB for enterprise resilience.`,
    date: 'May 14, 2026',
    readTime: '8 min read',
    category: 'Database',
    tags: ['MongoDB', 'Backend', 'Database', 'MERN'],
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'jwt-auth-best-practices',
    title: 'The Developer’s Guide to Secure JWT Authentication & Refresh Tokens',
    summary: 'An architectural deep dive into securely storing JWTs, handling logout revoking, and writing automatic token refresh layers.',
    content: `## Introduction
User security is the foundation of any professional web application. In the MERN stack, JSON Web Tokens (JWT) are the standard for authorization. But are you storing and refreshing them securely?

### The Core Vulnerability: LocalStorage Storage
Storing secret keys or JWT access tokens in browser \`localStorage\` is an invitation to Cross-Site Scripting (XSS) attacks. If an attacker injects a malicious script, they can instantly read your local storage.

### The Gold Standard: HTTP-Only Cookies
Access and Refresh tokens should be issued by your Express server in secure cookies:
- **HttpOnly**: Prevents JavaScript access entirely.
- **Secure**: Ensures cookies are only sent over encrypted HTTPS connections.
- **SameSite=Strict**: Protects against Cross-Site Request Forgery (CSRF).

### Implementing Refresh Token Flows
1. **Access Token**: Short lifespan (e.g., 15 minutes). Sent with each API request header or cookie.
2. **Refresh Token**: Long lifespan (e.g., 7 days). Stored in a database and sent in an HttpOnly cookie to a specialized \`/api/auth/refresh\` endpoint.
3. **The Cycle**: When the access token expires, the client frontend automatically invokes the refresh endpoint in the background, receiving a brand new access token without interrupting the user.

### Token Revocation & Logout
To invalidate a user session securely, remove the cookie on logout and delete the refresh token document from your MongoDB storage. This guarantees that compromised tokens cannot be re-used to fetch active data.`,
    date: 'April 03, 2026',
    readTime: '10 min read',
    category: 'Security',
    tags: ['Node.js', 'Express.js', 'Security', 'Authentication'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  }
];

export const SKILLS_DATA: Skill[] = [
  // Frontend
  { name: 'React.js', level: 95, category: 'Frontend', iconName: 'Code' },
  { name: 'TypeScript', level: 90, category: 'Frontend', iconName: 'Cpu' },
  { name: 'Next.js', level: 85, category: 'Frontend', iconName: 'Globe' },
  { name: 'Redux Toolkit', level: 88, category: 'Frontend', iconName: 'Layers' },
  { name: 'Tailwind CSS', level: 96, category: 'Frontend', iconName: 'Palette' },
  { name: 'Framer Motion', level: 80, category: 'Frontend', iconName: 'Activity' },

  // Backend
  { name: 'Node.js', level: 92, category: 'Backend', iconName: 'Server' },
  { name: 'Express.js', level: 94, category: 'Backend', iconName: 'Terminal' },
  { name: 'RESTful APIs', level: 95, category: 'Backend', iconName: 'Network' },
  { name: 'GraphQL / Apollo', level: 78, category: 'Backend', iconName: 'GitBranch' },
  { name: 'Socket.io', level: 85, category: 'Backend', iconName: 'MessageSquare' },

  // Mobile
  { name: 'React Native', level: 88, category: 'Mobile', iconName: 'Smartphone' },
  { name: 'Expo', level: 90, category: 'Mobile', iconName: 'Zap' },

  // Tools & DevOps
  { name: 'MongoDB / Mongoose', level: 93, category: 'Tools & DevOps', iconName: 'Database' },
  { name: 'Git & GitHub', level: 95, category: 'Tools & DevOps', iconName: 'GitMerge' },
  { name: 'Docker', level: 75, category: 'Tools & DevOps', iconName: 'Container' },
  { name: 'CI/CD Pipelines', level: 72, category: 'Tools & DevOps', iconName: 'RefreshCw' },
  { name: 'AWS (S3, EC2)', level: 80, category: 'Tools & DevOps', iconName: 'Cloud' }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'exp-1',
    role: 'Lead MERN Stack Developer',
    company: 'Synergy Tech Solutions',
    period: '2024 - Present',
    description: [
      'Architected and deployed modular enterprise web systems using the complete MongoDB, Express, React, and Node.js suite.',
      'Boosted frontend rendering speed by 40% through custom hook integrations and React 19 lazy-loading components.',
      'Supervised a team of 5 developers, enforcing strict pull request pipelines and Jest unit-testing workflows.',
      'Implemented real-time dashboard visualization platforms using Recharts, WebSockets, and Redis cluster caching.'
    ],
    type: 'work'
  },
  {
    id: 'exp-2',
    role: 'Full Stack & React Native Developer',
    company: 'AppVantage Software Studio',
    period: '2022 - 2024',
    description: [
      'Designed cross-platform mobile apps using React Native and Expo with native GPS sensor tracks, offline sync caches, and Stripe payment modules.',
      'Maintained 99.9% uptime for backend Express API services by migrating route layers to isolated PM2 micro-nodes.',
      'Constructed responsive, modern SaaS dashboard user interfaces in Tailwind CSS and Redux Toolkit.'
    ],
    type: 'work'
  },
  {
    id: 'exp-3',
    role: 'Associate Developer & Intern',
    company: 'PixelPerfect Web Lab',
    period: '2021 - 2022',
    description: [
      'Created custom responsive static and dynamic web interfaces for international clients in React and pure CSS.',
      'Learned schema validation methods in MongoDB using Mongoose and populated endpoints for Express backend routers.',
      'Helped write comprehensive documentation and set up automated Postman API validation suites.'
    ],
    type: 'work'
  },
  {
    id: 'edu-1',
    role: 'Bachelor of Science in Computer Science',
    company: 'Apex National University of Technology',
    period: '2018 - 2022',
    description: [
      'Graduated with Honors. Specialized in Software Engineering and Database Management Systems.',
      'Acquired strong knowledge of Data Structures, OOP, Systems Architecture, and Network Security.',
      'Completed a Senior Capstone Project: A real-time geo-tracking logistics and routing mobile app.'
    ],
    type: 'education'
  }
];
