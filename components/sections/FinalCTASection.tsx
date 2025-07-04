"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-black text-white text-center">
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-6 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Like this demo website?
        </motion.h2>
        <motion.p 
          className="mb-6 text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          This is a demonstration of a modern freelance website. Feel free to explore all the features and test the contact form in demo mode.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/contact">
            <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 hover:scale-105 transition">
              Test Contact Form
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}