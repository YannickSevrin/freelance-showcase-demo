"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutIntroSection() {
  return (
    <section className="px-6 md:px-20 py-16 bg-white text-black">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Demo Developer Profile 👋</h2>
          <p className="text-lg text-gray-700">
            This is a demonstration of a freelance developer showcase website built with modern technologies.
            <br /><br />
            This template demonstrates how to present skills, projects, and services in a professional and visually appealing way using React, Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>

        <motion.div 
          className="w-60 h-60 relative rounded-full overflow-hidden border-4 border-black shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Image
            src="/images/about/portrait.png"
            alt="Portrait"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}