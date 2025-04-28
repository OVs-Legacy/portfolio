import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import Vinyl from "./Vinyl.jsx";

export default function Scene() {
  return (
    <Canvas className="vinyl-canvas !fixed top-0 left-0 h-screen w-full bg-linear-to-tr from-teal-950 to-teal-900">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="studio" />
      <Vinyl />
      {/* Disable zoom but allow rotation */}
      <OrbitControls enabled={false} />
    </Canvas>
  );
}
