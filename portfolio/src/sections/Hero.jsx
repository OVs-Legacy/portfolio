import {useGSAP} from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function Hero() {
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
        <section className="hero-section h-screen flex items-center justify-center">
            <div className="vinyl-container fixed flex gap-24 pointer-events-none">
                <div className="vinyl-cover bg-black rounded-xl w-[40vw] h-[40vw] !px-4 !py-2 text-white">
                    <p className="text-2xl">Danny den Ouden</p>
                </div>
                <div className="vinyl-backside bg-black rounded-xl w-[40vw] h-[40vw] !px-4 !py-2 text-white">
                    <p className="text-2xl">Je moeder</p>
                </div>
            </div>
        </section>
    )
}