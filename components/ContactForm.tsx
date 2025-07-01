// components/ContactForm.tsx
"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50">
      <motion.form
        className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">Name</label>
          <input
            type="text"
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">Email</label>
          <input
            type="email"
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">Message</label>
          <textarea
            rows={5}
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}