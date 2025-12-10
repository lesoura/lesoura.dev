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
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkScreen = () => setIsMobile(window.innerWidth < 640); // Tailwind 'sm'
  checkScreen();
  window.addEventListener("resize", checkScreen);
  return () => window.removeEventListener("resize", checkScreen);
}, []);

  useEffect(() => {
    const changeTitle = setInterval(() => {
      setCurrent((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(changeTitle);
  }, []);

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
      setDisplayText(tempText.slice(0, 25));
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
      className="relative w-full min-h-screen flex flex-col items-start justify-center px-4 sm:px-10 md:px-24 text-left overflow-hidden"
    >
      <div className="absolute inset-0">
  {isMobile ? (
    <img
      src="/images/me.jpg"
      className="w-full h-full object-cover opacity-60"
      alt="Background"
    />
  ) : (
    <div
      className="bg-fixed bg-cover sm:bg-[center_top_25%] bg-center w-full h-full"
      style={{ backgroundImage: "url('/images/me.jpg')", opacity: 0.6 }}
    />
  )}
</div>


      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="relative mb-6 inline-block backdrop-blur-md rounded-2xl bg-white/10 p-1 sm:p-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/ig-gold.png"
            alt="Profile QR"
            className="w-24 sm:w-32 md:w-40 rounded-xl"
          />
        </motion.div>

        <BlurText
          text="Hey, I’m Lester 👋"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6"
          animationFrom={undefined}
          animationTo={undefined}
          onAnimationComplete={() => {}}
        />

        <p className="text-[#CEAE7B] text-xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-10 max-w-full overflow-x-auto whitespace-nowrap">
          {displayText}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="relative inline-flex rounded-full overflow-hidden bg-zinc-900 w-full sm:w-[360px] h-auto ">
            <a
              href="#projects"
              className="flex-1 flex items-center justify-center py-2 sm:py-0 text-zinc-50 transition hover:text-[#CEAE7B]"
            >
              View Projects
            </a>

            {/* MOBILE DIVIDER (horizontal line) */}
            <span
              className="block sm:hidden absolute left-0 right-0 h-px bg-zinc-50 -rotate-65"
              style={{ top: "32px" }} // adjust the number to move it down
            ></span>

            {/* DESKTOP DIVIDER (vertical line) */}
            <span className="hidden sm:block absolute top-0 bottom-0 left-1/2 w-px bg-zinc-50 transform rotate-12 origin-center pointer-events-none"></span>            <a
              href="#contact"
              className="flex-1 flex items-center justify-center py-2 sm:py-0 text-zinc-50 transition hover:text-[#CEAE7B]"
            >
              Contact Me
            </a>
          </div>

          <a
            href="/Marvirt Lester Bajao.pdf"
            download
            className="px-6 sm:px-8 py-3 sm:py-4 border border-[#CEAE7B] text-[#CEAE7B] rounded-full font-semibold 
                      flex items-center justify-center gap-2 transition
                      hover:bg-[#CEAE7B] hover:text-black hover:border-zinc-700 text-center"
          >
            <FaFileAlt className="text-lg" />
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
