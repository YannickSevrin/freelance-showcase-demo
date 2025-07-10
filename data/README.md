# 🗄️ Project Data

> 📊 **Portfolio data management system** with fictional projects for demonstration

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![JSON](https://img.shields.io/badge/JSON-Data-orange?style=for-the-badge&logo=json)](https://www.json.org/)

</div>

---

## 📋 **Data Structure**

### 🏗️ **TypeScript Interface**
```typescript
interface Project {
  title: string;           // 📝 Project title
  description: string;     // 📄 Detailed description
  image: string;          // 🖼️ Image URL
  slug?: string;          // 🔗 Unique URL identifier
  link?: string;          // 🌐 Project link
  technologies?: string[]; // 🛠️ Technologies used
}
```

### 📁 **Available Files**
- `projects.ts` - 📊 Complete project data
- Utility functions for filtering and retrieval

---

## 🎯 **Utility Functions**

### 📦 **Available Imports**
```typescript
import { 
  projects,              // 📊 All projects
  getFeaturedProjects,   // ⭐ Featured projects
  getProjectBySlug,      // 🔍 Search by slug
  getProjectsByTechnology // 🛠️ Filter by technology
} from '@/data/projects';
```

---

## 🚀 **Usage Examples**

### 1️⃣ **Display All Projects**
```typescript
import { projects } from '@/data/projects';
import ProjectCard from '@/components/cards/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            slug={project.slug}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}
```

### 2️⃣ **Featured Projects (First 6)**
```typescript
import { getFeaturedProjects } from '@/data/projects';

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          🌟 Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 3️⃣ **Get Project by Slug**
```typescript
import { getProjectBySlug } from '@/data/projects';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          🚫 Project Not Found
        </h1>
        <p className="text-gray-600 mt-4">
          The requested project does not exist or has been removed.
        </p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{project.description}</p>
      
      {project.technologies && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      
      {project.link && (
        <a 
          href={project.link}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          🔗 View Project
        </a>
      )}
    </div>
  );
}
```

### 4️⃣ **Filter by Technology**
```typescript
import { getProjectsByTechnology } from '@/data/projects';

export default function TechnologyFilter() {
  const reactProjects = getProjectsByTechnology('React');
  const nextjsProjects = getProjectsByTechnology('Next.js');
  const nodeProjects = getProjectsByTechnology('Node.js');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-12">
        <TechnologySection 
          title="⚛️ React Projects" 
          projects={reactProjects} 
        />
        <TechnologySection 
          title="🚀 Next.js Projects" 
          projects={nextjsProjects} 
        />
        <TechnologySection 
          title="🟢 Node.js Projects" 
          projects={nodeProjects} 
        />
      </div>
    </div>
  );
}
```

---

## 🎨 **Available Projects**

### 📊 **Complete Portfolio (12 Projects)**

| 🎯 **Project** | 🛠️ **Technologies** | 📱 **Type** |
|---------------|-------------------|-------------|
| **🛒 E-commerce Dashboard** | Next.js, TypeScript, Tailwind CSS | Web App |
| **🍽️ Restaurant Booking App** | React, Node.js, Express, MongoDB | Full Stack |
| **🎨 Portfolio Website** | Next.js, Framer Motion, Tailwind CSS | Website |
| **💪 Fitness Tracker Mobile** | React Native, Firebase | Mobile App |
| **🏠 Real Estate Platform** | Vue.js, Laravel, MySQL | Web Platform |
| **📋 Task Management Tool** | React, Socket.io, Node.js | Real-time App |
| **🏥 Medical Appointment** | Next.js, Prisma, PostgreSQL | Healthcare |
| **₿ Crypto Trading Dashboard** | React, WebSocket, Chart.js | Trading App |
| **🎓 Learning Management** | Next.js, Prisma, PostgreSQL | Education |
| **📈 Social Media Analytics** | React, Python, Django | Analytics |
| **🎉 Event Management** | Next.js, Stripe, WebRTC | Event Platform |
| **📦 Inventory Management** | Vue.js, Express, MongoDB | Business Tool |

### 🏷️ **Represented Technologies**
- 🌐 **Frontend**: React, Next.js, Vue.js, React Native
- 🔧 **Backend**: Node.js, Express, Laravel, Django
- 📊 **Databases**: MongoDB, PostgreSQL, MySQL
- 🎨 **Styling**: Tailwind CSS, Framer Motion
- 🔧 **Tools**: TypeScript, Prisma, WebSocket

---

## 🖼️ **Image Management**

### 📁 **Image Organization**
```
public/images/projects/
├── 🖼️ ecommerce-dashboard.jpg
├── 🖼️ restaurant-booking.jpg
├── 🖼️ portfolio-website.jpg
├── 🖼️ fitness-tracker.jpg
└── 🖼️ ...
```

### 🎨 **Recommended Image Sources**
```typescript
// 🌐 Placeholder services
const placeholderSources = {
  unsplash: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  picsum: "https://picsum.photos/800/600",
  placeholder: "https://via.placeholder.com/800x600"
};
```

### 🔧 **Image Optimization**
```typescript
// 📐 Recommended formats
const imageSpecs = {
  width: 800,        // 📏 Standard width
  height: 600,       // 📏 Standard height
  format: "WebP",    // 🗜️ Optimized format
  quality: 85        // 🎯 Recommended quality
};
```

---

## 🛠️ **Customization**

### 1️⃣ **Add a New Project**
```typescript
// 📝 In data/projects.ts
const newProject = {
  title: "🎯 My New Project",
  description: "Detailed description of my innovative project...",
  image: "/images/projects/my-project.jpg",
  slug: "my-new-project",
  link: "https://my-project.com",
  technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
};

// 📊 Add to array
export const projects = [...existingProjects, newProject];
```

### 2️⃣ **Modify Existing Data**
```typescript
// 🔧 Customize projects
const customizedProjects = projects.map(project => ({
  ...project,
  image: `/images/projects/${project.slug}.jpg`,
  technologies: [...project.technologies, "Custom Tech"]
}));
```

### 3️⃣ **Create Custom Functions**
```typescript
// 🎯 Custom filtering function
export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => 
    project.technologies?.some(tech => 
      tech.toLowerCase().includes(category.toLowerCase())
    )
  );
};

// 📊 Project statistics
export const getProjectStats = () => {
  const totalProjects = projects.length;
  const technologies = [...new Set(projects.flatMap(p => p.technologies || []))];
  const avgTechPerProject = technologies.length / totalProjects;
  
  return {
    totalProjects,
    uniqueTechnologies: technologies.length,
    avgTechPerProject: Math.round(avgTechPerProject * 100) / 100
  };
};
```

---

## 🎯 **Advanced Use Cases**

### 🔍 **Search and Filtering**
```typescript
// 🔎 Text search
export const searchProjects = (query: string) => {
  const searchTerm = query.toLowerCase();
  return projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.technologies?.some(tech => 
      tech.toLowerCase().includes(searchTerm)
    )
  );
};

// 🏷️ Multiple filters
export const filterProjects = (filters: {
  technologies?: string[];
  hasLink?: boolean;
  hasSlug?: boolean;
}) => {
  return projects.filter(project => {
    if (filters.technologies && filters.technologies.length > 0) {
      const hasMatchingTech = filters.technologies.some(tech =>
        project.technologies?.includes(tech)
      );
      if (!hasMatchingTech) return false;
    }
    
    if (filters.hasLink && !project.link) return false;
    if (filters.hasSlug && !project.slug) return false;
    
    return true;
  });
};
```

### 📊 **Analytics and Statistics**
```typescript
// 📈 Technology analysis
export const getTechnologyStats = () => {
  const techCount = {};
  projects.forEach(project => {
    project.technologies?.forEach(tech => {
      techCount[tech] = (techCount[tech] || 0) + 1;
    });
  });
  
  return Object.entries(techCount)
    .sort(([,a], [,b]) => b - a)
    .map(([tech, count]) => ({ technology: tech, count }));
};
```

---

## 📚 **Type Documentation**

### 🏷️ **Complete Interface**
```typescript
interface Project {
  title: string;                    // 📝 Project title (required)
  description: string;              // 📄 Description (required)
  image: string;                    // 🖼️ Image URL (required)
  slug?: string;                    // 🔗 URL identifier (optional)
  link?: string;                    // 🌐 External link (optional)
  technologies?: string[];          // 🛠️ Technologies (optional)
  category?: string;                // 🏷️ Category (optional)
  featured?: boolean;               // ⭐ Featured project (optional)
  completedAt?: Date;               // 📅 Completion date (optional)
  client?: string;                  // 👤 Client (optional)
  duration?: string;                // ⏱️ Project duration (optional)
}
```

### 🎯 **Utility Types**
```typescript
// 🔧 Derived types
type ProjectTitle = Project['title'];
type ProjectTech = NonNullable<Project['technologies']>[number];
type ProjectSlug = NonNullable<Project['slug']>;

// 📊 Filtering types
interface ProjectFilters {
  technologies?: string[];
  category?: string;
  featured?: boolean;
  hasLink?: boolean;
}

// 🎯 Search types
interface SearchOptions {
  query: string;
  fields?: (keyof Project)[];
  caseSensitive?: boolean;
}
```

---

<div align="center">

### 🎯 **Flexible and Extensible Data System**

**TypeScript structure** • **Utility functions** • **Advanced search** • **Smart filtering**

[📊 **View Data**](./projects.ts) | [🔍 **Explore Projects**](../components/cards/ProjectCard.tsx) | [🎨 **Customize**](../app/projects/page.tsx)

</div> 