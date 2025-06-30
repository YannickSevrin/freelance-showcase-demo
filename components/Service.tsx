"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  price?: string;
  align?: "left" | "right";
  backgroundImage?: string;
  variant?: "light" | "dark";
  previousId?: string;
  nextId?: string;
}

export default function Service({
  id,
  title,
  description,
  features,
  price,
  align = "left",
  backgroundImage,
  variant = "dark",
  previousId,
  nextId,
}: ServiceProps) {
  const isLeft = align === "left";
  const isLight = variant === "light";

  return (
    <section
      id={id}
      onClick={() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }}
      className={`relative h-screen w-full flex items-center justify-center overflow-hidden cursor-pointer ${
        isLight ? "text-black bg-white" : "text-white bg-black"
      }`}
    >
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className={`absolute inset-0 ${
              isLight
                ? "bg-gradient-to-b from-gray-50/80 via-gray-50/70 to-gray-50/80"
                : "bg-gradient-to-b from-black/80 via-black/70 to-black/80"
            }`}
          />
        </div>
      )}

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative z-10 max-w-6xl w-full px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 ${
          isLeft ? "" : "md:flex-row-reverse"
        }`}
      >
        <div
          className={`text-center md:text-left ${
            !isLeft ? "md:text-right" : ""
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase mb-6">
            {title}
          </h2>
          <p
            className={`text-xl md:text-2xl mb-8 ${
              isLight ? "text-gray-700" : "text-gray-300"
            }`}
          >
            {description}
          </p>

          <ul
            className={`list-disc list-inside text-lg mb-6 space-y-2 ${
              isLight ? "text-gray-800" : "text-gray-200"
            }`}
          >
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          {price && (
            <div
              className={`text-2xl font-bold ${
                isLight ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Starting at {price}
            </div>
          )}
        </div>
  
             </motion.div>
       
               {/* Previous button */}
        {previousId && (
          <div className="absolute top-10 z-10 flex justify-center w-full">
            <button
              onClick={(e) => {
                e.stopPropagation();
                const section = document.getElementById(previousId);
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`rotate-180 opacity-70 hover:opacity-100 transition ${
                isLight ? "text-black" : "text-white"
              }`}
            >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="36"
               height="36"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth={2}
             >
               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
             </svg>
           </button>
         </div>
       )}

               {/* Next button */}
        {nextId && (
          <div className="absolute bottom-10 z-10 flex justify-center w-full">
            <button
              onClick={(e) => {
                e.stopPropagation();
                const section = document.getElementById(nextId);
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`animate-bounce opacity-70 hover:opacity-100 transition ${
                isLight ? "text-black" : "text-white"
              }`}
            >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="36"
               height="36"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth={2}
             >
               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
             </svg>
           </button>
         </div>
       )}
    </section>
  );
}