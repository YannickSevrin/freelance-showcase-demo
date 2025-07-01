// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Error sending message");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50">
      <motion.form
        onSubmit={handleSubmit}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">Message</label>
          <textarea
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center font-medium">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center font-medium">❌ Error sending message. Try again.</p>
        )}
      </motion.form>
    </section>
  );
}