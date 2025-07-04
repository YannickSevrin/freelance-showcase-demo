"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row h-[50vh] md:h-[70vh] w-full items-center justify-between py-16 px-6 md:px-20 bg-black">
      {/* Left: Text */}

      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      />

       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 z-10" />
      <motion.div
        className="flex-1 text-center md:text-left z-20 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl text-white md:text-5xl font-extrabold mb-4 uppercase">
          Demo Freelance Website
        </h1>
        <p className="text-lg text-white mb-6">
          This is a demonstration showcase website built with Next.js & Tailwind CSS. Perfect template for freelancers and agencies.
        </p>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            Try Demo Contact
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}