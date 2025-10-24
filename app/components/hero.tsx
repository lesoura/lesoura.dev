"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";
import BlurText from "@/reactbits/BlurText";

export default function Hero() {
  const titles = [
    "FULL-STACK WEB DEVELOPER",
    "UI/UX DESIGNER",
    "MOBILE DEVELOPER",
  ];
  const [current, setCurrent] = useState(0);
  const [displayText, setDisplayText] = useState(titles[0]);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Rotate titles every 3 seconds
  useEffect(() => {
    const changeTitle = setInterval(() => {
      setCurrent((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(changeTitle);
  }, []);

  // Decrypt animation when title changes
  useEffect(() => {
    const fullText = titles[current];
    let i = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      let tempText = "";
      for (let j = 0; j < fullText.length; j++) {
        if (j <= i) tempText += fullText[j];
        else tempText += chars[Math.floor(Math.random() * chars.length)];
      }
      setDisplayText(tempText.slice(0, 25)); // limit to 25 chars
      i++;
      if (i > fullText.length && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }, 50);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-start justify-center px-10 sm:px-24 text-left overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-fixed"
        style={{
          backgroundImage: "url('/images/me.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top 25%",
          opacity: 0.6,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

      <BlurText
        text="Hey, I’m Lester 👋"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-6xl sm:text-7xl font-bold mb-6"
        animationFrom={undefined}
        animationTo={undefined}
        onAnimationComplete={() => {}}
      />

        <p className="text-[#CEAE7B] text-3xl sm:text-4xl font-semibold mb-10 max-w-full overflow-x-auto whitespace-nowrap">
          {displayText}
        </p>

        <div className="flex gap-6">
          <div className="relative inline-flex rounded-full overflow-hidden bg-zinc-900 w-[360px] h-14">
            <a
              href="#projects"
              className="flex-1 flex items-center justify-center text-zinc-50 transition hover:text-[#CEAE7B]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="flex-1 flex items-center justify-center text-zinc-50 transition hover:text-[#CEAE7B]"
            >
              Contact Me
            </a>

            <span className="absolute top-0 bottom-0 left-1/2 w-px bg-zinc-700 transform rotate-12 origin-center pointer-events-none"></span>
          </div>
          <a
            href="/Marvirt Lester Bajao.pdf"
            download
            className="px-8 py-4 border border-[#CEAE7B] text-[#CEAE7B] rounded-full font-semibold flex items-center gap-2 transition 
                        hover:bg-[#CEAE7B] hover:text-black hover:border-zinc-700"
          >
            <FaFileAlt className="text-lg" />
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
