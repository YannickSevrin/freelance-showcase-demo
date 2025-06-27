"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {

  return (
    <div className="w-full bg-black py-16 flex flex-col items-center justify-center">
      <motion.div className="text-center"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
        >
        <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
        <p className="text-lg text-white">{description}</p>
      </motion.div>
    </div>
  );
}