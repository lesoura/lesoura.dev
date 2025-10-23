"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-5xl px-6 py-32 flex flex-col sm:flex-row items-center justify-between gap-12 text-black"
    >
      {/* Left side */}
      <motion.div
        className="sm:w-1/2 text-center sm:text-left"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-bold mb-6 text-[#c39449] uppercase tracking-wide">
          about me
        </h2>
        <p className="text-zinc-900 leading-relaxed">
          I’m a passionate developer dedicated to crafting smooth, engaging, and user-friendly digital experiences. With a strong foundation in Information Technology, I thrive on exploring new tools and technologies to push both creative and technical boundaries.
        </p>
      </motion.div>

      {/* Right side */}
      <motion.div
        className="sm:w-1/2 text-center sm:text-left"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: 200, opacity: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-zinc-900 leading-relaxed">
          I love collaborating with people and exploring new features and improvements. I consistently follow through on requests, provide active support, and share my knowledge to help users navigate challenges effectively. My goal is to deliver solutions that are both reliable and intuitive, ensuring a smooth experience for everyone involved.
        </p>
      </motion.div>
    </section>
  );
}
