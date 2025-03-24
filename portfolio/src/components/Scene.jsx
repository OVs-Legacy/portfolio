import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls, ScrollControls} from "@react-three/drei";
import Vinyl from "./Vinyl.jsx";

export default function Scene() {
    return (
        <Canvas className="vinyl-canvas h-screen w-full !fixed top-0 left-0 opacity-0 bg-teal-950">
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Environment preset="studio"/>
                    <Vinyl />
                {/* Disable zoom but allow rotation */}
                <OrbitControls enableZoom={false} />
        </Canvas>
    )
}