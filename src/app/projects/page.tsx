"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "ShopEase",
    description: `ShopEase — a complete e-commerce UI/front-end demo with interactive cart functionality.`,
    link: "https://github.com/Sumitpalekar/ShopEase",
    images: [
      "/assets/projects-screenshots/shopease/1.png",
      "/assets/projects-screenshots/shopease/2.png",
    ],
  },
  {
    id: 2,
    name: "TravelEase",
    description: `TravelEase — static travel booking site demo built with HTML, CSS and JS.`,
    link: "https://github.com/Sumitpalekar/TravelEase",
    images: [
      "/assets/projects-screenshots/travelease/1.png",
      "/assets/projects-screenshots/travelease/2.png",
    ],
  },
  {
    id: 3,
    name: "Ai Wallet Integration",
    description: `Integration demo showing wallet interaction with AI-assisted UX (Solidity + TS).`,
    link: "https://github.com/Sumitpalekar/Ai_Wallet_Integration_",
    images: [
      "/assets/projects-screenshots/ai_wallet/1.png",
      "/assets/projects-screenshots/ai_wallet/2.png",
    ],
  },
  {
    id: 4,
    name: "Eth Globe",
    description: `Eth_Globe — exploration of Ethereum utilities and on-chain data visualization.`,
    link: "https://github.com/Sumitpalekar/Eth_Globe",
    images: [
      "/assets/projects-screenshots/eth_globe/1.png",
      "/assets/projects-screenshots/eth_globe/2.png",
    ],
  },
  {
    id: 5,
    name: "Portfolio",
    description: `Your main portfolio site showing skills, projects, and contact info.`,
    link: "https://github.com/Sumitpalekar/Portfolio",
    images: [
      "/assets/projects-screenshots/portfolio/1.png",
      "/assets/projects-screenshots/portfolio/2.png",
    ],
  },
];

function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    arrows: false,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                  aria-label={project.name}
                >
                  {project.images.map((image, idx) => (
                    <SplideSlide key={idx}>
                      <Image
                        src={image}
                        alt={`Screenshot of ${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900"
                        width={300}
                        height={200}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>

              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>

                <Link href={project.link} target="_blank">
                  <p className="mt-2 text-sm text-blue-400 underline">
                    View on GitHub
                  </p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
