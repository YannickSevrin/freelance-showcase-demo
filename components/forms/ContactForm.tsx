// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isDemo, setIsDemo] = useState(false);

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

      const result = await res.json();
      setIsDemo(result.demo || false);
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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label className="block text-sm font-semibold mb-1 text-gray-700">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <label className="block text-sm font-semibold mb-1 text-gray-700">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <label className="block text-sm font-semibold mb-1 text-gray-700">Message</label>
          <textarea
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition disabled:opacity-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </motion.button>

        {status === "success" && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isDemo ? (
              <div className="space-y-2">
                <p className="text-green-600 font-medium">✅ Message sent successfully!</p>
                <p className="text-sm text-gray-600 italic">
                  📧 Demo mode: No actual email was sent. This is for demonstration purposes.
                </p>
              </div>
            ) : (
              <p className="text-green-600 font-medium">✅ Message sent successfully!</p>
            )}
          </motion.div>
        )}
        {status === "error" && (
          <motion.p 
            className="text-red-600 text-center font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            ❌ Error sending message. Try again.
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}