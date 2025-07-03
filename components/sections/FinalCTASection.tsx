"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-black text-white text-center">
        <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase">
        Have a project in mind?
      </h2>
      <p className="mb-6 text-gray-300 max-w-2xl mx-auto">
        Let’s build something amazing together. Reach out and let’s talk about your vision.
      </p>
      <Link href="/contact">
        <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 hover:scale-105 transition">
          Contact Me
        </button>
      </Link>
      </motion.div>
    </section>
  );
}