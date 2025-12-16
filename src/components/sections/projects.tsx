"use client";

import React from "react";
import Link from "next/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto min-h-screen">
      <h2 className="text-4xl md:text-7xl text-center pt-20 mb-24 font-bold">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 place-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

/* ---------------------------- Credit Card UI ---------------------------- */

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Modal>
      <ModalTrigger className="group">
        <div
          className={cn(
            "relative w-[360px] h-[220px] rounded-2xl p-6 text-white",
            "shadow-2xl transition-transform duration-300 hover:scale-105",
            `bg-gradient-to-br ${project.gradient}`
          )}
        >
          {/* CHIP (top-left, realistic) */}
          <div className="absolute top-5 left-5 w-10 h-7 rounded-sm bg-gradient-to-br from-yellow-200/80 to-yellow-400/80" />

          {/* category */}
          <p className="text-xs tracking-widest uppercase opacity-70 mt-8">
            {project.category}
          </p>

          {/* title */}
          <h3 className="text-xl font-semibold mt-2">
            {project.title}
          </h3>

          {/* card number */}
          <p className="mt-6 tracking-widest text-sm opacity-90">
            {project.cardNumber}
          </p>

          {/* footer */}
          <div className="absolute bottom-4 left-6 right-6 flex justify-between text-xs opacity-80">
            <span>
              {project.holder} · {project.expiry}
            </span>
            <span>{project.network}</span>
          </div>
        </div>
      </ModalTrigger>

      <ModalBody className="md:max-w-4xl md:max-h-[85%] overflow-auto">
        <SmoothScroll isInsideModal>
          <ModalContent>
            {/* Header */}
            <h3 className="text-2xl font-bold mb-2 text-center">
              {project.title}
            </h3>
            <p className="text-sm text-neutral-400 text-center mb-8">
              {project.overview}
            </p>

            {/* Skills */}
            <div className="flex flex-col md:flex-row justify-evenly gap-10 mb-12">
              {project.skills.frontend.length > 0 && (
                <div className="text-center">
                  <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">
                    Frontend
                  </p>
                  <FloatingDock items={project.skills.frontend} />
                </div>
              )}
              {project.skills.backend.length > 0 && (
                <div className="text-center">
                  <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">
                    Backend
                  </p>
                  <FloatingDock items={project.skills.backend} />
                </div>
              )}
            </div>

            {/* What it does */}
            <section className="mb-10">
              <h4 className="text-sm uppercase tracking-widest mb-3 text-neutral-500">
                What it does
              </h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                {project.whatItDoes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </section>

            {/* Highlights */}
            <section>
              <h4 className="text-sm uppercase tracking-widest mb-3 text-neutral-500">
                Highlights
              </h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                {project.highlights.map((h) => (
                  <li key={h}>✔ {h}</li>
                ))}
              </ul>
            </section>
          </ModalContent>
        </SmoothScroll>

        <ModalFooter className="gap-4">
          <Link href={project.live} target="_blank">
            <button className="px-4 py-1 rounded bg-white text-black text-sm">
              Visit
            </button>
          </Link>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};
