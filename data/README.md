# Project Data

This directory contains fake project data for showcasing portfolio projects.

## Structure

### `projects.ts`
Contains an array of project objects that match the `ProjectCard` interface:

```typescript
interface Project {
  title: string;
  description: string;
  image: string;
  slug?: string;
  link?: string;
  technologies?: string[];
}
```

## Usage Examples

### Import the data
```typescript
import { projects, getFeaturedProjects, getProjectBySlug } from '@/data/projects';
```

### Display all projects
```typescript
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
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
  );
}
```

### Display featured projects (first 6)
```typescript
import { getFeaturedProjects } from '@/data/projects';

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
```

### Get project by slug
```typescript
import { getProjectBySlug } from '@/data/projects';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return <div>Project not found</div>;
  }
  
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* ... rest of project details */}
    </div>
  );
}
```

### Filter projects by technology
```typescript
import { getProjectsByTechnology } from '@/data/projects';

const reactProjects = getProjectsByTechnology('React');
const nextjsProjects = getProjectsByTechnology('Next.js');
```

## Available Projects

1. **E-commerce Dashboard** - Next.js, TypeScript, Tailwind CSS
2. **Restaurant Booking App** - React, Node.js, Express, MongoDB  
3. **Portfolio Website** - Next.js, Framer Motion, Tailwind CSS
4. **Fitness Tracker Mobile App** - React Native, Firebase
5. **Real Estate Platform** - Vue.js, Laravel, MySQL
6. **Task Management Tool** - React, Socket.io, Node.js
7. **Medical Appointment System** - Next.js, Prisma, PostgreSQL
8. **Crypto Trading Dashboard** - React, WebSocket, Chart.js
9. **Learning Management System** - Next.js, Prisma, PostgreSQL
10. **Social Media Analytics** - React, Python, Django
11. **Event Management Platform** - Next.js, Stripe, WebRTC
12. **Inventory Management System** - Vue.js, Express, MongoDB

## Image Placeholders

All projects reference images in `/images/projects/` directory. You can:
- Add real project images to this directory
- Use placeholder services like Unsplash or Lorem Picsum
- Replace with actual project screenshots

Example placeholder URLs:
```
https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop
https://picsum.photos/800/600
```

## Customization

To add more projects, simply add new objects to the `projects` array in `projects.ts`. Each project should follow the same structure and include relevant technologies for your skill set. 