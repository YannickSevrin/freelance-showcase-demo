import { PageHeader, ProjectCard } from "@/components";
import { projects } from "@/data/projects";

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
    </div>
  );
}