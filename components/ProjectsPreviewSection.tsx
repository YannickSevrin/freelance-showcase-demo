
"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-commerce Store",
    description: "A full-featured e-commerce site built with Next.js, Stripe, and Tailwind.",
    image: "/projects/ecommerce.png",
    href: "/projects#ecommerce"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase design and development work.",
    image: "/projects/portfolio.png",
    href: "/projects#portfolio"
  }
];

export default function ProjectsPreviewSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-10">Latest Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link key={index} href={project.href}>
            <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition hover:scale-105 bg-white">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}