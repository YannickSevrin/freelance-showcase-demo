import { Footer, PageHeader, ProjectCard } from "@/components";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Projects",
  description: "Explore a curated collection of demo projects showcasing various web development techniques, technologies, and design patterns. Examples of modern web applications built with React, Next.js, and more.",
  keywords: ["demo projects", "web development portfolio", "React projects", "Next.js examples", "project showcase", "web development demos"],
  openGraph: {
    title: "Demo Projects | YS-DEMO Portfolio Showcase",
    description: "Browse through a collection of demonstration projects featuring modern web development practices, responsive designs, and cutting-edge technologies.",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "YS-DEMO Projects Portfolio Demo",
      },
    ],
  },
  twitter: {
    title: "Demo Projects | YS-DEMO Portfolio Showcase", 
    description: "Browse through a collection of demonstration projects featuring modern web development practices, responsive designs, and cutting-edge technologies.",
  },
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Demo Projects"
        description="Sample project portfolio showcasing various types of web applications and designs."
      />

      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 uppercase">Example Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This is a demonstration of how to showcase a project portfolio. These are example projects showing different types of web applications and design styles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}