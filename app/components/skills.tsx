"use client";

import { FaCode, FaLayerGroup, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <style>{`
        .spinning-3d {
          transform-style: preserve-3d;
          animation: spinY 4s linear infinite;
          will-change: transform;
          backface-visibility: visible;
        }

        @keyframes spinY {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>

      <section id="skills" className="w-full max-w-5xl px-6 py-16 mx-auto">
        <h2
          className="text-4xl font-bold mb-12 text-center"
          style={{ color: "#CEAE7B" }}
        >
          SKILLS
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-start gap-6 text-center text-white">
          {/* Languages */}
          <motion.div
            className="relative group p-6 overflow-hidden rounded-lg cursor-pointer sm:w-1/3 h-[370px] flex flex-col items-center text-center"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#CEAE7B] to-[#CEAE7B] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></div>
            <div className="relative z-10 flex flex-col items-center transition-colors duration-500 group-hover:text-black">
              <FaCode className="text-5xl spinning-3d mb-4" />
              <h3 className="font-semibold mb-2">Programming & Technologies</h3>
              <ul className="list-disc list-inside text-left text-s leading-relaxed">
                <li>
                  <span className="text-[#CEAE7B] group-hover:text-black group-hover:underline transition-all duration-500">
                    Web Development:
                  </span><br />
                  <div className="text-center transition-all duration-500 group-hover:text-black">
                    HTML, CSS, Tailwind, Bootstrap
                  </div>
                </li>
                <li>
                  <span className="text-[#CEAE7B] group-hover:text-black group-hover:underline transition-all duration-500">
                    JavaScript Ecosystem:
                  </span><br />
                  <div className="text-center transition-all duration-500 group-hover:text-black">
                    React (Vite/Next), React Native (Expo/CLI), JavaScript, Node, API
                  </div>
                </li>
                <li>
                  <span className="text-[#CEAE7B] group-hover:text-black group-hover:underline transition-all duration-500">
                    Microsoft Stack:
                  </span><br />
                  <div className="text-center transition-all duration-500 group-hover:text-black">
                    C#, ASP.NET, SQL (MSSQL)
                  </div>
                </li>
                <li>
                  <span className="text-[#CEAE7B] group-hover:text-black group-hover:underline transition-all duration-500">
                    Other Languages:
                  </span><br />
                  <div className="text-center transition-all duration-500 group-hover:text-black">
                    Java, SQL (MySQL)
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Frameworks & Libraries */}
          <motion.div
            className="relative group p-6 overflow-hidden rounded-lg cursor-pointer sm:w-1/3 h-[380px] flex flex-col items-center text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#CEAE7B] to-[#CEAE7B] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></div>
            <div className="relative z-10 flex flex-col items-center transition-colors duration-500 group-hover:text-black">
              <FaLayerGroup className="text-5xl spinning-3d mb-4" />
              <h3 className="font-semibold mb-2">Dev Tools & Environments</h3>
              <ul className="list-disc list-inside text-left text-s leading-relaxed">
                <li>
                  <span className="text-[#CEAE7B] group-hover:text-black group-hover:underline transition-all duration-500">
                    Code Editors / IDEs:
                  </span><br />
                  <div className="text-center transition-all duration-500 group-hover:text-black">
                    Visual Studio, VS Code, Android Studio
                  </div>
                </li>
                <li>
                  <span className="text-[#CEAE7B] group-hover:text-black group-hover:underline transition-all duration-500">
                    Database & API Tools:
                  </span><br />
                  <div className="text-center transition-all duration-500 group-hover:text-black">
                    SQL Management Studio, Postman
                  </div>
                </li>
                <li>
                  <span className="text-[#CEAE7B] group-hover:text-black group-hover:underline transition-all duration-500">
                    Version Control & Collaboration:
                  </span><br />
                  <div className="text-center transition-all duration-500 group-hover:text-black">
                    GitHub, Azure DevOps
                  </div>
                </li>
                <li>
                  <span className="text-[#CEAE7B] group-hover:text-black group-hover:underline transition-all duration-500">
                    Cloud & Platforms:
                  </span><br />
                  <div className="text-center transition-all duration-500 group-hover:text-black">
                    AWS
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div
            className="relative group p-6 overflow-hidden rounded-lg cursor-pointer sm:w-1/3 h-[380px] flex flex-col items-center text-center"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#CEAE7B] to-[#CEAE7B] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></div>
            <div className="relative z-10 flex flex-col items-center transition-colors duration-500 group-hover:text-black">
              <FaTools className="text-5xl spinning-3d mb-4" />
              <h3 className="font-semibold mb-2">Design & Productivity Tools</h3>
              <ul className="list-disc list-inside text-left text-s leading-relaxed">
                <li>
                  <span className="text-[#CEAE7B] group-hover:text-black group-hover:underline transition-all duration-500">
                    Design / Graphics:
                  </span><br />
                  <div className="text-center transition-all duration-500 group-hover:text-black">
                    Figma, Adobe Photoshop, Canva Pro
                  </div>
                </li>
                <li>
                  <span className="text-[#CEAE7B] group-hover:text-black group-hover:underline transition-all duration-500">
                    Office / Productivity:
                  </span><br />
                  <div className="text-center transition-all duration-500 group-hover:text-black">
                    Microsoft 365
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
