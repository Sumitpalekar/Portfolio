import { ReactNode } from "react";

export type Skill = {
  title: string;
  icon: ReactNode;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  gradient: string;
  cardNumber: string;
  expiry: string;
  holder: string;
  network: string;
  live: string;
  github?: string;
  skills: {
    frontend: Skill[];
    backend: Skill[];
  };
  overview: string;
  whatItDoes: string[];
  highlights: string[];
};

/* ----------------------------- Skill Presets ----------------------------- */

const SKILLS = {
  react: { title: "React", icon: "⚛️" },
  next: { title: "Next.js", icon: "▲" },
  tailwind: { title: "Tailwind", icon: "🌊" },
  js: { title: "JavaScript", icon: "🟨" },
  node: { title: "Node.js", icon: "🟢" },
  python: { title: "Python", icon: "🐍" },
  solidity: { title: "Solidity", icon: "⬡" },
  ethereum: { title: "Ethereum", icon: "⟠" },
  ai: { title: "AI / ML", icon: "🤖" },
  web3: { title: "Web3", icon: "🌐" },
};

/* ------------------------------ Projects -------------------------------- */

const projects: Project[] = [
  {
    id: "linear-regression",
    title: "Linear Regression",
    category: "Machine Learning",
    gradient: "from-[#020617] via-[#020617] to-[#0f172a]",
    cardNumber: "0420 1989 0001 001",
    expiry: "09/27",
    holder: "ML SYSTEM",
    network: "DATA",
    live: "https://github.com/Sumitpalekar/Linear_Regression_from_Scratch",
    github: "https://github.com/Sumitpalekar/Linear_Regression_from_Scratch",
    skills: {
      frontend: [],
      backend: [SKILLS.python, SKILLS.ai],
    },
    overview:
      "A from-scratch implementation of Linear Regression focused on mathematical clarity and optimization.",
    whatItDoes: [
      "Implements gradient descent manually",
      "Calculates loss using cost function",
      "Trains model without ML libraries",
    ],
    highlights: [
      "Strong ML fundamentals",
      "Clear mathematical intuition",
      "Educational & reusable",
    ],
  },
  {
    id: "ai-accelathon",
    title: "AI Accelathon SEI",
    category: "Hackathon / AI",
    gradient: "from-[#020617] via-[#020617] to-[#111827]",
    cardNumber: "9021 7721 8890 221",
    expiry: "12/26",
    holder: "ACCEL LAB",
    network: "AI",
    live: "https://github.com/Sumitpalekar/Ai_Accelathon_Sei",
    github: "https://github.com/Sumitpalekar/Ai_Accelathon_Sei",
    skills: {
      frontend: [SKILLS.react, SKILLS.js],
      backend: [SKILLS.ai],
    },
    overview:
      "Hackathon project built under time constraints to validate AI-driven ideas.",
    whatItDoes: [
      "Rapid AI prototyping",
      "Frontend + AI logic integration",
      "Live experimentation",
    ],
    highlights: [
      "Fast execution",
      "Team collaboration",
      "Practical AI usage",
    ],
  },
  {
    id: "eth-globe",
    title: "ETH Globe",
    category: "Blockchain",
    gradient: "from-[#020617] via-[#020617] to-[#020617]",
    cardNumber: "7788 4401 2299 007",
    expiry: "08/28",
    holder: "ETH LAB",
    network: "WEB3",
    live: "https://github.com/Sumitpalekar/Eth_Globe",
    github: "https://github.com/Sumitpalekar/Eth_Globe",
    skills: {
      frontend: [SKILLS.react],
      backend: [SKILLS.ethereum, SKILLS.web3],
    },
    overview:
      "Blockchain exploration project created during ETH Globe.",
    whatItDoes: [
      "Wallet connection experiments",
      "Ethereum interaction",
      "Understanding Web3 primitives",
    ],
    highlights: [
      "On-chain concepts",
      "Ethereum fundamentals",
      "Hands-on Web3",
    ],
  },
  {
    id: "ai-wallet",
    title: "AI Wallet",
    category: "Web3 + AI",
    gradient: "from-[#020617] via-[#020617] to-[#0b1220]",
    cardNumber: "6019 5533 8821 111",
    expiry: "01/29",
    holder: "SMART WALLET",
    network: "AI+WEB3",
    live: "https://github.com/Sumitpalekar/Ai_Wallet_Integration_",
    github: "https://github.com/Sumitpalekar/Ai_Wallet_Integration_",
    skills: {
      frontend: [SKILLS.react, SKILLS.next],
      backend: [SKILLS.ai, SKILLS.web3],
    },
    overview:
      "An experimental wallet enhanced with AI-based decision support.",
    whatItDoes: [
      "Wallet connect flows",
      "AI-powered suggestions",
      "Transaction assistance",
    ],
    highlights: [
      "Improved UX for wallets",
      "AI + Web3 integration",
      "Future-ready concept",
    ],
  },
  {
    id: "travel-ease",
    title: "TravelEase",
    category: "Startup",
    gradient: "from-[#020617] via-[#020617] to-[#0f172a]",
    cardNumber: "3300 7741 2219 542",
    expiry: "05/27",
    holder: "TRAVEL CO",
    network: "APP",
    live: "https://github.com/Sumitpalekar/TravelEase",
    github: "https://github.com/Sumitpalekar/TravelEase",
    skills: {
      frontend: [SKILLS.react, SKILLS.next, SKILLS.tailwind],
      backend: [SKILLS.node],
    },
    overview:
      "A travel planning platform designed for usability and scale.",
    whatItDoes: [
      "Trip planning UI",
      "Destination discovery",
      "Clean responsive layouts",
    ],
    highlights: [
      "Startup-focused design",
      "Scalable structure",
      "User-centric UX",
    ],
  },
  {
    id: "shop-ease",
    title: "ShopEase",
    category: "E-Commerce",
    gradient: "from-[#020617] via-[#020617] to-[#111827]",
    cardNumber: "5199 2299 1100 901",
    expiry: "11/26",
    holder: "SHOP CORE",
    network: "ECOM",
    live: "https://github.com/Sumitpalekar/ShopEase",
    github: "https://github.com/Sumitpalekar/ShopEase",
    skills: {
      frontend: [SKILLS.react, SKILLS.js],
      backend: [],
    },
    overview:
      "Frontend e-commerce interface focusing on clarity and performance.",
    whatItDoes: [
      "Product listing UI",
      "Cart interaction flows",
      "Responsive design",
    ],
    highlights: [
      "Modern UX",
      "Reusable components",
      "Performance-focused",
    ],
  },
];

export default projects;
