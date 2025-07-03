import { PageHeader, ProjectCard } from "@/components";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="My Projects"
        description="Some of the work I’m proud of."
      />

      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 uppercase">Featured Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A collection of web applications built with modern technologies including Next.js, React, and various backend solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}