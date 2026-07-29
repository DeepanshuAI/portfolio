// =============================================
// Portfolio Data — All content lives here.
// Update this file with your real information.
// =============================================

import resumePdf from '../assets/Deepanshu-Full stack developer.pdf';
import amrutamImg from '../assets/amrutam-pharmaceuticals.png';
import studentMgmtImg from '../assets/student-management-system.png';
import flowPilotImg from '../assets/flow-pilot.png';
import tradingBotImg from '../assets/trading-bot.webp';
import aiExportImg from '../assets/ai-export-system.png';

export const personalInfo = {
  name: 'Deepanshu Yadav',
  firstName: 'Deepanshu',
  lastName: 'Yadav',
  title: 'Full Stack Developer',
  tagline: 'Crafting Scalable Systems & High-Impact Digital Experiences',
  shortBio:
    "I'm a Full Stack Developer who architects and builds production-grade web applications — from real-time platforms to AI-driven tools — with a focus on performance, clean code, and beautiful interfaces.",
  location: 'India',
  email: 'Deepanshu4551@gmail.com',
  availableForWork: true,
  resume: resumePdf,
  github: 'https://github.com/DepanshuAI',
  linkedin: 'https://www.linkedin.com/in/deepanshu-yadav-484a82270/',
  twitter: '',
};

export const stats = [
  { value: '2+', label: 'Years of Experience' },
  { value: '5+', label: 'Projects Delivered' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '1k+', label: 'Monthly Active Users' },
];

export const aboutHighlights = [
  {
    icon: '⚡',
    title: 'Full Stack Architecture',
    description: 'End-to-end system design — from scalable APIs to performant UIs.',
  },
  {
    icon: '🔥',
    title: 'Real-Time Systems',
    description: 'WebSocket, SSE, and event-driven systems built for high concurrency.',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    description: 'Integrating LLMs, voice synthesis, and intelligent automation pipelines.',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'Containerized deployments, CI/CD pipelines, and cloud-native architecture.',
  },
];

export const skills = [
  {
    category: 'Frontend',
    color: '#6366F1',
    items: [
      { name: 'React', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Framer Motion', level: 'Advanced' },
      { name: 'Redux / Zustand', level: 'Advanced' },
    ],
  },
  {
    category: 'Backend',
    color: '#06B6D4',
    items: [
      { name: 'Node.js', level: 'Expert' },
      { name: 'Express', level: 'Expert' },
      { name: 'NestJS', level: 'Advanced' },
      { name: 'REST APIs', level: 'Expert' },
      { name: 'GraphQL', level: 'Advanced' },
      { name: 'WebSockets', level: 'Advanced' },
    ],
  },
  {
    category: 'Databases',
    color: '#8B5CF6',
    items: [
      { name: 'PostgreSQL', level: 'Expert' },
      { name: 'MongoDB', level: 'Expert' },
      { name: 'Redis', level: 'Advanced' },
      { name: 'Prisma ORM', level: 'Expert' },
      { name: 'Mongoose', level: 'Advanced' },
      { name: 'MySQL', level: 'Intermediate' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: '#F59E0B',
    items: [
      { name: 'Docker', level: 'Advanced' },
      { name: 'AWS (EC2/S3)', level: 'Advanced' },
      { name: 'Firebase', level: 'Expert' },
      { name: 'GitHub Actions', level: 'Advanced' },
      { name: 'Nginx', level: 'Advanced' },
      { name: 'Linux', level: 'Intermediate' },
    ],
  },
  {
    category: 'AI & Tools',
    color: '#10B981',
    items: [
      { name: 'OpenAI API', level: 'Advanced' },
      { name: 'LangChain', level: 'Intermediate' },
      { name: 'Langfuse', level: 'Advanced' },
      { name: 'ElevenLabs', level: 'Advanced' },
      { name: 'Pinecone', level: 'Intermediate' },
      { name: 'Hugging Face', level: 'Intermediate' },
    ],
  },
  {
    category: 'Languages',
    color: '#EC4899',
    items: [
      { name: 'JavaScript', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Python', level: 'Advanced' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'Bash', level: 'Intermediate' },
      { name: 'HTML / CSS', level: 'Expert' },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Telemedicine Platform',
    subtitle: 'Real-Time Healthcare Consultation System',
    description:
      'A HIPAA-compliant telemedicine platform enabling real-time video consultations between patients and doctors, automated prescription management, and seamless electronic health records.',
    problem:
      'Healthcare providers needed a scalable platform to deliver remote consultations securely while maintaining compliance and integrating with existing EHR systems.',
    features: [
      'WebRTC real-time video & voice consultations',
      'HIPAA-compliant patient data management',
      'Automated prescription dispatch system',
      'Integrated electronic health records (EHR)',
      'Role-based access control (Doctors, Patients, Admin)',
    ],
    tech: ['React', 'Node.js', 'WebRTC', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    color: '#6366F1',
    gradient: 'from-indigo-500/20 to-cyan-500/20',
    github: 'https://github.com/DepanshuAI',
    live: 'https://amrutam-pharmaceuticals-black.vercel.app/',
    category: 'Healthcare',
    image: amrutamImg,
  },
  {
    id: 2,
    title: 'Student Management System',
    subtitle: 'Enterprise University Academic Portal',
    description:
      'A comprehensive academic management platform for universities, handling course registration, grade analytics, scheduling, and role-based administrative controls at scale.',
    problem:
      'University administrators needed a unified system to replace fragmented spreadsheets and legacy software for managing thousands of students across multiple departments.',
    features: [
      'Multi-role system: Students, Faculty, Admin, Registrar',
      'Course registration with conflict detection',
      'Real-time grade analytics dashboard',
      'Automated semester scheduling engine',
      'PDF transcript & certificate generation',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Prisma', 'TypeScript', 'Docker'],
    color: '#06B6D4',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    github: 'https://github.com/DepanshuAI',
    live: '#',
    category: 'EdTech',
    image: studentMgmtImg,
  },
  {
    id: 3,
    title: 'FlowPilot',
    subtitle: 'AI-Powered Workflow Automation & Orchestration',
    description:
      'An intelligent workflow automation platform for visually building, orchestrating complex AI pipelines, multi-step actions, and task execution with real-time state tracking.',
    problem:
      'Development teams struggle with building, tracking, and debugging multi-step AI workflow chains across multiple APIs and asynchronous tasks.',
    features: [
      'Visual node-based workflow orchestration',
      'Asynchronous task execution & state tracking',
      'Multi-model LLM integration & prompt routing',
      'Real-time execution metrics & log analysis',
      'Responsive web portal with interactive UI',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind', 'Vite'],
    color: '#8B5CF6',
    gradient: 'from-violet-500/20 to-pink-500/20',
    github: 'https://github.com/DeepanshuAI/FlowPilot',
    live: 'https://flow-pilot-pi.vercel.app/',
    category: 'AI Automation',
    image: flowPilotImg,
  },
  {
    id: 4,
    title: 'Binance Trading Bot',
    subtitle: 'High-Frequency Automated Crypto Trading Engine',
    description:
      'A production-grade algorithmic trading bot for Binance with WebSocket order execution, multi-strategy backtesting, risk management, and a real-time performance dashboard.',
    problem:
      'Crypto traders needed an automated system capable of executing microsecond-precision orders based on technical indicators with strict risk controls and a data-driven feedback loop.',
    features: [
      'WebSocket-driven real-time order execution',
      'Multi-strategy automated backtesting engine',
      'Dynamic risk management (stop-loss, take-profit)',
      'Real-time P&L performance dashboard',
      'Email / Telegram alert notifications',
    ],
    tech: ['Python', 'WebSockets', 'Binance API', 'PostgreSQL', 'Redis', 'React', 'Docker'],
    color: '#F59E0B',
    gradient: 'from-amber-500/20 to-orange-500/20',
    github: 'https://github.com/DeepanshuAI/Binance-TradinBot',
    live: '#',
    category: 'FinTech',
    image: tradingBotImg,
  },
  {
    id: 5,
    title: 'AI-Export-Automation-System',
    subtitle: 'Automated Export Documentation System powered by AI',
    description:
      'This system streamlines the entire export documentation workflow using advanced AI and automation. It handles everything from document generation to compliance checks, ensuring accuracy and saving valuable time for export businesses.',
    problem:
      'Export businesses face complex and time-consuming documentation processes, often leading to errors and delays.',
    features: [
      'AI-powered document generation',
      'Automated compliance verification',
      'Workflow management for export teams',
      'Data extraction from various formats',
      'Secure document storage & retrieval',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe', 'Firebase', 'Tailwind'],
    color: '#10B981',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    github: 'https://github.com/DeepanshuAI/AI-Export-Automation-System',
    live: '#',
    category: 'AI Workflow',
    image: aiExportImg,
  },
];


// No experience entries yet — add your real work history here.
// Each entry needs: id, role, company, companyUrl, period, duration,
// type, location, description, achievements (array), tech (array), color.
export const experience = [];


export const techStackPills = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'Python', color: '#3776AB' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'Prisma', color: '#2D3748' },
  { name: 'Git', color: '#F05032' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'GraphQL', color: '#E10098' },
  { name: 'Express', color: '#FFFFFF' },
  { name: 'Linux', color: '#FCC624' },
];
