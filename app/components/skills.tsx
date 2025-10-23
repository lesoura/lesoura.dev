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
        }

        @keyframes spinY {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>

      <section id="skills" className="w-full max-w-5xl px-6 py-20 mx-auto">
        <h2
          className="text-4xl font-bold mb-12 text-center"
          style={{ color: "#CEAE7B" }}
        >
          SKILLS
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-start gap-6 text-center text-white">
          {/* Languages - Left */}
          <motion.div
            className="relative group p-6 overflow-hidden rounded-lg cursor-pointer sm:w-1/3 h-[280px] flex flex-col items-center text-center"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#CEAE7B] to-[#CEAE7B] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></div>

            <div className="relative z-10 flex flex-col items-center transition-colors duration-500 group-hover:text-black">
              <FaCode className="text-5xl spinning-3d mb-4" />
              <h3 className="font-semibold mb-2">Languages</h3>
              <p className="text-s leading-relaxed">
                JavaScript, Java, C#, C++, HTML, CSS
              </p>
            </div>
          </motion.div>

          {/* Frameworks & Libraries - Center */}
          <motion.div
            className="relative group p-6 overflow-hidden rounded-lg cursor-pointer sm:w-1/3 h-[280px] flex flex-col items-center text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#CEAE7B] to-[#CEAE7B] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></div>

            <div className="relative z-10 flex flex-col items-center transition-colors duration-500 group-hover:text-black">
              <FaLayerGroup className="text-5xl spinning-3d mb-4" />
              <h3 className="font-semibold mb-2">Frameworks & Libraries</h3>
              <p className="text-s leading-relaxed">
                React, React Native, Next, Vite, Tailwind, Bootstrap, ASP.NET, Node
              </p>
            </div>
          </motion.div>

          {/* Tools & Platforms - Right */}
          <motion.div
            className="relative group p-6 overflow-hidden rounded-lg cursor-pointer sm:w-1/3 h-[280px] flex flex-col items-center text-center"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#CEAE7B] to-[#CEAE7B] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></div>

            <div className="relative z-10 flex flex-col items-center transition-colors duration-500 group-hover:text-black">
              <FaTools className="text-5xl spinning-3d mb-4" />
              <h3 className="font-semibold mb-2">Tools & Platforms</h3>
              <p className="text-s leading-relaxed">
                GitHub, SourceSafe, Azure DevOps, Visual Studio, VS Code, Android Studio, 
                Figma, Canva Pro, Sublime, NetBeans, SQL, MSSQL, MySQL, 
                Crystal Report, NetSupport, SQL Server Profiler, UltraViewer, ChatGPT, Grok, APIs
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
