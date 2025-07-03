"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutIntroSection() {
  return (
    <section className="px-6 md:px-20 py-16 bg-white text-black">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">I’m Yannick 👋</h2>
          <p className="text-lg text-gray-700">
            I’m a passionate frontend developer focused on building modern, performant and elegant web experiences.
            <br /><br />
            I enjoy creating websites that are both functional and visually appealing. I'm currently working with technologies like React, Next.js, Tailwind CSS and more.
          </p>
        </div>

        <div className="w-60 h-60 relative rounded-full overflow-hidden border-4 border-black shadow-lg">
          <Image
            src="/images/about/portrait.png"
            alt="Portrait"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}