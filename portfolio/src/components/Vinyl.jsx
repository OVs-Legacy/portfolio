import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Vinyl() {
  const model = useLoader(GLTFLoader, "/models/vinyl-player.glb");
  const modelRef = useRef();
  const totalScroll = 8000;

  useGSAP(() => {
    if (!modelRef.current) return;
    const materials = [];

    modelRef.current.children.forEach((child) => {
      if (child.isMesh) {
        child.material.transparent = true;
        child.material.opacity = 0;
        materials.push(child.material);
      }

      // Optional: if child has nested children
      if (child.children?.length) {
        child.children.forEach((nestedChild) => {
          if (nestedChild.isMesh) {
            nestedChild.material.transparent = true;
            nestedChild.material.opacity = 0;
            materials.push(nestedChild.material);
          }
        });
      }
    });

    gsap.to(modelRef.current.scale, {
      x: 2.5,
      y: 2.5,
      z: 2.5,
      scrollTrigger: {
        trigger: ".scroll-container", // Your scrollable div
        start: "+=150 top",
        end: "+=750",
        scrub: true,
      },
    });

    const appearTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".vinyl-container",
        start: "center+=150 center",
        end: "+=500",
        scrub: true,
        markers: true,
      },
    });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "+=150 top",
        end: "+=750",
        scrub: true,
      },
    });
    const firstTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "+=500 top",
        end: "+=800",
        scrub: true,
      },
    });
    const secondTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "+=1800 top",
        end: "+=800",
        scrub: true,
        markers: true,
      },
    });
    const thirdTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "+=3100 top",
        end: "+=800",
        scrub: true,
        markers: true,
      },
    });
    const fourthTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "+=4400 top",
        end: "+=800",
        scrub: true,
        markers: true,
      },
    });
    const fifthTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "+=5700 top",
        end: "+=800",
        scrub: true,
        markers: true,
      },
    });

    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        markers: true,
      },
    });

    masterTimeline
      .add(appearTimeline)
      .add(timeline)
      .add(firstTimeline)
      .add(secondTimeline)
      .add(thirdTimeline);

    appearTimeline.to(materials, {
      opacity: 1,
    });
    timeline.to(modelRef.current.rotation, {
      x: 80 * (Math.PI / 180),
      y: -75 * (Math.PI / 180),
    });
    firstTimeline.to(modelRef.current.position, {
      x: -2,
    });
    secondTimeline.to(modelRef.current.position, {
      x: 0,
      y: 2,
    });
    thirdTimeline.to(modelRef.current.position, {
      x: 2,
      y: 0,
    });
    fourthTimeline.to(modelRef.current.position, {
      x: 0,
      y: -2,
    });
    fifthTimeline.to(modelRef.current.position, {
      x: -2,
      y: 0,
    });
  }, []);

  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <primitive
        ref={modelRef}
        object={model.scene}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        scale={[1, 1, 1]}
      />
    </group>
  );
}

useGLTF.preload("/models/vinyl-player.glb");
