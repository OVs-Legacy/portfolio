import ProjectModal from "../components/ProjectModal.jsx";
import useModalIndex from "../hooks/useModalIndex.tsx";
import { projects } from "../data/projects.js";
import { useEffect } from "react";
import { useLenis } from "lenis/react";

export default function Projects() {
  const positions = ["right", "bottom", "left", "top"];
  const { openModalIndex, setOpenModalIndex } = useModalIndex();

  const lenis = useLenis();

  useEffect(() => {
    if (openModalIndex !== null) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [openModalIndex, lenis]);

  return (
    <section
      id="projects"
      className="font-archivo relative z-10 min-h-screen pt-20"
    >
      {projects.map((project, i) => {
        const position = positions[i % positions.length];
        const baseClasses = "text-white flex absolute";
        const positionClasses = {
          top: "h-[50%] w-full top-0 justify-center",
          bottom: "h-[50%] w-full bottom-0 justify-center",
          left: "w-[50%] h-full top-0 left-0 justify-start items-center",
          right: "w-[50%] h-full top-0 right-0 justify-end items-center",
        };
        const textContainerClasses = {
          top: "!mt-[5%] text-center",
          bottom: "text-center",
          left: "!ml-[30%] text-left",
          right: "!mr-[30%] text-right",
        };
        return (
          <div key={i} className="relative h-screen">
            <div
              key={i}
              className={`${baseClasses} ${positionClasses[position]}`}
            >
              <div
                className={`max-w-[500px] ${textContainerClasses[position]}`}
              >
                <h3 className="!text-8xl font-semibold whitespace-pre-line text-red-500">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between !py-2 text-red-300">
                  <p className="!text-md">{project.company}</p>
                  <p className="!text-md">{project.tech}</p>
                </div>
                <p className="text-left text-xl whitespace-pre-line">
                  {project.description}
                </p>
                <div
                  className="cursor-pointer text-right text-red-400 hover:text-red-600"
                  onClick={() => setOpenModalIndex(i)}
                >
                  Learn more →
                </div>
                {openModalIndex === i && (
                  <ProjectModal
                    onClose={() => {
                      setOpenModalIndex(null);
                    }}
                    title={project.title}
                    banner={project.banner}
                    company={project.company}
                    work={project.description}
                    type={project.type}
                    role={project.role}
                    duration={project.duration}
                    challenge={project.challenge}
                    results={project.results}
                    workflow={project.workflow}
                    images={project.images}
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
