"use client";

import { motion } from "framer-motion";
import ProfileCard from "@/reactbits/ProfileCard"; // ✅ correct import for the JS file
import "@/reactbits/ProfileCard.css"; // ✅ import the CSS
import BlurText from "@/reactbits/BlurText";

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-5xl px-6 py-20 flex flex-col sm:flex-row items-center justify-between gap-12 text-black"
    >
      {/* Left side - Profile Card */}
      <motion.div
        className="sm:w-1/2 flex justify-center"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ProfileCard
          name="Marvirt Lester"
          title="Full-Stack Developer"
          handle="lesoura"
          avatarUrl="/images/me2.jpg"
          miniAvatarUrl="/images/me.jpg" // ✅ required prop
          enableTilt={true}
          behindGradient="linear-gradient(180deg, #000000, #1a1a1a)"
          innerGradient="linear-gradient(180deg, #c39449, #000000)"
          onContactClick={() => {
            const contactSection = document.querySelector("#contact");
            contactSection?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </motion.div>

      {/* Right side - Text */}
      <motion.div
        className="sm:w-1/2 text-center sm:text-left"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: 200, opacity: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <BlurText
        text="about me"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-5xl font-bold mb-6 text-[#c39449] uppercase tracking-wide"
        animationFrom={undefined}
        animationTo={undefined}
        onAnimationComplete={() => {}}
        />
        <p className="text-zinc-900 leading-relaxed mb-6">
          I’m a passionate developer dedicated to crafting smooth, engaging, and user-friendly digital experiences. With a strong foundation in Information Technology, I thrive on exploring new tools and technologies to push both creative and technical boundaries.
        </p>
        <p className="text-zinc-900 leading-relaxed">
          I love collaborating with people and exploring new features and improvements. I consistently follow through on requests, provide active support, and share my knowledge to help users navigate challenges effectively. My goal is to deliver solutions that are both reliable and intuitive, ensuring a smooth experience for everyone involved.
        </p>
      </motion.div>
    </section>
  );
}
