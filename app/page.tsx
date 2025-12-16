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
    let fadeTimer: NodeJS.Timeout;
    let removeTimer: NodeJS.Timeout;

    const preloadImages = async () => {
      const images = [
        "/personal-projects/cdv.png",
        "/personal-projects/mt-forms.png",
        "/personal-projects/sja.png",
        "/personal-projects/cifras-pizza.png",
        "/personal-projects/crypto-react.png",
        "/personal-projects/gag-app.png",
        "/personal-projects/xureels.png",
        "/personal-projects/fakestore-api.png",
        "/personal-projects/ola-mobile.png",
        "/personal-projects/broadhead-technologies.png",
        "/images/mtmas-cdv.png",
        "/images/broadhead-technologies.png",
        "/images/mt-forms-icon.png",
        "/images/sja-header.png",
        "/images/cifras-tab-icon.png",
        "/images/cryptofaceauth-header.png",
        "/images/gag-header.png",
        "/images/xure-header2.png",
        "/images/publicapi-header.png",
        "/images/bg.png",
      ];

      const promises = images.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
      );

      await Promise.all(promises);

      fadeTimer = setTimeout(() => setFadeOut(true), 1700);
      removeTimer = setTimeout(() => setShowSplash(false), 2100); // slightly longer than fade
    };

    preloadImages();

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
    <main className="relative flex flex-col w-full text-zinc-50 overflow-x-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      />

      <Header />

      {/* Splash cursor overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ opacity: 0.2 }}>
        <SplashCursor />
      </div>

      {/* Sections */}
      <section id="about" className="w-full flex flex-col items-center bg-black relative z-0">
        <Hero />
      </section>

      <section className="w-full flex flex-col items-center bg-white/70 text-black relative z-0">
        <About />
      </section>

      <section id="work" className="w-full flex flex-col items-center bg-black/70 relative z-0">
        <Skills />
        <Projects />
        <Experience />
      </section>

      <section className="w-full flex flex-col items-center bg-white/70 text-black relative z-0">
        <Contact />
      </section>
    </main>
  );
}
