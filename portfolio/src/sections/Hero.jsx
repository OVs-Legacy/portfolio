import {useGSAP} from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cover from "../assets/images/looking-out.jpg"
import overlay from "../assets/images/paper-overlay.png"
gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function Hero() {
    const languages = [
        {title: "C#", icon:
                <i className="devicon-csharp-plain"></i>},
        {title: "Java", icon:
                <i className="devicon-java-plain-wordmark"></i>},
        {title: "JavaScript", icon:
                <i className="devicon-javascript-plain"></i>},
        {title: "HTML", icon:
                <i className="devicon-html5-plain-wordmark"></i>},
        {title: "CSS", icon:
                <i className="devicon-css3-plain-wordmark"></i>},
        {title: "Tailwind CSS", icon:
                <i className="devicon-tailwindcss-original"></i>},
        {title: "GDScript", icon:
                <i className="devicon-godot-plain-wordmark"></i>},
        {title: "React", icon:
                <i className="devicon-react-original-wordmark"></i>},
        {title: "SolidJS", icon:
                <i className="devicon-solidjs-plain"></i>},
        {title: "Figma", icon:
                <i className="devicon-figma-plain"></i>},
    ]
    const projects = [
        {title: "The Milkers", description: "Grandma's Milk, a Unity couch co-op game" },
        {title: "Municipality of Eindhoven", description: "Creating a front-end for DICE" },
        {title: "DogFood Studios", description: "Party Morph, a Godot couch co-op game" },
        {title: "OV's Legacy", description: "Cat Armor, a Minecraft mod" },
        {title: "LiberCraft", description: "A website made in SolidJS" },
    ]
    const maxProjects = 3;

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
        })
        gsap.to(".vinyl-backside", {
            scrollTrigger: {
                trigger: ".vinyl-container",
                start: "center center",
                end: "+=500",
                scrub: true,
            },
            rotateY: 90,
        })

        gsap.to(".vinyl-canvas", {
            scrollTrigger: {
                trigger: ".vinyl-container",
                start: "center center",
                end: "+=500",
                scrub: true,
            },
            opacity: 1,
        })
        gsap.to(".vinyl", {
            scrollTrigger: {
                trigger: ".vinyl-container",
                start: "center center",
                end: "+=500",
                scrub: true,
            },
            scale: 1,
        })
    }, [])

    return (
        <section className="hero-section h-screen flex items-center justify-center bg-linear-to-tr from-teal-950 to-teal-900">
            <div className="vinyl-container fixed flex gap-24 pointer-events-none">
                <div className="vinyl-cover bg-linear-to-tr from-red-950 to-red-900 rounded-xl w-[40vw] h-[40vw] !px-12 !py-12 place-content-center text-red-100 overflow-hidden relative shadow-2xl">
                    <img className="w-full h-full object-cover absolute scale-[155%] opacity-45" src={overlay} alt="overlay" />
                    <p className="font-vinyl-header text-5xl !ml-24 text-box-trim !-mb-[.6%]">Danny den Ouden</p>
                    <div className="w-[90%] h-[90%] !border-8 !border-red-100 !mx-auto overflow-hidden">
                        <img className="grayscale !-mt-[40%]" src={cover} alt="Cover image"/>
                    </div>
                    <p className="font-vinyl-header text-5xl text-right !mr-24 text-box-trim">Designer & Programmer</p>
                </div>
                <div className="font-vinyl-back font-bold vinyl-backside bg-linear-to-tl from-red-950 to-red-900 rounded-xl w-[40vw] h-[40vw] !px-4 !py-2 text-white overflow-hidden relative shadow-2xl">
                    <img className="w-full h-full object-cover absolute scale-[175%] opacity-45" src={overlay} alt="overlay" />
                    <div className="absolute right-8 top-4 max-w-[40%]">
                        <h2 className="!text-2xl">Disc: 01</h2>
                        {projects.filter((project, i) => i < maxProjects).map((project, i) => (
                            <div key={i} className="!pb-2">
                                <h3 className="!text-xl">{i+1}. {project.title}</h3>
                                <p className="font-normal !ml-8">{project.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-linear-to-t from-red-300 to-red-100 w-[10%] h-[165%] -rotate-45 !mx-[39%] !-my-[39%] !pt-[20%] !pb-[10%] flex flex-col justify-around">
                        {languages.map((languages, i) => (
                            <div key={i} className="text-black !mx-auto !mt-auto rotate-45 text-6xl">{languages.icon}</div>
                            ))}
                    </div>
                    <div className="absolute left-8 bottom-4 max-w-[40%]">
                        <h2 className="!text-2xl">Disc: 02</h2>
                        {projects.filter((project, i) => i >= maxProjects).map((project, i) => (
                            <div key={i} className="!pb-2">
                                <h3 className="!text-xl">{i+maxProjects+1}. {project.title}</h3>
                                <p className="font-normal !ml-8">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}