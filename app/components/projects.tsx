"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  media: string;
  type: "image" | "video";
  header?: string;
  category: "Web" | "Mobile";
  link?: string;
}

const projects: Project[] = [
  // WEB projects
  {
    id: 1,
    title: "Check Disbursement Voucher (CDV)",
    description:
      "Web-based system for overseeing and checking disbursement vouchers, processing payments, managing accounts, user roles, and posting periods. Retrieves and populates reports via Crystal Reports using server-side API routes. Soon to be integrated with MT Forms for a seamless workflow.",
    media: "/personal-projects/cdv.png",
    type: "image",
    category: "Web",
    header: "/images/mtmas-cdv.png",
  },
  {
    id: 2,
    title: "MT Forms",
    description:
      "Web-based system that transitions the company away from physical documents. Handles purchase requisitions, canvassing, purchase orders, requests for payment, and cash advances. Utilizes server-side API routes for data handling, includes account and role management, digital signature storage through Wacom signature pad integration, and form generation via Crystal Reports.",
    media: "/personal-projects/mt-forms.png",
    type: "image",
    category: "Web",
    header: "/images/mt-forms-icon.png",
  },
  {
    id: 3,
    title: "Web-Based Booking & Reservation System",
    description:
      "Capstone project proposed for SJA Travel & Tours. A web-based system that manages tour bookings, reservations, and vehicle rentals. Features account and role management, an administrator dashboard, and utilizes a local on-disk MSSQL connection for data storage.",
    media: "/personal-projects/sja.png",
    type: "image",
    category: "Web",
    header: "/images/sja-header.png",
  },
  {
    id: 4,
    title: "Cifra's Pizza",
    description:
      "Web-based interactive pizzeria website for Cifra’s Pizza featuring a dynamic hero section, animated carousel, glowing buttons, and responsive layout. Designed for an engaging, modern browsing experience built with React and Framer Motion.",
    media: "/personal-projects/cifras-pizza.png",
    type: "image",
    category: "Web",
    header: "/images/cifras-tab-icon.png",
    link: "https://cifras-pizza.vercel.app/",
  },
  {
    id: 5,
    title: "CryptoFaceAuth",
    description:
      "React web app with face recognition login, Axios-based account verification from a local server, and real-time crypto value graphics.",
    media: "/personal-projects/crypto-react.png",
    type: "image",
    category: "Web",
    header: "/images/cryptofaceauth-header.png",
  },
  {
    id: 6,
    title: "GrowAGardenApp",
    description:
      "Displays the latest Grow a Garden stock updates using the API, refreshing every 5 minutes to mirror in-game changes. Built with React Native & Expo, featuring a tab system, interactive floating action button, camera access, image storage, and basic UI components.",
    media: "/personal-projects/gag-app.png",
    type: "image",
    category: "Mobile",
    header: "/images/gag-header.png",
  },
  {
    id: 7,
    title: "XuREELS",
    description:
      "UI/UX research project for XURE, featuring a Reels-style video display and processing system. Includes self-made animations such as the Hype React, an interactive navbar, and a walkthrough tooltip designed to guide and engage first-time users.",
    media: "/personal-projects/xureels.png",
    type: "image",
    category: "Mobile",
    header: "/images/xure-header2.png",
  },
  {
    id: 8,
    title: "FakeStore - API",
    description:
      "UI/UX research project for XURE exploring API integration using Axios. Focuses on proper data presentation with features like skeleton rendering, up/down navigation buttons, and an interactive navbar — serving as a design exploration and development practice for XURE.",
    media: "/personal-projects/fakestore-api.png",
    type: "image",
    category: "Mobile",
    header: "/images/publicapi-header.png",
  },
  {
    id: 9,
    title: "OLA - Mobile",
    description:
      "OLA Mobile is a React Native app for applying and managing loans. It connects to an API for real-time data and authentication, featuring an interactive dashboard, modern UI, and smooth navigation for efficient loan management.",
    media: "/personal-projects/ola-mobile.png",
    type: "image",
    category: "Mobile",
    header: "/images/mtmas-cdv.png",
  },
  {
    id: 10,
    title: "Broadhead Technologies",
    description:
      "Proposed UI/UX design for Broadhead Technologies’ official website. Broadhead Technologies is a growing tech-focused company, and this project is an ongoing collaboration currently under discussion with the CEO. The design emphasizes a clean, modern layout, clear information hierarchy, responsive sections, and a professional visual identity aligned with the company’s services and future direction.",
    media: "/personal-projects/broadhead-technologies.png",
    type: "image",
    category: "Web",
    header: "/images/broadhead-cover.png",
    link: "https://broadhead-technologies.vercel.app/",
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [current, setCurrent] = useState(0);

  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Update itemsPerSlide based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1); // Mobile: 1 card per slide
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // Tablet: 2 cards
      } else {
        setItemsPerSlide(3); // Desktop: 3 cards
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

  const renderLegend = (id: number) => {
    switch (id) {
      case 1:
      case 2:
        return (
          <>
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs">C#</span>
            <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs">ASP.NET MVC</span>
            <span className="bg-teal-500 text-white px-2 py-0.5 rounded text-xs">API</span>
            <span className="bg-amber-600 text-white px-2 py-0.5 rounded text-xs">Crystal Report</span>
          </>
        );
      case 3:
        return (
          <>
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs">C#</span>
            <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs">ASP.NET MVC</span>
            <span className="bg-gray-600 text-white px-2 py-0.5 rounded text-xs">MSSQL</span>
          </>
        );
      case 4:
        return (
          <>
            <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs">React</span>
          </>
        );
      case 5:
        return (
          <>
            <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs">React</span>
            <span className="bg-teal-500 text-white px-2 py-0.5 rounded text-xs">API</span>
          </>
        );
      case 6:
         return (
          <>
            <span className="bg-[#CEAE7B] text-white px-2 py-0.5 rounded text-xs">React Native Expo</span>
            <span className="bg-teal-500 text-white px-2 py-0.5 rounded text-xs">API</span>
          </>
        );
      case 7:
        return (
          <>
            <span className="bg-purple-700 text-white px-2 py-0.5 rounded text-xs">React Native CLI</span>
          </>
        );
      case 8:
        return (
          <>
            <span className="bg-purple-700 text-white px-2 py-0.5 rounded text-xs">React Native CLI</span>
            <span className="bg-teal-500 text-white px-2 py-0.5 rounded text-xs">API</span>
          </>
        );
      case 9:
         return (
          <>
            <span className="bg-[#CEAE7B] text-white px-2 py-0.5 rounded text-xs">React Native Expo</span>
            <span className="bg-teal-500 text-white px-2 py-0.5 rounded text-xs">API</span>
          </>
        );
      case 10:
         return (
          <>
            <span className="bg-[#CEAE7B] text-white px-2 py-0.5 rounded text-xs">React</span>
          </>
        );
      default:
        return null;
    }
  };

  const getVisibleProjects = () => {
    const start = current * itemsPerSlide;
    return projects.slice(start, start + itemsPerSlide);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
  <section id="projects" className="relative w-full py-10 overflow-hidden" style={{ height: "90vh" }}>
        {/* LEFT accent image */}
        <motion.img
          src="/images/xureels4.png"
          alt="Left Accent"
          className="hidden md:block absolute -left-18 top-3/4 -translate-y-1/2 w-[380px] opacity-30 pointer-events-none select-none z-20"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        />

        {/* RIGHT accent image */}
        <motion.img
          src="/images/ola-mobile3.png"
          alt="Right Accent"
          className="hidden md:block absolute -right-15 top-2/6 -translate-y-1/2 w-[350px] opacity-30 pointer-events-none select-none z-20"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        />

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl px-6 mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: "#CEAE7B" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            PROJECTS
          </motion.h2>

          {/* Carousel */}
          <div className="relative flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 bg-black/40 text-white p-3 rounded-full z-30 transition-colors duration-300 hover:bg-[#CEAE7B] hover:text-black"
            >
              <FaChevronLeft />
            </button>

            <div className="overflow-hidden w-full">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center gap-6"
              >
                {getVisibleProjects().map((project) => (
                  <div
                    key={project.id}
                    className="w-[350px] min-h-[470px] bg-zinc-900 rounded-lg text-zinc-50 shadow-lg flex flex-col"
                  >
                    {project.header && (
                      <img
                        src={project.header}
                        alt={project.title}
                        className="w-full h-40 object-contain bg-black rounded-t-lg border-b-4 border-[#CEAE7B] p-1"
                      />
                    )}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <p className="text-zinc-400 text-sm break-words text-justify">
                        {project.description}
                      </p>
                      <div className="mt-2 mb-2 flex flex-wrap gap-1">
                        {renderLegend(project.id)}
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="mt-auto relative overflow-hidden border border-[#CEAE7B] text-[#CEAE7B] font-semibold py-1 px-3 rounded group"
                      >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                          Explore
                        </span>
                        <span className="absolute inset-0 bg-[#CEAE7B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 bg-black/40 text-white p-3 rounded-full z-30 transition-colors duration-300 hover:bg-[#CEAE7B] hover:text-black"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-[#CEAE7B]" : "bg-zinc-600"
                } transition`}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-zinc-900/20 backdrop-blur-md rounded-[100px] max-w-3xl w-full overflow-hidden"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                {selectedProject.type === "video" ? (
                  <video src={selectedProject.media} controls autoPlay className="w-full h-auto" />
                ) : (
                  <img src={selectedProject.media} alt={selectedProject.title} className="w-full h-auto" />
                )}

                {selectedProject.link && (
                  <div className="p-6 text-center">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-[#CEAE7B] text-[#CEAE7B] px-6 py-2 rounded-full font-semibold hover:bg-[#CEAE7B] hover:text-black transition"
                    >
                      Visit Project
                    </a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
  );
}
