export const personal = {
  name: 'Nour Ahmed Ibrahim',
  role: 'Junior .NET Backend Developer',
  email: 'nouryahmed607@gmail.com',
  location: 'Egypt',
  github: 'https://github.com/nonoriz',
  linkedin: 'https://www.linkedin.com/in/nour-ahmed-8a4046257',
  cv: '/Nour_Ahmed_CV.pdf',
};

export const skills = [
  {
    title: 'Backend Development',
    items: [
      'ASP.NET Core',
      'ASP.NET Core MVC',
      'ASP.NET Core Web API',
      'RESTful APIs',
      'JWT Authentication',
      'ASP.NET Identity',
      'Dependency Injection',
      'LINQ',
    ],
  },
  {
    title: 'Databases & Data Access',
    items: ['SQL Server', 'PostgreSQL', 'Database Design', 'Entity Framework Core', 'Dapper', 'Repository Pattern', 'Unit of Work'],
  },
  {
    title: 'Architecture',
    items: ['Clean Architecture', 'Onion Architecture', 'Three-Layer Architecture', 'SOLID Principles', 'Design Patterns', 'OOP'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker Basics', 'Swagger', 'Postman', 'AutoMapper', 'Unit Testing'],
  },
  {
    title: 'Frontend Basics',
    items: ['HTML', 'CSS', 'Bootstrap', 'Razor Views', 'React Basics'],
  },
];

export const featuredProject = {
  name: '7wshly',
  subtitle: 'Personal Finance & Budgeting App',
  stack: ['Flutter', 'Django REST Framework', 'PostgreSQL', 'JWT'],
  description:
    'A personal finance and budgeting application that helps users manage income, expenses, savings goals, and weekly or monthly financial plans.',
  details:
    'The system supports smart expense tracking, receipt OCR scanning, voice expense entry, savings goals, financial analytics, smart notifications, offers, and market-price tracking to help users make smarter financial decisions.',
  features: [
    'Smart expense tracking',
    'Receipt OCR scanning',
    'Voice expense entry',
    'Savings goals',
    'Financial analytics',
    'Smart notifications',
    'Offers system',
    'Market price tracking',
  ],
  built: [
    'Built secure REST APIs using Django REST Framework',
    'Implemented JWT-based authentication',
    'Designed backend logic for budget planning and financial tracking',
    'Added rule-based recommendations for smarter financial decisions',
    'Worked with PostgreSQL for database design and storage',
  ],
  links: {
    github: 'https://github.com/nonoriz',
    demo: '#contact',
  },
  screens: [
    {
      title: 'Dashboard',
      caption: 'Mobile dashboard for balance, income, expenses, and recent transactions.',
      src: '/assets/7wshly-ui-dashboard.png',
    },
    {
      title: 'Receipt OCR',
      caption: 'Receipt capture screen for camera/gallery upload and expense extraction.',
      src: '/assets/7wshly-ui-receipt.png',
    },
    {
      title: 'Offers Feed',
      caption: 'Offers screen with search, category filtering, saving, hiding, and pagination.',
      src: '/assets/7wshly-ui-offers.png',
    },
  ],
};

export const projects = [
  {
    name: 'E-Commerce Web API',
    description:
      'A modular RESTful API for an e-commerce system with products, orders, basket, authentication, and payments.',
    stack: ['ASP.NET Core Web API', 'EF Core', 'SQL Server', 'ASP.NET Identity', 'JWT'],
    highlights: ['Onion Architecture', 'Repository Pattern', 'Unit of Work', 'Swagger & Postman testing'],
    link: 'https://github.com/nonoriz/E-Commerce-API',
    buttonLabel: 'View GitHub',
  },
  {
    name: 'Gym Management System',
    description:
      'A web-based gym management system for managing members, trainers, sessions, and memberships.',
    stack: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Identity', 'Razor Views'],
    highlights: ['CRUD operations', 'Three-Layer Architecture', 'Repository Pattern', 'Bootstrap UI'],
    link: 'https://github.com/nonoriz/Gym-Management-System-MVC',
    buttonLabel: 'View GitHub',
  },
  {
    name: 'Hospital Management System',
    description:
      'ASP.NET Core MVC project visible on GitHub, useful as an additional proof of .NET practice and backend learning.',
    stack: ['ASP.NET Core MVC', 'JWT', 'OAuth', 'C#'],
    highlights: ['MVC structure', 'Authentication focus', 'Real-world domain modeling'],
    link: 'https://github.com/nonoriz/hospital-management-system',
    buttonLabel: 'View GitHub',
  },
  {
    name: 'Wizard Script Compiler',
    description:
      'A wizard-themed educational compiler that translates a custom beginner-friendly scripting language into C++ while demonstrating the main compiler phases.',
    stack: ['Python', 'Compiler Design', 'Tkinter', 'C++ Code Generation'],
    highlights: [
      'Scanner / Lexical Analysis',
      'Recursive Descent Parser',
      'Semantic Analyzer',
      'Symbol Table & Type Checking',
      'C++ Code Generation',
      'Tkinter GUI Compiler',
    ],
    link: '#contact',
    buttonLabel: 'Request Demo',
  },
  {
    name: 'Student Complaint Management Platform',
    description:
      'A full-stack platform for students and administrators to submit, track, and manage complaints.',
    stack: ['Flask', 'React', 'PostgreSQL', 'Docker'],
    highlights: ['REST APIs', 'Role-based access', 'Protected routes', 'Team collaboration'],
    link: 'https://github.com/nonoriz',
    buttonLabel: 'View Project',
  },
];

export const experience = [
  {
    title: '.NET Project Developer',
    place: 'Freelance',
    period: 'Freelance Project',
    text:
      'Worked on a .NET project as a freelance developer, applying backend development skills, database integration, structured business logic, and clean project organization to deliver client-focused features.',
  },
  {
    title: 'IT Fundamentals Training',
    place: 'Information Technology Institute (ITI)',
    period: 'Jul 2025 · 60 Hours',
    text:
      'Completed IT Fundamentals training covering Windows 10 basics, network fundamentals, and security fundamentals through a 60-hour program.',
  },
  {
    title: 'ASP.NET Trainee',
    place: 'Route Academy',
    period: '2023 — Present',
    text:
      'Completed intensive backend training covering ASP.NET Core, MVC, Web API, database design, design patterns, Clean Architecture, Repository Pattern, Unit of Work, EF Core, and SQL Server.',
  },
  {
    title: 'Competitive Programmer',
    place: 'ICPC Trainee',
    period: '2022 — 2024',
    text:
      'Solved 100+ algorithmic problems using C++ with focus on analytical thinking, data structures, algorithms, and performance optimization.',
  },
];
