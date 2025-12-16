// Single source of truth for ALL skills shown on the keyboard

export enum SkillNames {
    // Frontend
    JS = "js",
    TS = "ts",
    HTML = "html",
    CSS = "css",
    REACT = "react",
    NEXTJS = "nextjs",
    TAILWIND = "tailwind",
  
    // Backend
    NODEJS = "nodejs",
    EXPRESS = "express",
    POSTGRES = "postgres",
    MONGODB = "mongodb",
  
    // Dev / Infra
    GIT = "git",
    GITHUB = "github",
    NPM = "npm",
    LINUX = "linux",
    DOCKER = "docker",
    AWS = "aws",
    VERCEL = "vercel",
  
    // Web3
    SOLIDITY = "solidity",
    ETHEREUM = "ethereum",
    METAMASK = "metamask",
    WEB3JS = "web3js",
    ETHERS = "ethers",
    HARDHAT = "hardhat",
  }
  
  export type Skill = {
    id: number;
    name: string;
    label: string;
    shortDescription: string;
    color: string;
    icon: string;
  };
  
  export const SKILLS: Record<SkillNames, Skill> = {
    // ---------- Frontend ----------
    [SkillNames.JS]: {
      id: 1,
      name: "js",
      label: "JavaScript",
      shortDescription: "The OG that runs the web",
      color: "#f0db4f",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
  
    [SkillNames.TS]: {
      id: 2,
      name: "ts",
      label: "TypeScript",
      shortDescription: "JavaScript but with seatbelts",
      color: "#007acc",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
  
    [SkillNames.HTML]: {
      id: 3,
      name: "html",
      label: "HTML",
      shortDescription: "The skeleton of the web",
      color: "#e34c26",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
  
    [SkillNames.CSS]: {
      id: 4,
      name: "css",
      label: "CSS",
      shortDescription: "Making things look less ugly",
      color: "#563d7c",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
  
    [SkillNames.REACT]: {
      id: 5,
      name: "react",
      label: "React",
      shortDescription: "Component-driven UI chaos",
      color: "#61dafb",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  
    [SkillNames.NEXTJS]: {
      id: 6,
      name: "nextjs",
      label: "Next.js",
      shortDescription: "React with opinions",
      color: "#ffffff",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
  
    [SkillNames.TAILWIND]: {
      id: 7,
      name: "tailwind",
      label: "Tailwind",
      shortDescription: "Utility-first sanity",
      color: "#38bdf8",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
  
    // ---------- Backend ----------
    [SkillNames.NODEJS]: {
      id: 8,
      name: "nodejs",
      label: "Node.js",
      shortDescription: "JavaScript on the server",
      color: "#6cc24a",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
  
    [SkillNames.EXPRESS]: {
      id: 9,
      name: "express",
      label: "Express",
      shortDescription: "Minimal backend framework",
      color: "#ffffff",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
  
    [SkillNames.POSTGRES]: {
      id: 10,
      name: "postgres",
      label: "PostgreSQL",
      shortDescription: "Relational database powerhouse",
      color: "#336791",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  
    [SkillNames.MONGODB]: {
      id: 11,
      name: "mongodb",
      label: "MongoDB",
      shortDescription: "NoSQL flexibility",
      color: "#47a248",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  
    // ---------- Web3 ----------
    [SkillNames.SOLIDITY]: {
      id: 12,
      name: "solidity",
      label: "Solidity",
      shortDescription: "Smart contract language",
      color: "#363636",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
    },
  
    [SkillNames.ETHEREUM]: {
      id: 13,
      name: "ethereum",
      label: "Ethereum",
      shortDescription: "Decentralized execution layer",
      color: "#627eea",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg",
    },
  
    [SkillNames.METAMASK]: {
      id: 14,
      name: "metamask",
      label: "MetaMask",
      shortDescription: "Wallet & identity layer",
      color: "#f6851b",
      icon: "https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg",
    },
  
    [SkillNames.WEB3JS]: {
      id: 15,
      name: "web3js",
      label: "Web3.js",
      shortDescription: "JS ↔ Blockchain bridge",
      color: "#f16822",
      icon: "https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png",
    },
  
    [SkillNames.ETHERS]: {
      id: 16,
      name: "ethers",
      label: "Ethers.js",
      shortDescription: "Lightweight Ethereum SDK",
      color: "#5b5bd6",
      icon: "https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png",
    },
  
    [SkillNames.HARDHAT]: {
      id: 17,
      name: "hardhat",
      label: "Hardhat",
      shortDescription: "Ethereum dev environment",
      color: "#f7df1e",
      icon: "https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png",
    },
  
    // ---------- Dev / Infra ----------
    [SkillNames.GIT]: {
      id: 18,
      name: "git",
      label: "Git",
      shortDescription: "Version control",
      color: "#f1502f",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  
    [SkillNames.GITHUB]: {
      id: 19,
      name: "github",
      label: "GitHub",
      shortDescription: "Collaboration platform",
      color: "#000000",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  
    [SkillNames.NPM]: {
      id: 20,
      name: "npm",
      label: "NPM",
      shortDescription: "Package manager",
      color: "#cb3837",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    },
  
    [SkillNames.LINUX]: {
      id: 21,
      name: "linux",
      label: "Linux",
      shortDescription: "The real OS",
      color: "#ffffff",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
  
    [SkillNames.DOCKER]: {
      id: 22,
      name: "docker",
      label: "Docker",
      shortDescription: "Containerization",
      color: "#2496ed",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
  
    [SkillNames.AWS]: {
      id: 23,
      name: "aws",
      label: "AWS",
      shortDescription: "Cloud infrastructure",
      color: "#ff9900",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
    },
  
    [SkillNames.VERCEL]: {
      id: 24,
      name: "vercel",
      label: "Vercel",
      shortDescription: "Frontend deployment",
      color: "#ffffff",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    },
  };
  