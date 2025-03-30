import {useGLTF} from "@react-three/drei";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from 'gsap'

export default function Vinyl() {
    const model = useLoader(GLTFLoader, '/models/vinyl-player.glb')
    const modelRef = useRef();

    let scrollProgress = 0;

    useGSAP(() => {
        if (!modelRef.current) return

        gsap.to(modelRef.current.scale, {
            x: 2,
            y: 2,
            z: 2,
            scrollTrigger: {
                trigger: ".scroll-container", // Your scrollable div
                start: "+=150 top",
                end: "+=650",
                scrub: true,
            }
        })

        gsap.to(modelRef.current.rotation, {
            x: Math.PI * 2, // Full rotation
            y: Math.PI * 2,
            scrollTrigger: {
                trigger: ".scroll-container", // Your scrollable div
                start: "+=1500 top",
                end: "bottom bottom",
                scrub: true,
            },
            ease: "none"
        })
    }, []);

    return (
        <group  position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <primitive
                ref={modelRef}
                object={model.scene}
                position={[0, 0, 0]}
                rotation={[45, -45, 0]}
                scale={[1, 1, 1]}
            />
        </group>
    )
}

useGLTF.preload('/models/vinyl-player.glb');

