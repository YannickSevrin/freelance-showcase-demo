import { motion } from "framer-motion";

export default function InfoSection() {
    return (
      <section className="py-16 px-6 md:px-20 bg-black text-center">
        <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        >
        <h2 className="text-2xl font-bold mb-4 text-white uppercase">Who I Am</h2>
        <p className="max-w-2xl mx-auto text-white text-lg">
          I’m a developer passionate about building clean, performant and modern websites.
          Whether you’re launching a business or refreshing your brand, I help bring your vision to life online.
        </p>
        </motion.div>
      </section>
    );
  }