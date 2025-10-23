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
        const scrollPos = window.scrollY + window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        if (scrollPos >= docHeight - 5) {
        // at the bottom
        setActive("#contact");
        return;
        }

        // normal section highlight
        let found = false;
        links.forEach((link) => {
        const el = document.querySelector(link.href);
        if (el) {
            const offsetTop = (el as HTMLElement).offsetTop;
            const offsetBottom = offsetTop + (el as HTMLElement).offsetHeight;
            if (window.scrollY + window.innerHeight / 2 >= offsetTop && window.scrollY + window.innerHeight / 2 < offsetBottom) {
            setActive(link.href);
            found = true;
            }
        }
        });

        if (!found) setActive(""); // fallback
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
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
              px-10 py-4 transition-colors text-sm font-bold
              ${active === link.href ? "text-[#CEAE7B]" : "text-white"}
              hover:text-[#CEAE7B]
            `}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
