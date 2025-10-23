"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  media: string;
  type: "image" | "video";
  header?: string;
  category: "Web" | "Mobile";
}

const projects: Project[] = [
  // WEB projects
  {
    id: 1,
    title: "Check Disbursement Voucher (CDV)",
    description:
      "Web-based system for overseeing and checking disbursement vouchers, processing payments, managing accounts, user roles, and posting periods. Retrieves and populates reports via Crystal Reports using server-side API routes. Soon to be integrated with MT Forms for a seamless workflow.",
    media: "/images/cdv.png",
    type: "image",
    category: "Web",
    header: "/images/mtmas-cdv.png",
  },
  {
    id: 2,
    title: "MT Forms",
    description:
      "Web-based system that transitions the company away from physical documents. Handles purchase requisitions, canvassing, purchase orders, requests for payment, and cash advances. Utilizes server-side API routes for data handling, includes account and role management, digital signature storage through Wacom signature pad integration, and form generation via Crystal Reports.",
    media: "/images/mtforms.png",
    type: "image",
    category: "Web",
    header: "/images/mt-forms-icon.png",
  },
  {
    id: 3,
    title: "CryptoFaceAuth",
    description:
      "React web app with face recognition login, Axios-based account verification from a local server, and real-time crypto value graphics.",
    media: "/images/cryptofaceauth.png",
    type: "image",
    category: "Web",
    header: "/images/cryptofaceauth-header.png",
  },
  {
    id: 4,
    title: "Web-Based Booking & Reservation System",
    description:
      "Capstone project proposed for SJA Travel & Tours. A web-based system that manages tour bookings, reservations, and vehicle rentals. Features account and role management, an administrator dashboard, and utilizes a local on-disk MSSQL connection for data storage.",
    media: "/images/booking.png",
    type: "image",
    category: "Web",
    header: "/images/sja-header.png",
  },
  // MOBILE projects
  {
    id: 5,
    title: "GrowAGardenApp",
    description:
      "Displays the latest Grow a Garden stock updates using the API, refreshing every 5 minutes to mirror in-game changes. Built with React Native & Expo, featuring a tab system, interactive floating action button, camera access, image storage, and basic UI components.",
    media: "/images/growagarden.png",
    type: "image",
    category: "Mobile",
    header: "/images/gag-header.png",
  },
  {
    id: 6,
    title: "XuREELS",
    description:
      "UI/UX research project for XURE, featuring a Reels-style video display and processing system. Includes self-made animations such as the Hype React, an interactive navbar, and a walkthrough tooltip designed to guide and engage first-time users.",
    media: "/images/xureels.png",
    type: "image",
    category: "Mobile",
    header: "/images/xure-header2.png",
  },
  {
    id: 7,
    title: "FakeStore - API",
    description:
      "UI/UX research project for XURE exploring API integration using Axios. Focuses on proper data presentation with features like skeleton rendering, up/down navigation buttons, and an interactive navbar — serving as a design exploration and development practice for XURE.",
    media: "/images/fakestore.png",
    type: "image",
    category: "Mobile",
    header: "/images/publicapi-header.png",
  },
  {
    id: 8,
    title: "PinchableImage",
    description:
      "UI/UX research project for XURE replicating Instagram’s image interaction. Allows users to pinch to zoom in or out, drag images freely, and smoothly return them to their original position upon release — a feature successfully implemented in the XURE app.",
    media: "/images/pinchableimage.png",
    type: "image",
    category: "Mobile",
    header: "/images/xure-header2.png",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs">React</span>
            <span className="bg-teal-500 text-white px-2 py-0.5 rounded text-xs">API</span>
          </>
        );
      case 4:
        return (
          <>
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs">C#</span>
            <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs">ASP.NET MVC</span>
            <span className="bg-gray-600 text-white px-2 py-0.5 rounded text-xs">MSSQL</span>
          </>
        );
      case 5:
        return (
          <>
            <span className="bg-purple-500 text-white px-2 py-0.5 rounded text-xs">React Native EXPO</span>
            <span className="bg-teal-500 text-white px-2 py-0.5 rounded text-xs">API</span>
          </>
        );
      case 6:
      case 7:
      case 8:
        return <span className="bg-purple-700 text-white px-2 py-0.5 rounded text-xs">React Native CLI</span>;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="w-full max-w-7xl px-6 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: "#CEAE7B" }}>
        PROJECTS
      </h2>

      {/* Carousel */}
      <div className="flex overflow-x-auto gap-6 pb-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-[400px] flex-shrink-0 bg-zinc-900 rounded-lg text-zinc-50 shadow-lg flex flex-col"
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
                <p className="text-zinc-400 text-sm break-words text-justify">{project.description}</p>

                <div className="mt-2 mb-2 flex flex-wrap gap-1">{renderLegend(project.id)}</div>

                <button
                    className="mt-auto bg-[#c39449] text-black font-semibold py-1 px-3 rounded hover:bg-[#a67c39] transition"
                    onClick={() => setSelectedProject(project)}
                >
                    Explore
                </button>
                </div>
          </div>
        ))}
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
              className="bg-zinc-900 rounded-lg max-w-3xl w-full overflow-hidden"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
