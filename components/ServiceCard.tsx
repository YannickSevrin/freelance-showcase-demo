"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const content = (
    <motion.div
      className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition hover:scale-105"
      initial={{ opacity: 0, filter: "blur(2px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-center mb-4">
        <div className="text-2xl mr-3 text-black-600">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}