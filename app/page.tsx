"use client";

import { useState, useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000); // splash duration
    return () => clearTimeout(timer);
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
        `}</style>

        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
          <img
            src="/images/ghibli-me-icon.png" // replace with your logo
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
      {/* fixed background image (for everything except Hero) */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg.png')",
        }}
      />

      <Header />

      {/* Hero (solid black to hide bg behind) */}
      <section id="about" className="w-full flex flex-col items-start bg-black">
        <Hero />
      </section>

      {/* About (light overlay) */}
      <section className="w-full flex flex-col items-center bg-white/70 text-black">
        <About />
      </section>

      {/* Work (dark overlay) */}
      <section id="work" className="w-full flex flex-col items-center bg-black/70">
        <Skills />
        <Projects />
        <Experience />
      </section>

      {/* Contact (light overlay) */}
      <section className="w-full flex flex-col items-center bg-white/70 text-black">
        <Contact />
      </section>
    </main>
  );
}
