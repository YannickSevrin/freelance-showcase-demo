// components/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug?: string;
  link?: string;
  technologies?: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  slug,
  link,
  technologies,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group hover:scale-105"
    >
      <div className="relative w-full h-52 md:h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>

        {technologies && (
          <ul className="flex flex-wrap gap-2 mt-2 text-xs text-gray-500">
            {technologies.map((tech, i) => (
              <li key={i} className="bg-gray-100 px-2 py-1 rounded">
                {tech}
              </li>
            ))}
          </ul>
        )}

        {(link || slug) && (
          <div className="pt-4">
            <Link
              href={link || `/projects/${slug}`}
              className="text-gray-700 font-medium hover:underline text-sm"
            >
              View Project →
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}