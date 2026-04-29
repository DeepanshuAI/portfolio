export const personalInfo = {
  name: 'Deepanshu Yadav',
  title: 'Full-Stack Developer',
  taglines: ['Building Modern Web Apps', 'MERN Stack Enthusiast', 'UI/UX Focused Developer', 'Open Source Contributor'],
  bio: `I'm a passionate full-stack developer with a love for building beautiful, performant web applications. With expertise in the MERN stack and a keen eye for design, I craft experiences that are both functional and delightful.`,
  bio2: `When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sketching UI concepts. I believe great software is built at the intersection of engineering and empathy.`,
  email: 'Deepanshu4551@gmail.com',
  github: 'https://github.com/DeepanshuAI',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  resumeUrl: '/resume.pdf',
  location: 'Gurugram, Haryana, India',
  available: true,
};

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'SiReact', color: '#61DAFB' },
      { name: 'Next.js', icon: 'SiNextdotjs', color: '#ffffff' },
      { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
      { name: 'Framer Motion', icon: 'SiFramer', color: '#BB4B96' },
      { name: 'Redux', icon: 'SiRedux', color: '#764ABC' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
      { name: 'Express', icon: 'SiExpress', color: '#ffffff' },
      { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
      { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1' },
      { name: 'REST APIs', icon: 'SiPostman', color: '#FF6C37' },
      { name: 'GraphQL', icon: 'SiGraphql', color: '#E10098' },
    ],
  },
  {
    category: 'Tools & DevOps',
    items: [
      { name: 'Git', icon: 'SiGit', color: '#F05032' },
      { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
      { name: 'AWS', icon: 'SiAmazon', color: '#FF9900' },
      { name: 'Vercel', icon: 'SiVercel', color: '#ffffff' },
      { name: 'Figma', icon: 'SiFigma', color: '#F24E1E' },
      { name: 'Linux', icon: 'SiLinux', color: '#FCC624' },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Student Management System',
    description:
      'A full-stack MERN application for managing student records, attendance, grades and analytics with JWT authentication and role-based access control.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=60',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    title: 'Library Management System',
    description:
      'Admin-controlled library system with book issuance workflow, due-date tracking, and real-time search. Built with MERN stack and Recharts analytics.',
    tags: ['React', 'Express', 'MongoDB', 'Recharts', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&auto=format&fit=crop&q=60',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 3,
    title: 'SaaS Dashboard UI',
    description:
      'A modern SaaS-style analytics dashboard with dark mode, glassmorphism design, interactive charts, and fully responsive layout built with React.',
    tags: ['React', 'Vite', 'Framer Motion', 'Tailwind', 'Recharts'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    color: 'from-purple-500 to-violet-600',
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    description:
      'Feature-rich e-commerce platform with product management, cart, Stripe payments, and admin panel. Real-time inventory with WebSocket updates.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=60',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    color: 'from-orange-500 to-pink-600',
  },
];

export const stats = [
  { label: 'Projects Built', value: '20+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Years Learning', value: '3+' },
  { label: 'GitHub Commits', value: '500+' },
];
