"use client";

import { motion } from "framer-motion";

export default function InfoSection() {
    return (
      <section className="py-16 px-6 md:px-20 bg-black text-center">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-2xl font-bold mb-4 text-white uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Demo Showcase Website
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-white text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            This is a demonstration of a modern freelance portfolio website. Built with Next.js 15, Tailwind CSS, and Framer Motion, 
            it showcases how to create professional web experiences with clean code and beautiful design.
          </motion.p>
        </motion.div>
      </section>
    );
  }