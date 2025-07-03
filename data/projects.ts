export interface Project {
  title: string;
  description: string;
  image: string;
  slug?: string;
  link?: string;
  technologies?: string[];
}

export const projects: Project[] = [
  {
    title: "E-commerce Dashboard",
    description: "A modern admin dashboard for managing online stores with real-time analytics, inventory management, and customer insights.",
    image: "/images/hero-bg.png", // Using existing image as placeholder
    slug: "ecommerce-dashboard",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "PostgreSQL"]
  },
  {
    title: "Restaurant Booking App",
    description: "Full-stack restaurant reservation system with table management, online booking, and payment integration.",
    image: "/images/hero-bg.png", // Using existing image as placeholder
    slug: "restaurant-booking",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"]
  },
  {
    title: "Portfolio Website",
    description: "Minimalist portfolio website for a creative agency featuring smooth animations and responsive design.",
    image: "/images/hero-bg.png", // Using existing image as placeholder
    slug: "portfolio-website",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Fitness Tracker Mobile App",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and fitness goals with social features.",
    image: "/images/hero-bg.png", // Using existing image as placeholder
    slug: "fitness-tracker",
    technologies: ["React Native", "Firebase", "TypeScript", "Expo"]
  },
  {
    title: "Real Estate Platform",
    description: "Comprehensive real estate platform with property listings, virtual tours, and mortgage calculator.",
    image: "/images/hero-bg.png", // Using existing image as placeholder
    slug: "real-estate-platform",
    technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps API", "AWS"]
  },
  {
    title: "Task Management Tool",
    description: "Team collaboration tool with project management, time tracking, and real-time communication features.",
    image: "/images/hero-bg.png", // Using existing image as placeholder
    slug: "task-management",
    technologies: ["React", "Socket.io", "Node.js", "Redis", "PostgreSQL"]
  },
  {
    title: "Medical Appointment System",
    description: "Healthcare management system for scheduling appointments, managing patient records, and telemedicine.",
    image: "/images/hero-bg.png", // Using existing image as placeholder
    slug: "medical-appointment",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js", "Tailwind CSS"]
  },
  {
    title: "Crypto Trading Dashboard",
    description: "Real-time cryptocurrency trading dashboard with portfolio tracking and market analysis tools.",
    image: "/images/hero-bg.png", // Using existing image as placeholder
    slug: "crypto-dashboard",
    technologies: ["React", "WebSocket", "Chart.js", "Node.js", "CoinGecko API"]
  },
  {
    title: "Learning Management System",
    description: "Educational platform with course management, video streaming, quizzes, and progress tracking.",
    image: "/images/hero-bg.png", // Using existing image as placeholder
    slug: "learning-management",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary", "Stripe"]
  },
  {
    title: "Social Media Analytics",
    description: "Analytics platform for social media managers with automated reporting and content scheduling.",
    image: "/images/hero-bg.png", // Using existing image as placeholder
    slug: "social-analytics",
    technologies: ["React", "Python", "Django", "PostgreSQL", "Twitter API"]
  },
  {
    title: "Event Management Platform",
    description: "Complete event management solution with ticket sales, attendee management, and live streaming.",
    image: "/images/hero-bg.png", // Using existing image as placeholder
    slug: "event-management",
    technologies: ["Next.js", "Stripe", "WebRTC", "PostgreSQL", "Tailwind CSS"]
  },
  {
    title: "Inventory Management System",
    description: "Warehouse management system with barcode scanning, automated reordering, and supplier integration.",
    image: "/images/hero-bg.png", // Using existing image as placeholder
    slug: "inventory-management",
    technologies: ["Vue.js", "Express", "MongoDB", "Chart.js", "PWA"]
  }
];

// Helper function to get featured projects (first 6)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 6);
};

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by technology
export const getProjectsByTechnology = (tech: string): Project[] => {
  return projects.filter(project => 
    project.technologies?.some(technology => 
      technology.toLowerCase().includes(tech.toLowerCase())
    )
  );
}; 