"use client";

import { motion } from "framer-motion";
import { SiNextdotjs, SiTailwindcss, SiReact, SiFramer, SiTypescript } from "react-icons/si";

const tools = [
  { name: "Next.js", icon: <SiNextdotjs size={32} /> },
  { name: "React", icon: <SiReact size={32} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
  { name: "TypeScript", icon: <SiTypescript size={32} /> },
  { name: "Framer Motion", icon: <SiFramer size={32} /> },
];

export default function ToolsSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Demo Tech Stack</h2>
        <p className="text-gray-600">Technologies used to build this demonstration website.</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center gap-2 text-center hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
          >
            <div className="text-4xl">{tool.icon}</div>
            <span className="text-sm font-medium text-gray-700">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}