"use client";

import { useState, useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";
import SplashCursor from "@/reactbits/SplashCursor";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1700); // start fading before removing
    const removeTimer = setTimeout(() => setShowSplash(false), 2000); // remove after fade
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (showSplash) {
    return (
      <>
        <style>{`
          .spinning-logo {
            animation: spinY 3s linear infinite;
            transform-style: preserve-3d;
          }

          @keyframes spinY {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
          }

          .fade-out {
            opacity: 0;
            transition: opacity 0.4s ease;
          }
        `}</style>

        <div
          className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-50 transition-opacity duration-500 ${
            fadeOut ? "fade-out" : ""
          }`}
        >
          <img
            src="/images/ghibli-me-icon.png"
            alt="Logo"
            className="w-60 h-60 spinning-logo"
          />
          <h1 className="text-white text-2xl mt-4 animate-pulse">Loading...</h1>
        </div>
      </>
    );
  }

  return (
    <main className="relative flex flex-col items-center w-full text-zinc-50">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      />

      <Header />
      <div style={{ opacity: 0.2 }}>
        <SplashCursor />
      </div>

      <section id="about" className="w-full flex flex-col items-start bg-black">
        <Hero />
      </section>

      <section className="w-full flex flex-col items-center bg-white/70 text-black">
        <About />
      </section>

      <section id="work" className="w-full flex flex-col items-center bg-black/70">
        <Skills />
        <Projects />
        <Experience />
      </section>

      <section className="w-full flex flex-col items-center bg-white/70 text-black">
        <Contact />
      </section>
    </main>
  );
}
