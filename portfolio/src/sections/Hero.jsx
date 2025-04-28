import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cover from "../assets/images/looking-out.jpg";
import overlay from "../assets/images/paper-overlay.png";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const languages = [
    { title: "C#", icon: <i className="devicon-csharp-plain"></i> },
    { title: "Java", icon: <i className="devicon-java-plain-wordmark"></i> },
    { title: "JavaScript", icon: <i className="devicon-javascript-plain"></i> },
    { title: "HTML", icon: <i className="devicon-html5-plain-wordmark"></i> },
    { title: "CSS", icon: <i className="devicon-css3-plain-wordmark"></i> },
    {
      title: "Tailwind CSS",
      icon: <i className="devicon-tailwindcss-original"></i>,
    },
    {
      title: "GDScript",
      icon: <i className="devicon-godot-plain-wordmark"></i>,
    },
    {
      title: "React",
      icon: <i className="devicon-react-original-wordmark"></i>,
    },
    { title: "SolidJS", icon: <i className="devicon-solidjs-plain"></i> },
    { title: "Figma", icon: <i className="devicon-figma-plain"></i> },
  ];
  const projects = [
    {
      title: "DogFood Studios",
      description: "Party Morph, a Godot couch co-op game",
    },
    {
      title: "Municipality of Eindhoven",
      description: "Creating a front-end for DICE",
    },
    { title: "LiberCraft", description: "A website made in SolidJS" },
    { title: "OV's Legacy", description: "Cat Armor, a Minecraft mod" },
    {
      title: "The Milkers",
      description: "Grandma's Milk, a Unity couch co-op game",
    },
  ];
  const maxProjects = 3;

  const modelRef = useRef();

  useGSAP(() => {
    // Animate LP opening on scroll
    gsap.to(".vinyl-cover", {
      scrollTrigger: {
        trigger: ".vinyl-container",
        start: "center center",
        end: "+=500",
        scrub: true,
      },
      rotateY: -90,
    });
    gsap.to(".vinyl-backside", {
      scrollTrigger: {
        trigger: ".vinyl-container",
        start: "center center",
        end: "+=500",
        scrub: true,
      },
      rotateY: 90,
    });

    gsap.to(".vinyl", {
      scrollTrigger: {
        trigger: ".vinyl-container",
        start: "center center",
        end: "+=500",
        scrub: true,
      },
      scale: 1,
    });
  }, []);

  return (
    <section className="hero-section relative z-10 flex h-screen items-center justify-center">
      <div className="vinyl-container pointer-events-none fixed flex gap-24">
        <div className="vinyl-cover relative h-[40vw] w-[40vw] place-content-center overflow-hidden rounded-xl bg-linear-to-tr from-red-950 to-red-900 !px-12 !py-12 text-red-100 shadow-2xl">
          <img
            className="absolute h-full w-full scale-[155%] object-cover opacity-45"
            src={overlay}
            alt="overlay"
          />
          <p className="font-vinyl-header text-box-trim !-mb-[.6%] !ml-24 text-5xl">
            Danny den Ouden
          </p>
          <div className="!mx-auto h-[90%] w-[90%] overflow-hidden !border-8 !border-red-100">
            <img
              className="!-mt-[40%] grayscale"
              src={cover}
              alt="Cover image"
            />
          </div>
          <p className="font-vinyl-header text-box-trim !mr-24 text-right text-5xl">
            Designer & Programmer
          </p>
        </div>
        <div className="font-vinyl-back vinyl-backside relative h-[40vw] w-[40vw] overflow-hidden rounded-xl bg-linear-to-tl from-red-950 to-red-900 !px-4 !py-2 font-bold text-white shadow-2xl">
          <img
            className="absolute h-full w-full scale-[175%] object-cover opacity-45"
            src={overlay}
            alt="overlay"
          />
          <div className="absolute top-4 right-8 max-w-[40%]">
            <h2 className="!text-2xl">Disc: 01</h2>
            {projects
              .filter((project, i) => i < maxProjects)
              .map((project, i) => (
                <div key={i} className="!pb-2">
                  <h3 className="!text-xl">
                    {i + 1}. {project.title}
                  </h3>
                  <p className="!ml-8 font-normal">{project.description}</p>
                </div>
              ))}
          </div>
          <div className="!mx-[39%] !-my-[39%] flex h-[165%] w-[10%] -rotate-45 flex-col justify-around bg-linear-to-t from-red-300 to-red-100 !pt-[20%] !pb-[10%]">
            {languages.map((languages, i) => (
              <div
                key={i}
                className="!mx-auto !mt-auto rotate-45 text-6xl text-black"
              >
                {languages.icon}
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-8 max-w-[40%]">
            <h2 className="!text-2xl">Disc: 02</h2>
            {projects
              .filter((project, i) => i >= maxProjects)
              .map((project, i) => (
                <div key={i} className="!pb-2">
                  <h3 className="!text-xl">
                    {i + maxProjects + 1}. {project.title}
                  </h3>
                  <p className="!ml-8 font-normal">{project.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
