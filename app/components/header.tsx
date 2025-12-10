"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "ABOUT ME", href: "#about" },
  { name: "MY WORKS", href: "#work" },
  { name: "CONTACT ME", href: "#contact" },
];

export default function Header() {
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const handleScroll = () => {
      let found = false;

      links.forEach((link) => {
        const el = document.querySelector(link.href) as HTMLElement | null;
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset = 0; // adjust if navbar height affects the middle
          if (
            rect.top <= window.innerHeight / 2 + offset &&
            rect.bottom >= window.innerHeight / 2 + offset
          ) {
            setActive(link.href);
            found = true;
          }
        }
      });

      if (!found) setActive(""); // optional: keeps last active if preferred
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-8 left-0 w-full z-50 flex justify-center">
      <nav className="flex border border-[#2E2E2E] rounded-full overflow-hidden bg-[#1B1B1B]">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`
              px-6 py-3 sm:px-10 sm:py-4 transition-colors 
              text-xs sm:text-sm font-bold
              ${active === link.href ? "text-[#CEAE7B]" : "text-white"}
              hover:text-[#CEAE7B`}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
