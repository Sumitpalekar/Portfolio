import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiEthereum,
  SiSolidity,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  ethereum: {
    title: "Ethereum",
    bg: "black",
    fg: "white",
    icon: <SiEthereum />,
  },
  solidity: {
    title: "Solidity",
    bg: "black",
    fg: "white",
    icon: <SiSolidity />,
  },
  hardhat: {
    title: "Hardhat",
    bg: "black",
    fg: "white",
    icon: "⚒️",
  },
  web3js: {
    title: "Web3.js",
    bg: "black",
    fg: "white",
    icon: "🌐",
  },
  ethers: {
    title: "Ethers.js",
    bg: "black",
    fg: "white",
    icon: "⚡",
  },
  ipfs: {
    title: "IPFS",
    bg: "black",
    fg: "white",
    icon: "📡",
  },
  mongodb: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  expressjs: {
    title: "Express.js",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "blockchain-voting",
    category: "Blockchain DApp",
    title: "Blockchain Voting System",
    src: "/assets/projects-screenshots/blockchain-voting/landing.png",
    screenshots: ["landing.png", "voting.png", "results.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.solidity,
        PROJECT_SKILLS.ethereum,
        PROJECT_SKILLS.hardhat,
        PROJECT_SKILLS.ethers,
      ],
    },
    live: "https://blockchain-voting-dapp.vercel.app",
    github: "https://github.com/Sumitpalekar/blockchain-voting-system",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Secure & Transparent Blockchain Voting DApp
          </TypographyP>
          <TypographyP className="font-mono ">
            A decentralized voting application built on Ethereum blockchain that ensures 
            tamper-proof elections with complete transparency. Features secure voter authentication, 
            real-time results, and verifiable on-chain data storage.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Smart Contract Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Built with Solidity smart contracts implementing secure voting logic with prevention 
            of double voting and automated result calculation. Features event logging for complete 
            audit trails.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/blockchain-voting/contracts.png`,
              `${BASE_PATH}/blockchain-voting/architecture.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Voter Authentication</TypographyH3>
          <p className="font-mono mb-2">
            Secure voter registration system with MetaMask integration for wallet-based authentication. 
            Each vote is cryptographically signed and recorded on the blockchain for verification.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/blockchain-voting/authentication.png`,
              `${BASE_PATH}/blockchain-voting/wallet-connect.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Real-time Results</TypographyH3>
          <p className="font-mono mb-2">
            Live result tracking with interactive charts and real-time updates. Voters can verify 
            their votes on the blockchain explorer while maintaining anonymity through cryptographic hashing.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/blockchain-voting/results.png`,
              `${BASE_PATH}/blockchain-voting/analytics.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "defi-staking",
    category: "DeFi Protocol",
    title: "DeFi Staking Platform",
    src: "/assets/projects-screenshots/defi-staking/landing.png",
    screenshots: ["landing.png", "staking.png", "rewards.png"],
    live: "https://defi-staking-platform.vercel.app",
    github: "https://github.com/Sumitpalekar/defi-staking-protocol",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.solidity,
        PROJECT_SKILLS.ethereum,
        PROJECT_SKILLS.hardhat,
        PROJECT_SKILLS.web3js,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A decentralized finance staking platform allowing users to stake tokens and earn 
            yield rewards. Features compound interest, flexible staking periods, and real-time 
            reward calculations with secure smart contract implementation.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Staking Mechanism</TypographyH3>
          <p className="font-mono mb-2">
            Implemented time-locked staking with tiered reward systems. Users can choose between 
            flexible and fixed-term staking options with varying APY rates based on commitment period.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/defi-staking/staking-interface.png`,
              `${BASE_PATH}/defi-staking/options.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Reward Distribution</TypographyH3>
          <p className="font-mono mb-2">
            Automated reward distribution with compound interest calculations. Features real-time 
            APY display and historical reward tracking with transparent on-chain verification.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/defi-staking/rewards.png`,
              `${BASE_PATH}/defi-staking/history.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Security Features</TypographyH3>
          <p className="font-mono mb-2">
            Built with security-first approach including reentrancy protection, proper access controls, 
            and emergency withdrawal functions. Comprehensive test coverage with Hardhat.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/defi-staking/security.png`,
              `${BASE_PATH}/defi-staking/tests.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "nft-collection",
    category: "NFT Project",
    title: "Generative NFT Collection",
    src: "/assets/projects-screenshots/nft-collection/landing.png",
    screenshots: ["landing.png", "minting.png", "gallery.png"],
    live: "https://nft-collection-dapp.vercel.app",
    github: "https://github.com/Sumitpalekar/generative-nft-collection",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.solidity,
        PROJECT_SKILLS.ethereum,
        PROJECT_SKILLS.hardhat,
        PROJECT_SKILLS.ipfs,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A generative NFT collection with unique algorithmically generated artwork. Features 
            on-chain metadata, reveal mechanics, and interactive minting experience with IPFS 
            integration for decentralized storage.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Generative Art Algorithm</TypographyH3>
          <p className="font-mono mb-2">
            Custom algorithm for generating unique NFT artwork with layered traits and rarity system. 
            Each NFT combines different attributes programmatically to create 10,000 unique variations.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/nft-collection/generation.png`,
              `${BASE_PATH}/nft-collection/traits.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Minting Experience</TypographyH3>
          <p className="font-mono mb-2">
            Smooth minting interface with real-time gas estimation and transaction status tracking. 
            Features wallet connection, mint count limits, and whitelist functionality.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/nft-collection/minting.png`,
              `${BASE_PATH}/nft-collection/wallet.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">NFT Gallery</TypographyH3>
          <p className="font-mono mb-2">
            Interactive gallery displaying all minted NFTs with filtering by traits and rarity. 
            Features detailed NFT viewer with attribute breakdown and ownership history.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/nft-collection/gallery.png`,
              `${BASE_PATH}/nft-collection/details.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "task-manager",
    category: "Full-Stack App",
    title: "Advanced Task Manager",
    src: "/assets/projects-screenshots/task-manager/landing.png",
    screenshots: ["landing.png", "dashboard.png", "analytics.png"],
    live: "https://advanced-task-manager.vercel.app",
    github: "https://github.com/Sumitpalekar/task-management-app",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.expressjs,
        PROJECT_SKILLS.mongodb,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A comprehensive task management application with real-time collaboration, 
            advanced analytics, and productivity tracking. Built with modern full-stack 
            technologies and responsive design.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Task Management</TypographyH3>
          <p className="font-mono mb-2">
            Advanced task organization with drag-and-drop functionality, priority levels, 
            due dates, and labels. Features subtasks, attachments, and comments for comprehensive 
            project management.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/task-manager/tasks.png`,
              `${BASE_PATH}/task-manager/drag-drop.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Real-time Collaboration</TypographyH3>
          <p className="font-mono mb-2">
            Live collaboration features with Socket.io for real-time updates, team assignments, 
            and activity feeds. Team members can see changes instantly across all connected devices.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/task-manager/collaboration.png`,
              `${BASE_PATH}/task-manager/activity.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Analytics Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive analytics with productivity metrics, completion rates, and time tracking. 
            Visual charts and reports help teams optimize workflows and identify bottlenecks.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/task-manager/analytics.png`,
              `${BASE_PATH}/task-manager/reports.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "crypto-dashboard",
    category: "Crypto Analytics",
    title: "Cryptocurrency Dashboard",
    src: "/assets/projects-screenshots/crypto-dashboard/landing.png",
    screenshots: ["landing.png", "portfolio.png", "charts.png"],
    live: "https://crypto-analytics-dashboard.vercel.app",
    github: "https://github.com/Sumitpalekar/crypto-dashboard",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.expressjs,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Real-time cryptocurrency market data dashboard with portfolio tracking, 
            price alerts, and advanced charting capabilities. Integrates with multiple 
            crypto exchanges and provides comprehensive market analysis.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Market Overview</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive market data with real-time price updates, market cap rankings, 
            and 24h volume tracking. Features customizable watchlists and trending cryptocurrencies.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/crypto-dashboard/market.png`,
              `${BASE_PATH}/crypto-dashboard/watchlist.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Portfolio Tracker</TypographyH3>
          <p className="font-mono mb-2">
            Advanced portfolio management with profit/loss calculations, allocation charts, 
            and transaction history. Supports multiple wallets and exchange integrations.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/crypto-dashboard/portfolio.png`,
              `${BASE_PATH}/crypto-dashboard/allocation.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Technical Analysis</TypographyH3>
          <p className="font-mono mb-2">
            Interactive charts with multiple timeframes, technical indicators, and drawing tools. 
            Features price prediction models and market sentiment analysis.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/crypto-dashboard/charts.png`,
              `${BASE_PATH}/crypto-dashboard/analysis.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "web3-portfolio",
    category: "Portfolio",
    title: "Web3 Developer Portfolio",
    src: "/assets/projects-screenshots/web3-portfolio/landing.png",
    screenshots: ["landing.png", "projects.png", "skills.png"],
    live: "https://sumitpalekar.vercel.app",
    github: "https://github.com/Sumitpalekar/portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            My personal portfolio website showcasing blockchain development projects and 
            Web3 expertise. Features modern design, smooth animations, and responsive layout 
            that demonstrates both frontend skills and blockchain capabilities.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Modern Design</TypographyH3>
          <p className="font-mono mb-2">
            Clean, professional design with dark theme, glass morphism effects, and smooth 
            animations using Framer Motion. Fully responsive across all device sizes.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/web3-portfolio/design.png`,
              `${BASE_PATH}/web3-portfolio/mobile.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Project Showcase</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive project display with detailed case studies, live demos, and 
            technology stacks. Each project highlights specific blockchain and development skills.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/web3-portfolio/projects.png`,
              `${BASE_PATH}/web3-portfolio/project-detail.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Skills & Technologies</TypographyH3>
          <p className="font-mono mb-2">
            Interactive skills section showcasing blockchain development expertise alongside 
            full-stack web development capabilities. Features animated skill bars and technology icons.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/web3-portfolio/skills.png`,
              `${BASE_PATH}/web3-portfolio/technologies.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;