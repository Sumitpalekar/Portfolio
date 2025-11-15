import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const skills = [
  // 🧠 Blockchain
  "Solidity",
  "Web3.js",
  "Ethers.js",
  "Hardhat",
  "Metamask Integration",
  "Smart Contract Security",

  // 💻 Frontend
  "Next.js",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",

  // ⚙️ Backend
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",

  // 🧩 Tools & Others
  "Git / GitHub",
  "VS Code",
  "Linux / CLI",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full min-h-screen py-20">
      <div className="top-[70px] sticky mb-12">
        <Link href="#skills">
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>
        <p className="mx-auto mt-4 text-base text-center text-neutral-300">
          (hint: press a key)
        </p>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-4 py-3 rounded-xl border border-neutral-700 bg-neutral-800/40 text-neutral-200 text-center hover:scale-105 transition-transform duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
