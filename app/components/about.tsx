"use client";

import { motion } from "framer-motion";
import ProfileCard from "@/reactbits/ProfileCard";
import "@/reactbits/ProfileCard.css";
import BlurText from "@/reactbits/BlurText";

export default function About() {
  return (
    <section
      id="about"
      className="w-80% overflow-x-hidden px-6 py-20 flex flex-col sm:flex-row items-center justify-center gap-12 text-black max-w-full"
    >
      {/* Left side - Profile Card */}
      <motion.div
        className="flex-1 flex justify-center"
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
          miniAvatarUrl="/images/me.jpg"
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
        className="flex-1 max-w-xl mx-auto flex flex-col items-center sm:items-start"
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
        <p className="text-zinc-900 leading-relaxed mb-6 text-justify">
          I’m a passionate developer dedicated to crafting smooth, engaging, and user-friendly digital experiences. With a strong foundation in Information Technology, I thrive on exploring new tools and technologies to push both creative and technical boundaries.
        </p>
        <p className="text-zinc-900 leading-relaxed mb-6 text-justify">
          I love collaborating with people and exploring new features and improvements. I consistently follow through on requests, provide active support, and share my knowledge to help users navigate challenges effectively. My goal is to deliver solutions that are both reliable and intuitive, ensuring a smooth experience for everyone involved.
        </p>
        <p className="text-zinc-900 leading-relaxed text-justify">
          Outside of tech, I love dinosaurs, history, classic motorcycles, gaming, and shows like The Boys, Peacemaker, Rick & Morty, Cyberpunk: Edgerunners, and Invincible. I also enjoy working out, kickboxing, traveling, my idol is Khabib, and my favorite song is The Woods by Hollow Coves.
        </p>
      </motion.div>
    </section>
  );
}
