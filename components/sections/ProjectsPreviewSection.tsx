
"use client";

import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "../cards/ProjectCard";
import Link from "next/link";

export default function ProjectsPreviewSection() {
  const featuredProjects = getFeaturedProjects().slice(0, 4); // Show first 4 projects

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-10 uppercase">Latest Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => (
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
      
      {/* View All Projects Link */}
      <div className="mt-12">
        <Link 
          href="/projects"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg transition font-medium hover:scale-105"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}