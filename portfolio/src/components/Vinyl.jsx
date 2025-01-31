import {useRef} from "react";
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

export default function Vinyl() {
    const vinylRef = useRef();
    //const scroll = useScroll(); // Tracks scroll progress (0 to 1)

    // Rotate vinyl based on scroll
/*    useFrame(() => {
        vinylRef.current.rotation.y = scroll.offset * Math.PI * 2
    })*/

    return (
        <mesh ref={vinylRef}>
            <cylinderGeometry args={[1.5, 1.5, 0.1, 64]} />
            <meshStandardMaterial
                color="#1a1a1a"
                roughness={0.3}
                metalness={0.8}
            />
        </mesh>
    )
}