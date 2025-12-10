"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      year: "2024 - 2026",
      title: "Full-Stack Developer & Support",
      company: "Manila Teachers’ Mutual Aid System, Inc.",
      type: "Work",
      image: "/images/mtmas-cdv.png",
    },
    {
      year: "2023 - 2023",
      title: "Mobile Developer (Intern)",
      company: "Xure",
      type: "Work",
      image: "/images/xure-popout.png",
    },
    {
      year: "2020 - 2024",
      title: "BS Information Technology (Software Development)",
      company: "Colegio de San Juan de Letran",
      details:
        "Cumulative GWA: 94.14\nMagna Cum Laude\nDean’s Lister (2020–2024)",
      type: "Education",
      image: "/images/letran-popout.png",
    },
    {
      year: "2018 - 2020",
      title: "Information and Communication Technology",
      company: "Philippine Christian University",
      details: "With High Honor (2020)\nWith Honor (2019)",
      type: "Education",
      image: "/images/pcu-popout.png",
    },
  ];

  const imageVariants = {
    rest: { x: 0, opacity: 0, scale: 0.95 },
    hover: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="experience"
      className="w-full max-w-5xl px-6 py-10 text-white min-h-screen"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        style={{ color: "#CEAE7B" }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        EXPERIENCE & BACKGROUND
      </motion.h2>

      <div className="relative flex flex-col items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-zinc-700"></div>

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="w-full flex mb-12 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ amount: 0.2 }}
          >
            {/* Left side */}
            <div
              className={`w-1/2 pr-6 ${
                idx % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              {idx % 2 === 0 && (
                <motion.div
                  className="inline-block relative z-10 cursor-pointer"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {/* Pop-out image to the LEFT */}
                  <motion.img
                    src={exp.image}
                    alt={exp.title}
                    className="absolute right-full mr-6 w-64 h-40 object-contain rounded-2xl z-50"
                    variants={{
                      rest: { x: 50, opacity: 0 },
                      hover: {
                        x: -20,
                        opacity: 1,
                        transition: { duration: 0.4 },
                      },
                    }}
                  />

                  <span
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "#CEAE7B" }}
                  >
                    {exp.year}
                  </span>
                  <div className="bg-zinc-900 p-4 rounded-2xl shadow-lg relative inline-block">
                    <motion.span
                      className="absolute top-1/2 -right-5 transform -translate-y-1/2 w-4 h-4 bg-[#c39449] rounded-full border-2 border-zinc-700"
                      variants={{
                        rest: { boxShadow: "0 0 0px #c39449" },
                        hover: { boxShadow: "0 0 12px 4px #c39449", transition: { duration: 0.3 } },
                      }}
                    ></motion.span>
                    <h3 className="text-lg font-semibold mt-1">{exp.title}</h3>
                    <p className="text-zinc-300">{exp.company}</p>
                    {exp.details && (
                      <p className="text-zinc-400 text-sm mt-1 whitespace-pre-line">
                        {exp.details}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right side */}
            <div className="w-1/2 pl-6">
              {idx % 2 !== 0 && (
                <motion.div
                  className="inline-block relative z-10 cursor-pointer"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {/* Pop-out image to the RIGHT */}
                  <motion.img
                    src={exp.image}
                    alt={exp.title}
                    className="absolute left-full top-1/2 -translate-y-1/2 ml-6 w-64 h-40 object-contain rounded-2xl z-50"
                    variants={{
                      rest: { x: -50, opacity: 0 },
                      hover: {
                        x: 20,
                        opacity: 1,
                        transition: { duration: 0.4 },
                      },
                    }}
                  />

                  <span
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "#CEAE7B" }}
                  >
                    {exp.year}
                  </span>
                  <div className="bg-zinc-900 p-4 rounded-2xl shadow-lg relative inline-block">
                    <motion.span
                      className="absolute top-1/2 -left-5 transform -translate-y-1/2 w-4 h-4 bg-[#c39449] rounded-full border-2 border-zinc-700"
                      variants={{
                        rest: { boxShadow: "0 0 0px #c39449" },
                        hover: { boxShadow: "0 0 12px 4px #c39449", transition: { duration: 0.3 } },
                      }}
                    ></motion.span>
                    <h3 className="text-lg font-semibold mt-1">{exp.title}</h3>
                    <p className="text-zinc-300">{exp.company}</p>
                    {exp.details && (
                      <p className="text-zinc-400 text-sm mt-1 whitespace-pre-line">
                        {exp.details}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
